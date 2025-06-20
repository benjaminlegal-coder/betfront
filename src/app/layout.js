import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
        <title>Deneme Bonusu Veren Siteler 2025 - En Güncel Deneme Bonusu Listesi</title>
        <meta name="description" content="2025 yılında en iyi deneme bonusu veren siteler: Efesbet 333 TL, Gobahis 500 TL, Savabet 444 TL, Enbet 250 TL ve daha fazlası! Güncel ve güvenilir deneme bonusu fırsatlarını hemen inceleyin." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
