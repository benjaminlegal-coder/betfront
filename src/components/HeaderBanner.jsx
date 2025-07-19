'use client';

export default function HeaderBanner() {
  return (
    <div className="bg-[#0f1321] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Sol: Site adı */}
        <div className="text-lg font-bold text-red-600 shrink-0">
          <span className="glow-text">BenjaminLegal</span>
        </div>

        {/* Orta: Kampanya mesajı - mobilde kayan yazı */}
        <div className="flex-1 overflow-hidden relative h-5 sm:h-auto">
          <div className="whitespace-nowrap animate-marquee text-sm sm:text-base font-semibold">
            Reklam Vermek İçin İletişime Geçin: t.me/benjaminlegal
          </div>
        </div>

        {/* Sağ: Üye Ol butonu */}
        <a
          href="https://t.me/benjaminlegal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transition shrink-0"
        >
          Detaylı Bilgi Al
        </a>
      </div>
    </div>
  );
}
