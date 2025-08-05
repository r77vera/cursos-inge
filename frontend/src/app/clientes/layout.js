import RoleProtectedLayout from '@/components/layouts/RoleProtectedLayout';

export default function ClientesLayout({ children }) {
  return (
    <RoleProtectedLayout requiredRoles={['ADMIN', 'VENDEDOR']}>
      {children}
    </RoleProtectedLayout>
  );
}
