import DemoSurvey from './DemoSurvey.jsx'

export default function App() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">RespondeYA</h1>
        <p className="mt-4 text-lg">Encuestas rápidas, resultados instantáneos</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Probar gratis
        </button>
      </section>

      {/* Beneficios */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div><h3 className="font-bold text-xl">⚡ Rápido</h3><p className="mt-2">Resultados en tiempo real.</p></div>
        <div><h3 className="font-bold text-xl">👌 Simple</h3><p className="mt-2">Sin registros complicados.</p></div>
        <div><h3 className="font-bold text-xl">🌎 Accesible</h3><p className="mt-2">Ideal para PyMEs y equipos chicos.</p></div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Cómo funciona</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          <div className="p-4 bg-white shadow rounded-lg">1️⃣ Creás encuesta</div>
          <div className="p-4 bg-white shadow rounded-lg">2️⃣ Compartís link</div>
          <div className="p-4 bg-white shadow rounded-lg">3️⃣ Ves resultados</div>
        </div>
      </section>

      {/* Demo Survey */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Prueba una encuesta ahora mismo</h2>
        <DemoSurvey />
      </section>

      {/* Precios */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Planes & Precios</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-bold text-xl">Free</h3>
            <p className="mt-2">Hasta 5 encuestas/mes</p>
          </div>
          <div className="p-6 border rounded-lg shadow bg-indigo-600 text-white">
            <h3 className="font-bold text-xl">Pro</h3>
            <p className="mt-2">Pensado para PyMEs</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-bold text-xl">Enterprise</h3>
            <p className="mt-2">A pedido</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold">Empieza ahora gratis</h2>
        <p className="mt-2">No necesitas tarjeta</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
          Crear cuenta
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center text-sm">
        © 2025 RespondeYA · contacto@respondeya.com.ar
      </footer>
    </div>
  )
}