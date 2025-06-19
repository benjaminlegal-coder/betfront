export default function ContactButtons() {
  return (
    <div className="bg-[#151827] py-6 px-4">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://t.me/benjaminlegal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#0088cc] text-white px-5 py-3 rounded-xl shadow-md hover:opacity-90 transition"
        >
          {/* Sol logo */}
          <div className="bg-white rounded-full p-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              className="h-5 w-5"
            />
          </div>

          {/* Sağ metin */}
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm">Reklam ve İletişim</span>
            <span className="text-xs font-light">@benjaminlegal</span>
          </div>
        </a>
      </div>

      {/* Footer reklamı için boşluk */}
      <div className="h-24" />
    </div>
  );
}
