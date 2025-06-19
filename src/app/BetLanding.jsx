'use client';

import Head from "next/head";
import { useEffect, useState } from "react";
import '../App.css';
import FeaturedSites from '../components/FeaturedSites';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import PopupAd from '../components/PopupAd';
import SideBanners from '../components/SideBanners';
import CategoryBlock from '../components/CategoryBlock';
import ContactButtons from '../components/ContactButtons';

// Cihaz türünü belirle (mobil mi masaüstü mü)
const isMobile = /iPhone|iPad|iPod|Android/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : "");

// Analytics gönderme fonksiyonu
const sendAnalytics = async ({ type, source, sourceId, device }) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/analytics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, source, sourceId, device }),
  });
};

function BetLanding() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Ziyaret kaydı gönder
    sendAnalytics({
      type: "visit",
      source: "landing",
      sourceId: null,
      device: isMobile ? "mobile" : "desktop",
    });

    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

        const [categoriesRes, sitesRes] = await Promise.all([
          fetch(`${baseUrl}/api/categories`),
          fetch(`${baseUrl}/api/sites`),
        ]);

        let categories = await categoriesRes.json();
        let sites = await sitesRes.json();

        categories = categories.sort((a, b) => a.order - b.order);
        sites = sites.sort((a, b) => a.order - b.order);

        const grouped = categories.map((category) => {
          const filteredSites = sites.filter(
            (site) => site.adGroup && site.adGroup.categoryId === category.id
          );

          return {
            title: category.name,
            sites: filteredSites.map((site) => ({
              name: site.name,
              url: site.url,
              image: `${baseUrl}${site.image}`,
              bonus: site.bonus,
              id: site.id,
            })),
          };
        });

        setCategoryData(grouped);
      } catch (error) {
        console.error("Veriler alınamadı:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>2025’in En İyi Deneme Bonusu Veren Bahis Siteleri</title>
        <meta name="description" content="Deneme bonusu sunan bahis siteleri listemizi inceleyin. Güvenilir, editör onaylı siteler." />
      </Head>
      <div className="relative min-h-screen text-gray-200 bg-[#151827]">
        <HeaderBanner />
        <SideBanners />
        <PopupAd />
        <main className="px-4 py-8 lg:px-[160px] container mx-auto">
          <FeaturedSites />
          {categoryData.map((category, index) => (
            <CategoryBlock key={index} title={category.title} sites={category.sites} />
          ))}
        </main>
        <ContactButtons />
        <Footer />
      </div>
    </>
  );
}

export default BetLanding;
