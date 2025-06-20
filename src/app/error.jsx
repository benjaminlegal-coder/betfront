"use client";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-red-600 mb-4">500</h1>
      <h2 className="text-2xl font-semibold mb-2">Bir Hata Oluştu</h2>
      <p className="mb-6 text-gray-600">Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
      <button
        onClick={() => reset()}
        className="text-red-600 underline font-semibold"
      >
        Sayfayı Yenile
      </button>
    </main>
  );
}
