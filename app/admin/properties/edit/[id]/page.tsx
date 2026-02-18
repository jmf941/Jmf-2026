'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

export default function EditPropertyPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const isNew = id === 'new'

  const [form, setForm] = useState({
    propertyId: '',
    name: '',
    address: '',
    area: 'Centrum',
    latitude: 65.3175,
    longitude: 21.4786,
    apartments: 0,
    apartmentTypes: ['2 ROK'],
    description: '',
    image: '',
    features: [''],
  })
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!isNew) {
      fetchProperty()
    }
  }, [id])

  const fetchProperty = async () => {
    try {
      const response = await fetch(`/api/properties/${id}`)
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setForm({
        propertyId: data.propertyId,
        name: data.name,
        address: data.address,
        area: data.area,
        latitude: data.latitude,
        longitude: data.longitude,
        apartments: data.apartments,
        apartmentTypes: data.apartmentTypes,
        description: data.description,
        image: data.image || '',
        features: data.features,
      })
    } catch (err) {
      alert('Kunde inte hämta fastigheten')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const payload = {
      ...form,
      features: form.features.filter(f => f.trim() !== ''),
    }

    try {
      const url = isNew ? '/api/properties' : `/api/properties/${id}`
      const method = isNew ? 'POST' : 'PUT'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Failed to save')
      
      router.push('/admin/properties')
    } catch (err) {
      alert('Kunde inte spara fastigheten')
      setSaving(false)
    }
  }

  const addFeature = () => setForm({ ...form, features: [...form.features, ''] })
  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...form.features]
    newFeatures[index] = value
    setForm({ ...form, features: newFeatures })
  }
  const removeFeature = (index: number) => {
    setForm({ ...form, features: form.features.filter((_, i) => i !== index) })
  }

  if (loading) return <div className="p-8">Laddar...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {isNew ? 'Ny fastighet' : 'Redigera fastighet'}
            </h1>
            <Link href="/admin/properties" className="text-gray-600 hover:text-gray-900">
              ← Tillbaka
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">ID (URL)</label>
              <input
                type="text"
                value={form.propertyId}
                onChange={(e) => setForm({ ...form, propertyId: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
                disabled={!isNew}
                placeholder="nygatan-58"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Namn</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Adress</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Område</label>
              <select
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="Centrum">Centrum</option>
                <option value="Strömsborg">Strömsborg</option>
                <option value="Svensbyn">Svensbyn</option>
                <option value="Böle">Böle</option>
                <option value="Lillpite">Lillpite</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Antal lägenheter</label>
              <input
                type="number"
                value={form.apartments}
                onChange={(e) => setForm({ ...form, apartments: parseInt(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bild URL</label>
              <input
                type="text"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="/images/property.jpg"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Latitud</label>
              <input
                type="number"
                step="any"
                value={form.latitude}
                onChange={(e) => setForm({ ...form, latitude: parseFloat(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Longitud</label>
              <input
                type="number"
                step="any"
                value={form.longitude}
                onChange={(e) => setForm({ ...form, longitude: parseFloat(e.target.value) || 0 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Beskrivning</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Egenskaper</label>
            {form.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="t.ex. Centralt läge"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="px-3 py-2 text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="text-sm text-green-600 hover:text-green-800"
            >
              + Lägg till egenskap
            </button>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              href="/admin/properties"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Avbryt
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              {saving ? 'Sparar...' : 'Spara'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
