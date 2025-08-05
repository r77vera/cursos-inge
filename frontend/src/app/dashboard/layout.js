import RoleProtectedLayout from '@/components/layouts/RoleProtectedLayout';

export default function DashboardLayout({ children }) {
  return (
    <RoleProtectedLayout requiredRoles={['ADMIN', 'VENDEDOR', 'CLIENTE']}>
      {children}
    </RoleProtectedLayout>
  );
}
