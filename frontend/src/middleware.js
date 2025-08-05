import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === '/login';
  const token = request.cookies.get('auth-token')?.value;
  
  // Redirigir a dashboard si está autenticado y trata de acceder al login
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirigir a login si no está autenticado y trata de acceder a rutas protegidas
  if (!isLoginPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*', '/usuarios/:path*', '/clientes/:path*', '/ventas/:path*']
};
 
