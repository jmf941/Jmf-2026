import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/news - List all news articles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const limit = parseInt(searchParams.get('limit') || '100')

    const where: any = {}
    if (category) where.category = category
    if (featured !== null) where.featured = featured === 'true'

    const articles = await prisma.newsArticle.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
    })

    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news articles' },
      { status: 500 }
    )
  }
}

// POST /api/news - Create a new article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { slug, date, title, excerpt, content, category, featured } = body

    // Validate required fields
    if (!slug || !title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, title, content' },
        { status: 400 }
      )
    }

    const article = await prisma.newsArticle.create({
      data: {
        slug,
        date: date || new Date().toLocaleDateString('sv-SE'),
        title,
        excerpt: excerpt || content.slice(0, 200) + '...',
        content,
        category: category || 'Allmänt',
        featured: featured || false,
      },
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error: any) {
    console.error('Error creating news article:', error)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'An article with this slug already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create news article' },
      { status: 500 }
    )
  }
}
