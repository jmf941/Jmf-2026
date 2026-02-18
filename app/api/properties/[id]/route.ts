import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/properties/[id] - Get a specific property
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const property = await prisma.property.findUnique({
      where: { propertyId: id },
    })

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error fetching property:', error)
    return NextResponse.json(
      { error: 'Failed to fetch property' },
      { status: 500 }
    )
  }
}

// PUT /api/properties/[id] - Update a property
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const {
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

    const property = await prisma.property.update({
      where: { propertyId: id },
      data: {
        ...(name && { name }),
        ...(address && { address }),
        ...(area && { area }),
        ...(latitude !== undefined && { latitude }),
        ...(longitude !== undefined && { longitude }),
        ...(apartments !== undefined && { apartments }),
        ...(apartmentTypes && { apartmentTypes }),
        ...(description && { description }),
        ...(image !== undefined && { image }),
        ...(features && { features }),
      },
    })

    return NextResponse.json(property)
  } catch (error: any) {
    console.error('Error updating property:', error)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update property' },
      { status: 500 }
    )
  }
}

// DELETE /api/properties/[id] - Delete a property
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.property.delete({
      where: { propertyId: id },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting property:', error)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to delete property' },
      { status: 500 }
    )
  }
}
