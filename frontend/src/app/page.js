import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Bienvenido a la App</h1>
      <Link href="/login">
        <a className="text-blue-500 underline">Iniciar sesión</a>
      </Link>
    </div>
  );
}
