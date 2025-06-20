import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-orange-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Sayfa Bulunamadı</h2>
      <p className="mb-6 text-gray-600">Aradığınız sayfa bulunamadı veya kaldırılmış olabilir.</p>
      <Link href="/" className="text-orange-600 underline font-semibold">Anasayfaya Dön</Link>
    </main>
  );
}
