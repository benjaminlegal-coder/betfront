// pages/RestaurantLanding.jsx
import Head from "next/head";
import Link from "next/link";

export default function RestaurantLanding() {
  return (
    <>
      <Head>
        <title>2025 Yılı Deneme Bonusu Veren Siteler | Bilgilendirme</title>
        <meta
          name="description"
          content="2025 yılında deneme bonusu sunan bahis siteleri hakkında genel bilgilendirme. Farklı platformlar ve bonus türleri hakkında bilgi edinin."
        />
        <meta property="og:title" content="2025 Yılı Deneme Bonusu Veren Siteler | Bilgilendirme" />
        <meta property="og:description" content="Deneme bonusu nedir, nasıl alınır ve hangi siteler veriyor? 2025 yılı için güncel bilgiler burada!" />
        <meta property="og:image" content="/bonus-preview.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bonusbilgilendirme.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2025 Yılı Deneme Bonusu Veren Siteler | Bilgilendirme" />
        <meta name="twitter:description" content="2025 yılında deneme bonusu veren siteler hakkında detaylı bilgilere ulaşın." />
        <meta name="twitter:image" content="/bonus-preview.webp" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "2025 Yılı Deneme Bonusu Veren Siteler | Bilgilendirme",
              "description": "2025 yılında deneme bonusu sunan bahis siteleri hakkında genel bilgilendirme. Farklı platformlar ve bonus türleri hakkında bilgi edinin.",
              "url": "https://bonusbilgilendirme.shop/",
              "image": "/bonus-preview.webp"
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-b from-blue-100 to-white py-20 text-center">
          <img src="/logo.webp" alt="2025 Yılı Deneme Bonusu Veren Siteler - Bilgilendirme" className="mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold mb-4">2025 Yılı Deneme Bonusu Veren Siteler</h1>
          <p className="text-lg mb-6">Deneme bonusu nedir, nasıl alınır ve hangi siteler veriyor? 2025 yılı için güncel bilgiler burada!</p>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* SEO Ana Başlık */}
          <section className="py-16 px-6 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Deneme Bonusu Veren Siteler 2025 Hakkında Bilgilendirme
            </h1>
            <p className="text-lg text-center mb-8">
              Bu sayfa, 2025 yılında deneme bonusu sunan bahis siteleri hakkında genel bilgilendirme amacıyla hazırlanmıştır. Buradaki bilgiler, kullanıcıların farklı platformlar ve bonus türleri hakkında bilgi edinmesini sağlamak içindir. Herhangi bir teşvik veya yönlendirme amacı taşımaz.
            </p>
          </section>

          {/* About Section */}
          <section className="bg-gray-50 py-12 px-6" aria-labelledby="about-heading">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="about-heading" className="text-2xl font-bold mb-4">
                Deneme Bonusu Nedir?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Deneme bonusu, bazı bahis siteleri tarafından yeni üyelere sunulan, genellikle küçük miktarlarda verilen ve kullanıcıların siteyi risksiz şekilde denemesine olanak tanıyan bir promosyon türüdür. Bu bonuslar, çoğunlukla belirli şartlara tabidir ve çekim işlemleri için ek gereklilikler bulunabilir.
              </p>
            </div>
          </section>

          {/* Informative Image Section */}
          <section className="py-12 px-6 max-w-4xl mx-auto text-center">
            <img
              src="/restaurant-preview.webp"
              alt="2025 yılında deneme bonusu hakkında bilgilendirici görsel"
              className="mx-auto rounded-lg shadow mb-8"
              width={600}
              height={350}
              loading="lazy"
            />
          </section>

          {/* Internal Link Section */}
          <section className="py-12 px-6 max-w-4xl mx-auto text-center">
            <div className="text-center mb-10">
              <Link href="/iletisim" className="text-orange-600 underline font-semibold">
                İletişim ve detaylı bilgi için tıklayın
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Sıkça Sorulan Sorular</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Deneme bonusu nedir?</h3>
              <p>Deneme bonusu, bazı platformların yeni kullanıcılara sunduğu, siteyi tanımaya yönelik promosyonlardır. Her platformun şartları farklı olabilir.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Bonuslar otomatik mi tanımlanır?</h3>
              <p>Çoğu platformda deneme bonusu otomatik olarak tanımlanmaz, başvuru veya doğrulama gerekebilir. Detaylar için ilgili platformun resmi sitesini inceleyiniz.</p>
            </div>
            <div>
              <h3 className="font-semibold">Bonusların çekim şartları nelerdir?</h3>
              <p>Bonusların çekilebilmesi için genellikle belirli çevrim şartları ve ek kurallar bulunur. Lütfen ilgili platformun kurallarını dikkatlice okuyunuz.</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6">
          <p className="text-sm">© 2025 Deneme Bonusu Veren Siteler | Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </>
  );
}
