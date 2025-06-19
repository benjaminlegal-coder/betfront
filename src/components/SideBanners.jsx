import { useEffect, useState } from "react";

export default function SideBanners() {
  const [isOpen, setIsOpen] = useState(false);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/sideads`);
        const data = await res.json();
        const rightSideAds = data.filter(ad => ad.position === "right" || !ad.position);
        setAds(rightSideAds);
      } catch (error) {
        console.error("Reklamlar alınırken hata:", error);
      }
    };

    fetchAds();
  }, []);

  // ✅ Click artırma işlemi
  const handleClick = async (ad) => {
    if (!ad.id) return;

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/sideads/${ad.id}/click`, {
        method: "POST",
      });
    } catch (err) {
      console.error("SideAd tıklama artırılamadı:", err);
    }
  };

  return (
    <>
      {/* Sağ Banner Grubu */}
      <div
        className={`fixed top-24 right-0 z-40 w-48 transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
      >
        <div className="bg-[#1f2235] p-2 rounded-l-md shadow-lg max-h-[80vh] overflow-y-auto space-y-3">
          {/* Kapat Butonu */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-semibold py-2 rounded-md mb-2 hover:opacity-90 transition"
          >
            → KAPAT
          </button>

          {ads.map((ad, index) => (
            <div
              key={index}
              className="bg-[#2a2d44] rounded-md p-2 flex flex-col items-center text-center gap-2"
            >
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick(ad)} // ✅ Click sayısını artır
              >
                <img
                  src={ad.image}
                  alt={ad.name}
                  className="w-full max-h-10 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Aç Butonu */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-24 right-0 z-30 bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-semibold px-3 py-2 rounded-l-md shadow-md hover:opacity-90 transition"
        >
          ← AÇ
        </button>
      )}
    </>
  );
}
