'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Property {
  id: string
  propertyId: string
  name: string
  address: string
  area: string
  apartments: number
}

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setProperties(data)
    } catch (err) {
      setError('Kunde inte hämta fastigheter')
    } finally {
      setLoading(false)
    }
  }

  const deleteProperty = async (id: string) => {
    if (!confirm('Är du säker på att du vill ta bort denna fastighet?')) return
    
    try {
      const response = await fetch(`/api/properties/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Failed to delete')
      setProperties(properties.filter(p => p.propertyId !== id))
    } catch (err) {
      alert('Kunde inte ta bort fastigheten')
    }
  }

  if (loading) return <div className="p-8">Laddar...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Fastigheter - Admin</h1>
            <div className="flex gap-4">
              <Link href="/admin/properties/new" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                + Ny fastighet
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Namn</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Adress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Område</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lägenheter</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Åtgärder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {properties.map((property) => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {property.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.area}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.apartments}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/properties/edit/${property.propertyId}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      Redigera
                    </Link>
                    <button onClick={() => deleteProperty(property.propertyId)} className="text-red-600 hover:text-red-900">
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
