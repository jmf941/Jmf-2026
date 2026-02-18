// Enkel admin-panel utan databas (för nu)
// I framtiden kan kopplas till Supabase direkt

export const metadata = {
  title: 'Admin - JMF',
  robots: 'noindex, nofollow',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">JMF Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/admin/nyheter" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Nyheter</h2>
          <p className="text-gray-600">Hantera nyhetsartiklar</p>
        </a>
        
        <a href="/admin/fastigheter" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Fastigheter</h2>
          <p className="text-gray-600">Hantera fastigheter</p>
        </a>
        
        <a href="/admin/kontakt" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="text-gray-600">Se meddelanden</p>
        </a>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">
          <strong>Notis:</strong> För att redigera innehåll, kontakta Zima för tillfället.
          Databas-koppling kommer snart!
        </p>
      </div>
    </div>
  );
}
