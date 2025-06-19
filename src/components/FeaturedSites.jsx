import { useEffect, useState } from "react";

export default function FeaturedSites() {
  const [featuredSites, setFeaturedSites] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/featured`);
        const data = await res.json();
        setFeaturedSites(data); // ✅ sadece featured olanlar
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };
    fetchSites();
  }, []);

  if (featuredSites.length === 0) return null;

  return (
    <section className="mt-12 bg-[#1f2235] p-6 rounded-2xl shadow-lg">
      <header>
        <h1 className="text-xl font-bold text-white py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-center">
          Demir Gibi Siteler
        </h1>
      </header>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {featuredSites.slice(0, 12).map((site, index) => (
  <a
    key={index}
    href={site.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2a2d44] rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
    onClick={() => {
      fetch(`${import.meta.env.VITE_API_URL}/api/featured/${site.id}/click`, {
        method: "POST",
      }).catch((err) => console.error("Click artışı başarısız:", err));
    }}
  >
    <div className="h-40 md:h-45 lg:h-45 w-full flex items-center justify-center bg-[#1f2235]">
      <img
        src={
          site.image.startsWith("http")
            ? site.image
            : `${import.meta.env.VITE_API_URL}${site.image}`
        }
        alt={site.name}
        className="max-h-100 object-contain "
      />
    </div>
    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-center py-3 text-sm font-semibold">
      {site.bonus}
    </div>
  </a>
))}
  </div>
</section>

  );
}
