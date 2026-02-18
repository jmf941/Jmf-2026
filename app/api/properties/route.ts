import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/properties - List all properties
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const area = searchParams.get('area')
    const limit = parseInt(searchParams.get('limit') || '100')

    const where: any = {}
    if (area && area !== 'Alla') where.area = area

    const properties = await prisma.property.findMany({
      where,
      orderBy: { name: 'asc' },
      take: limit,
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

// POST /api/properties - Create a new property
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      propertyId,
      name,
      address,
      area,
      latitude,
      longitude,
      apartments,
      apartmentTypes,
      description,
      image,
      features,
    } = body

    // Validate required fields
    if (!propertyId || !name || !address || !area || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const property = await prisma.property.create({
      data: {
        propertyId,
        name,
        address,
        area,
        latitude: latitude || 0,
        longitude: longitude || 0,
        apartments: apartments || 0,
        apartmentTypes: apartmentTypes || [],
        description,
        image,
        features: features || [],
      },
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error: any) {
    console.error('Error creating property:', error)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A property with this ID already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    )
  }
}
