export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0f1321] text-white z-50 shadow-inner">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Sol: Logo */}
        <span className="text-orange-400 font-semibold text-sm sm:text-base">
          Reklam Alanı
        </span>

        {/* Orta: Bonus mesajı */}
        <p className="text-sm sm:text-base text-white text-center flex-1 px-4">
          Reklam vermek için iletişime geçin: t.me/benjaminlegal
        </p>

        {/* Sağ: Buton */}
        <a
          href="https://t.me/benjaminlegal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2 rounded-md transition"
        >
          ÜYE OL
        </a>
      </div>
    </div>
  );
}
