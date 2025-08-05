import RoleProtectedLayout from '@/components/layouts/RoleProtectedLayout';

export default function UsuariosLayout({ children }) {
  return (
    <RoleProtectedLayout requiredRoles={['ADMIN']}>
      {children}
    </RoleProtectedLayout>
  );
}
