import Head from "next/head";
import DeviceRouter from "./DeviceRouter";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Deneme Bonusu Veren Siteler 2025 - En Güncel Deneme Bonusu Listesi
        </title>
        <meta
          name="description"
          content="2025 yılında en iyi deneme bonusu veren siteler: Efesbet 333 TL, Gobahis 500 TL, Savabet 444 TL, Enbet 250 TL ve daha fazlası! Güncel ve güvenilir deneme bonusu fırsatlarını hemen inceleyin."
        />
        <meta
          name="keywords"
          content="deneme bonusu, deneme bonusu veren siteler, deneme bonusu 2025, bedava deneme bonusu, güncel deneme bonusu, bahis siteleri, bonus veren siteler"
        />
        <link rel="canonical" href="https://tastegarden.shop/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deneme Bonusu Veren Siteler 2025 - En Güncel Deneme Bonusu Listesi"
        />
        <meta
          property="og:description"
          content="2025'in en iyi ve güvenilir deneme bonusu veren siteleri burada! Hemen güncel bonusları karşılaştırın."
        />
        <meta property="og:url" content="https://tastegarden.shop/" />
        <meta property="og:image" content="/restaurant-preview.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deneme Bonusu Veren Siteler 2025" />
        <meta
          name="twitter:description"
          content="En güncel ve güvenilir deneme bonusu veren siteler 2025 listesi. Hemen incele!"
        />
        <meta name="twitter:image" content="/restaurant-preview.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Deneme bonusu nedir?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Deneme bonusu, bahis sitelerinin yeni üyelere sunduğu ücretsiz bakiye veya bahis hakkıdır.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Deneme bonusu veren en iyi siteler hangileri?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "2025 yılında en iyi deneme bonusu veren siteler: Efesbet, Gobahis, Savabet, Enbet ve daha fazlası.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <DeviceRouter />
    </>
  );
}
