'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface NewsArticle {
  id: string
  slug: string
  title: string
  date: string
  category: string
  featured: boolean
}

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/news')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setArticles(data)
    } catch (err) {
      setError('Kunde inte hämta nyheter')
    } finally {
      setLoading(false)
    }
  }

  const deleteArticle = async (slug: string) => {
    if (!confirm('Är du säker på att du vill ta bort denna artikel?')) return
    
    try {
      const response = await fetch(`/api/news/${slug}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Failed to delete')
      setArticles(articles.filter(a => a.slug !== slug))
    } catch (err) {
      alert('Kunde inte ta bort artikeln')
    }
  }

  if (loading) return <div className="p-8">Laddar...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Nyheter - Admin</h1>
            <div className="flex gap-4">
              <Link href="/admin/news/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                + Ny artikel
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                ← Tillbaka
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Datum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utvald</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Åtgärder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                    <div className="text-sm text-gray-500">{article.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{article.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{article.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {article.featured && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Utvald
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/news/edit/${article.slug}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      Redigera
                    </Link>
                    <button onClick={() => deleteArticle(article.slug)} className="text-red-600 hover:text-red-900">
                      Ta bort
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
