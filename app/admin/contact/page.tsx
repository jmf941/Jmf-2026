'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string
  message: string
  status: string
  createdAt: string
}

export default function AdminContactPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      // Note: We'll need to create a GET endpoint for contact messages
      // For now, this is a placeholder that shows how it would work
      const response = await fetch('/api/contact')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setMessages(data)
    } catch (err) {
      // Silently fail since we don't have the GET endpoint yet
      setMessages([])
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800'
      case 'read': return 'bg-yellow-100 text-yellow-800'
      case 'replied': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'unread': return 'Oläst'
      case 'read': return 'Läst'
      case 'replied': return 'Besvarad'
      default: return status
    }
  }

  if (loading) return <div className="p-8">Laddar...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Kontaktmeddelanden</h1>
            <Link href="/admin" className="text-gray-600 hover:text-gray-900">
              ← Tillbaka
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {messages.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-8 text-center text-gray-500">
            <p className="text-lg">Inga kontaktmeddelanden ännu.</p>
            <p className="text-sm mt-2">Meddelanden som skickas via kontaktformuläret visas här.</p>
            <p className="text-xs text-gray-400 mt-4">
              (OBS: För att visa meddelanden här behöver du lägga till en GET-endpoint för /api/contact)
            </p>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Från</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ämne</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Datum</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <tr key={message.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{message.name}</div>
                      <div className="text-sm text-gray-500">{message.email}</div>
                      {message.phone && (
                        <div className="text-sm text-gray-400">{message.phone}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{message.subject}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{message.message}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(message.createdAt).toLocaleDateString('sv-SE')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(message.status)}`}>
                        {getStatusText(message.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
