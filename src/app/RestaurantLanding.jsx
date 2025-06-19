// pages/RestaurantLanding.jsx
import Head from "next/head";

export default function RestaurantLanding() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>2025년 최고의 고급 레스토랑 | 맛의정원 - 파인다이닝 & 시그니처 요리</title>
        <meta
          name="description"
          content="2025년 최고의 고급 레스토랑 맛의정원에서 잊지 못할 미식 경험을 즐기세요. 시그니처 요리, 아늑한 분위기, 이스탄불 최고의 다이닝 예약!"
        />
        <meta property="og:title" content="2025년 최고의 고급 레스토랑 | 맛의정원" />
        <meta property="og:description" content="맛의정원에서 파인다이닝, 시그니처 메뉴, 아늑한 분위기를 경험하세요. 지금 예약하세요!" />
        <meta property="og:image" content="/restaurant-preview.webp" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://tastegarden.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2025년 최고의 고급 레스토랑 | 맛의정원" />
        <meta name="twitter:description" content="이스탄불 최고의 고급 레스토랑 맛의정원에서 특별한 미식 경험을 즐기세요!" />
        <meta name="twitter:image" content="/restaurant-preview.webp" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "맛의정원",
              "image": "/restaurant-preview.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "이스탄불",
                "addressCountry": "TR"
              },
              "telephone": "+82 123 456 7890",
              "servesCuisine": ["고급", "피자", "버거", "디저트"],
              "url": "https://tastegarden.shop/"
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-b from-orange-100 to-white py-20 text-center">
          <img src="/logo.webp" alt="테이스트가든(Taste Garden) 로고 - 이스탄불 고급 레스토랑" className="mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold mb-4">테이스트가든 – 2025년 최고의 고급 레스토랑</h1>
          <p className="text-lg mb-6">시그니처 요리, 현대적인 분위기, 이스탄불에서 잊지 못할 맛의 경험.</p>
          <a
            href="#menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
          >
            메뉴 보기
          </a>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Menu Section */}
          <section id="menu" className="py-16 px-6 max-w-6xl mx-auto" aria-labelledby="menu-heading">
            <h2 id="menu-heading" className="text-2xl font-bold mb-6 text-center">
              인기 메뉴
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["피자", "버거", "디저트"].map((item, i) => (
                <article
                  key={i}
                  className="border rounded-lg p-4 shadow hover:shadow-md transition"
                  aria-label={`추천 요리: ${item}`}
                >
                  <img
                    src={`/menu-${i + 1}.webp`}
                    alt={`맛의정원 ${item} - 이스탄불 최고의 고급 레스토랑`} 
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <h3 className="text-lg font-semibold">{item}</h3>
                  <p className="text-sm text-gray-600">특별한 한 입의 경험!</p>
                </article>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="bg-gray-50 py-12 px-6" aria-labelledby="about-heading">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="about-heading" className="text-2xl font-bold mb-4">
                레스토랑 소개
              </h2>
              <p className="text-gray-700 leading-relaxed">
                맛의정원은 신선한 재료와 전통 레시피, 현대적인 프레젠테이션으로 특별한 미식 경험을 선사합니다. 사랑하는 사람들과 함께 잊지 못할 식사를 즐기세요.
              </p>
            </div>
          </section>

          {/* Call To Action */}
          <section className="bg-orange-100 py-12" aria-labelledby="reservation-cta">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="reservation-cta" className="text-2xl font-bold mb-4">
                예약하기
              </h2>
              <p className="mb-6">인기 시간대는 미리 예약하세요!</p>
              <a
                href="tel:+821234567890"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
              >
                📞 +82 123 456 7890
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6">
          <p className="text-sm">© {currentYear} 맛의정원 | 모든 권리 보유</p>
          <nav className="flex justify-center gap-4 mt-2" aria-label="Footer Menu">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-orange-500"
            >
              인스타그램
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-orange-500"
            >
              위치 안내
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
