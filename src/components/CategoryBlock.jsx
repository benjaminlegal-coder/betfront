'use client';

export default function CategoryBlock({ title, sites }) {
  const handleClick = async (site) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/sites/${site.id}/click`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Tıklama sayısı artırılamadı:", error);
    }
  };

  return (
    <section className="mt-12 rounded-md overflow-hidden">
      {/* Başlık */}
      <h2 className="text-xl font-bold text-white py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-center">
        {title}
      </h2>

      {/* Liste */}
      <div className="bg-[#1f2235] divide-y divide-gray-700">
        {sites.map((site, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between p-4 gap-4 hover:bg-[#2a2d44] transition-colors"
          >
            {/* Görsel */}
            <div className="w-32 h-32 sm:w-64 sm:h-32 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src={site.image}
                alt={site.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Açıklama */}
            <div className="flex-1 text-white text-sm sm:text-lg text-center sm:text-left px-2">
              <strong className=" bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">{site.name} -</strong > {site.bonus}
            </div>

            {/* Buton */}
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(site)}
              className="text-md sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full font-semibold hover:opacity-90 transition whitespace-nowrap"
            >
              Kayıt Ol
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
