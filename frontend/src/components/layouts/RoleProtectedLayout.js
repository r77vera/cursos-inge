'use client';
import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';

const ROLE_PERMISSIONS = {
  ADMIN: ['dashboard', 'usuarios', 'clientes', 'ventas'],
  VENDEDOR: ['dashboard', 'clientes', 'ventas'],
  CLIENTE: ['dashboard'],
};

export default function RoleProtectedLayout({ children, requiredRoles }) {
  const { user } = useAuth();

  if (!user) {
    redirect('/login');
  }

  const userRole = user.role;
  const allowedPaths = ROLE_PERMISSIONS[userRole] || [];
  const currentPath = window.location.pathname.split('/')[1];

  if (!allowedPaths.includes(currentPath)) {
    redirect('/dashboard');
  }

  return <div>{children}</div>;
}
