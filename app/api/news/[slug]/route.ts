import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/news/[slug] - Get a specific article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const article = await prisma.newsArticle.findUnique({
      where: { slug },
    })

    if (!article) {
      return NextResponse.json(
        { error: 'News article not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error('Error fetching news article:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news article' },
      { status: 500 }
    )
  }
}

// PUT /api/news/[slug] - Update an article
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const body = await request.json()
    const { date, title, excerpt, content, category, featured } = body

    const article = await prisma.newsArticle.update({
      where: { slug },
      data: {
        ...(date && { date }),
        ...(title && { title }),
        ...(excerpt && { excerpt }),
        ...(content && { content }),
        ...(category && { category }),
        ...(featured !== undefined && { featured }),
      },
    })

    return NextResponse.json(article)
  } catch (error: any) {
    console.error('Error updating news article:', error)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'News article not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update news article' },
      { status: 500 }
    )
  }
}

// DELETE /api/news/[slug] - Delete an article
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    await prisma.newsArticle.delete({
      where: { slug },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting news article:', error)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'News article not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to delete news article' },
      { status: 500 }
    )
  }
}
