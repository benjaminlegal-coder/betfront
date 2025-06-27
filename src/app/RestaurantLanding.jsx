// pages/RestaurantLanding.jsx
import Head from "next/head";
import Link from "next/link";

export default function RestaurantLanding() {
  return (
    <>
      <Head>
        <title>Taste Garden | Fine Dining Restaurant Experience 2025</title>
        <meta
          name="description"
          content="Discover Taste Garden, a fine dining restaurant in Istanbul offering a fusion of traditional and modern cuisine. Explore our menu, make a reservation, and enjoy an unforgettable culinary journey in 2025."
        />
        <meta property="og:title" content="Taste Garden | Fine Dining Restaurant Experience 2025" />
        <meta property="og:description" content="Experience the best of Turkish and Mediterranean cuisine at Taste Garden. Reserve your table for an exceptional dining experience in Istanbul." />
        <meta property="og:image" content="/restaurant-preview.webp" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://tastegarden.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taste Garden | Fine Dining Restaurant Experience 2025" />
        <meta name="twitter:description" content="Taste Garden offers a unique blend of Turkish and world cuisine in a warm, elegant atmosphere. View our menu and book your table now." />
        <meta name="twitter:image" content="/restaurant-preview.webp" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tastegarden.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Taste Garden",
              "description": "Taste Garden is a fine dining restaurant in Istanbul, offering a fusion of Turkish, Mediterranean, and international cuisine with a modern twist.",
              "url": "https://tastegarden.com/",
              "image": "/restaurant-preview.webp",
              "servesCuisine": ["Turkish", "Mediterranean", "International"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "25 Gastronomy Avenue",
                "addressLocality": "Istanbul",
                "addressCountry": "TR"
              },
              "telephone": "+90 555 123 45 67",
              "priceRange": "$$",
              "openingHours": "Mo-Su 12:00-23:00",
              "menu": "https://tastegarden.com/menu",
              "acceptsReservations": "True"
            })
          }}
        />
      </Head>
      <article className="min-h-screen bg-white text-gray-800 flex flex-col" itemScope itemType="https://schema.org/Restaurant">
        {/* Header */}
        <header className="bg-gradient-to-b from-green-100 to-white py-20 text-center">
          <img src="/logo.webp" alt="Taste Garden Restaurant Logo" className="mx-auto mb-6 w-32 h-32 object-contain" itemProp="logo" />
          <h1 className="text-4xl font-extrabold mb-4" itemProp="name">Taste Garden</h1>
          <p className="text-lg mb-6" itemProp="description">
            Where tradition meets innovation. Enjoy a unique fine dining experience in the heart of Istanbul.
          </p>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* About Section */}
          <section className="py-16 px-6 max-w-6xl mx-auto text-center" itemProp="description">
            <h2 className="text-4xl font-bold mb-6">
              Welcome to Taste Garden
            </h2>
            <p className="text-lg text-center mb-8">
              Established in 2025, Taste Garden is renowned for its exquisite blend of Turkish, Mediterranean, and international flavors. Our chefs use only the freshest ingredients to craft dishes that delight the senses. Whether you're celebrating a special occasion or enjoying a casual meal, our warm atmosphere and attentive service promise an unforgettable experience.
            </p>
          </section>

          {/* Menu Section */}
          <section className="bg-gray-50 py-12 px-6" aria-labelledby="menu-heading">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="menu-heading" className="text-2xl font-bold mb-4">
                Featured Menu Items
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" itemScope itemType="https://schema.org/Menu">
                <li className="bg-white rounded-lg shadow p-6" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                  <h3 className="font-semibold text-lg mb-2" itemProp="name">Grilled Salmon</h3>
                  <p className="text-gray-700" itemProp="description">Served with fresh Mediterranean greens and our signature sauce.</p>
                </li>
                <li className="bg-white rounded-lg shadow p-6" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                  <h3 className="font-semibold text-lg mb-2" itemProp="name">Braised Lamb Shank</h3>
                  <p className="text-gray-700" itemProp="description">Slow-cooked with aromatic spices and seasonal vegetables.</p>
                </li>
                <li className="bg-white rounded-lg shadow p-6" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                  <h3 className="font-semibold text-lg mb-2" itemProp="name">Vegan Bowl</h3>
                  <p className="text-gray-700" itemProp="description">A healthy mix of seasonal vegetables, quinoa, and avocado.</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/menu" className="text-green-700 underline font-semibold">
                  View Full Menu
                </Link>
              </div>
            </div>
          </section>

          {/* Restaurant Image Section */}
          <section className="py-12 px-6 max-w-4xl mx-auto text-center">
            <img
              src="/restaurant-preview.webp"
              alt="Taste Garden restaurant interior"
              className="mx-auto rounded-lg shadow mb-8"
              width={600}
              height={350}
              loading="lazy"
              itemProp="image"
            />
          </section>

          {/* Reservation Link Section */}
          <section className="py-12 px-6 max-w-4xl mx-auto text-center">
            <div className="text-center mb-10">
              <Link href="/reservation" className="text-green-700 underline font-semibold">
                Book a Table
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Do you offer vegetarian or vegan options?</h3>
              <p>Yes, our menu includes a variety of vegetarian and vegan dishes to cater to all dietary preferences.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Is reservation required?</h3>
              <p>We recommend making a reservation, especially during evenings and weekends, to ensure your table.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you have private event spaces?</h3>
              <p>Yes, we offer private spaces for birthdays, meetings, and special occasions. Please contact us for more details.</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6">
          <p className="text-sm">© 2025 Taste Garden Restaurant | All rights reserved.</p>
        </footer>
      </article>
    </>
  );
}
