'use client';
import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';

export default function PrivateLayout({ children }) {
  const { user } = useAuth();

  if (!user) {
    redirect('/login');
  }

  return <div>{children}</div>;
}
