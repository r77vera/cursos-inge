'use client';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const NAV_ITEMS = {
  ADMIN: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/usuarios', label: 'Usuarios' },
    { path: '/clientes', label: 'Clientes' },
    { path: '/ventas', label: 'Ventas' },
  ],
  VENDEDOR: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/clientes', label: 'Clientes' },
    { path: '/ventas', label: 'Ventas' },
  ],
  CLIENTE: [
    { path: '/dashboard', label: 'Dashboard' },
  ],
};

export default function Navigation() {
  const { user, logout } = useAuth();
  
  if (!user) return null;

  const navItems = NAV_ITEMS[user.role] || [];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}
