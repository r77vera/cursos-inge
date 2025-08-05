import Link from 'next/link'
import { BarChart, Users, ShoppingCart } from 'lucide-react' // Usaremos iconos para un look más pro

export default function Home() {
  return (
    <main className="bg-red-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Transforma tus Ventas
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            La plataforma todo-en-uno para potenciar tu negocio. Gestiona clientes, productos y ventas de forma inteligente y eficiente.
          </p>
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Acceder ahora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-orange">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Potencia para tu Negocio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">Descubre todo lo que puedes hacer.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Gestión de Ventas</h3>
              <p className="text-gray-600 dark:text-gray-400">Registra y monitorea cada venta en tiempo real. Nunca pierdas un detalle.</p>
            </div>
            <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Users className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Control de Clientes</h3>
              <p className="text-gray-600 dark:text-gray-400">Mantén una base de datos completa y accesible de todos tus clientes.</p>
            </div>
            <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <BarChart className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Reportes y Analíticas</h3>
              <p className="text-gray-600 dark:text-gray-400">Visualiza el rendimiento de tu negocio con reportes claros y potentes.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

