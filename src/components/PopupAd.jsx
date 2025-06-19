'use client';

import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export default function PopupAd() {
  const [popupAds, setPopupAds] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchPopups = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/popups`);
        const data = await res.json();
        setPopupAds(data);
        setIsVisible(true); // veriler geldikten sonra popup'ı göster
      } catch (err) {
        console.error("Popup verileri çekilemedi:", err);
      }
    };

    const timer = setTimeout(() => {
      fetchPopups();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Tıklama sayısını artıran fonksiyon
  const handleClick = async (popup) => {
    if (!popup.id) return;

    try {
      await fetch(`${baseUrl}/api/popups/${popup.id}/click`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Tıklama artırılamadı:", err);
    }
  };

  if (!isVisible || popupAds.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-[#1f2235] rounded-xl shadow-xl w-[90%] max-w-lg max-h-[90vh] overflow-y-auto p-4 relative">
        {popupAds.map((ad, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#2a2d44] rounded-lg px-3 py-2 mb-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={ad.image}
                alt={ad.name}
                className="h-20 w-auto object-contain rounded-sm"
              />
              <span className="text-2xl text-white font-medium">
                {ad.name}
              </span>
            </div>
            <a
              href={ad.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(ad)} // ✅ tıklama işlemi
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-md font-bold px-3 py-1.5 rounded-md hover:opacity-90 transition"
            >
              Siteyi Aç
            </a>
          </div>
        ))}

        <button
          onClick={() => setIsVisible(false)}
          className="mx-auto mt-4 block bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow hover:bg-red-700 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
