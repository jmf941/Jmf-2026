"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [logs, setLogs] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Hämta loggar från servern
    fetchLogs();
    const interval = setInterval(fetchLogs, 30000); // Uppdatera var 30e sekund
    return () => clearInterval(interval);
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await fetch("/api/logs");
      if (response.ok) {
        const data = await response.json();
        setLogs(data.logs || []);
      }
    } catch (error) {
      console.error("Kunde inte hämta loggar:", error);
    }
  };

  const handleLogout = () => {
    document.cookie = "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900">JMF Admin</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Logga ut
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Meny */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold text-slate-900 mb-4">Meny</h2>
              <nav className="space-y-2">
                <a href="/admin/dashboard" className="block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                  Dashboard
                </a>
                <a href="/admin/nyheter" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg">
                  Nyheter
                </a>
                <a href="/admin/fastigheter" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg">
                  Fastigheter
                </a>
              </nav>
            </div>
          </div>

          {/* Innehåll */}
          <div className="md:col-span-2">
            {/* Server-status */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="font-semibold text-slate-900 mb-4">Server-status</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">Servern körs på port 3000</span>
              </div>
            </div>

            {/* Loggar */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-semibold text-slate-900 mb-4">Senaste loggar</h2>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm h-96 overflow-y-auto">
                {logs.length === 0 ? (
                  <p className="text-slate-500">Inga loggar tillgängliga...</p>
                ) : (
                  logs.map((log, index) => (
                    <div key={index} className="mb-1">
                      {log}
                    </div>
                  ))
                )}
              </div>
              <button
                onClick={fetchLogs}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Uppdatera loggar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
