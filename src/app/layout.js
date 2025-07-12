import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deneme Bonusu Veren Siteler 2025 - En Güncel Deneme Bonusu Listesi",
  description:
    "2025 yılında en iyi deneme bonusu veren siteler: Efesbet 333 TL, Gobahis 500 TL, Savabet 444 TL, Enbet 250 TL ve daha fazlası! Güncel ve güvenilir deneme bonusu fırsatlarını hemen inceleyin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ff6600" />
        <title>Deneme Bonusu Veren Siteler 2025 - En Güncel Deneme Bonusu Listesi</title>
        <meta name="description" content="2025 yılında en iyi deneme bonusu veren siteler: Efesbet 333 TL, Gobahis 500 TL, Savabet 444 TL, Enbet 250 TL ve daha fazlası! Güncel ve güvenilir deneme bonusu fırsatlarını hemen inceleyin." />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://tastegarden.shop" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Deneme Bonusu Veren Siteler 2025 - En Güncel Deneme Bonusu Listesi" />
        <meta property="og:description" content="2025'in en iyi ve güvenilir deneme bonusu veren siteleri burada! Hemen güncel bonusları karşılaştırın." />
        <meta property="og:url" content="https://tastegarden.shop" />
        <meta property="og:image" content="/restaurant-preview.webp" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deneme Bonusu Veren Siteler 2025" />
        <meta name="twitter:description" content="En güncel ve güvenilir deneme bonusu veren siteler 2025 listesi. Hemen incele!" />
        <meta name="twitter:image" content="/restaurant-preview.webp" />
        {/* FAQ Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Deneme bonusu nedir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Deneme bonusu, bahis sitelerinin yeni üyelere sunduğu ücretsiz bakiye veya bahis hakkıdır."
              }
            },
            {
              "@type": "Question",
              "name": "Deneme bonusu veren en iyi siteler hangileri?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "2025 yılında en iyi deneme bonusu veren siteler: Efesbet, Gobahis, Savabet, Enbet ve daha fazlası."
              }
            }
          ]
        }` }} />
        {/* Organization Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Deneme Bonusu Veren Siteler 2025",
          "url": "https://tastegarden.shop",
          "logo": "/favicon.png",
          "sameAs": [
            "https://www.instagram.com/benjaminlegal",
            "https://t.me/benjaminlegal"
          ]
        }` }} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-905SNCLCZ3"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-905SNCLCZ3');
        ` }} />
        {/* Font preconnect ve display=swap */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&display=swap" rel="stylesheet" />
        {/* Erişilebilirlik için ek meta */}
        <meta name="color-scheme" content="light dark" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="oiQfpqKjV5J8nk5AmXx++w" async></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
