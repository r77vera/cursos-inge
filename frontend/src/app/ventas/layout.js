import RoleProtectedLayout from '@/components/layouts/RoleProtectedLayout';

export default function VentasLayout({ children }) {
  return (
    <RoleProtectedLayout requiredRoles={['ADMIN', 'VENDEDOR']}>
      {children}
    </RoleProtectedLayout>
  );
}
