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
      {/* Header Top Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4">
          <div className="flex-1 flex justify-start items-center space-x-2 text-sm text-gray-500">
            <span>+90 555 123 45 67</span>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/logo.webp" alt="Taste Garden Logo" className="w-40 h-40 object-contain" />
          </div>
          <div className="flex-1 flex justify-end space-x-4 text-sm">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Facebook</a>
            <span className="text-gray-300">|</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Instagram</a>
          </div>
        </div>
        {/* Navigation */}
        <nav className="w-full border-t border-gray-100 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-wrap justify-center md:justify-center space-x-8 font-semibold text-gray-700 text-base">
              <li>
                <a href="#home" className="py-4 inline-block hover:text-green-700 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="py-4 inline-block hover:text-green-700 transition">About Us</a>
              </li>
              <li>
                <a href="#menu" className="py-4 inline-block hover:text-green-700 transition">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="py-4 inline-block hover:text-green-700 transition">Gallery</a>
              </li>
              <li>
                <a href="#reservation" className="py-4 inline-block hover:text-green-700 transition">Reservation</a>
              </li>
              <li>
                <a href="#faq" className="py-4 inline-block hover:text-green-700 transition">FAQ</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <article className="min-h-screen bg-white text-gray-800 flex flex-col" itemScope itemType="https://schema.org/Restaurant">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex flex-col items-center justify-center min-h-[60vh] bg-[url('/restaurant-preview.webp')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center py-24">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg" itemProp="name">
              Taste Garden
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl text-center drop-shadow-lg" itemProp="description">
              Where tradition meets innovation. Enjoy a unique fine dining experience in the heart of Istanbul.
            </p>
            <a
              href="#reservation"
              className="mt-4 px-8 py-3 bg-green-700 text-white rounded-full font-semibold shadow hover:bg-green-800 transition"
            >
              Book a Table
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-green-800">
            Welcome to Taste Garden
          </h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Established in 2025, Taste Garden is renowned for its exquisite blend of Turkish, Mediterranean, and international flavors. Our chefs use only the freshest ingredients to craft dishes that delight the senses. Whether you're celebrating a special occasion or enjoying a casual meal, our warm atmosphere and attentive service promise an unforgettable experience.
          </p>
        </section>

        {/* Menu Section */}
        <section id="menu" className="bg-gray-50 py-12 px-6" aria-labelledby="menu-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="menu-heading" className="text-3xl font-bold mb-4 text-green-800">
              Featured Menu Items
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" itemScope itemType="https://schema.org/Menu">
              <li className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                <h3 className="font-semibold text-lg mb-2 text-green-900" itemProp="name">Grilled Salmon</h3>
                <p className="text-gray-700" itemProp="description">Served with fresh Mediterranean greens and our signature sauce.</p>
              </li>
              <li className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                <h3 className="font-semibold text-lg mb-2 text-green-900" itemProp="name">Braised Lamb Shank</h3>
                <p className="text-gray-700" itemProp="description">Slow-cooked with aromatic spices and seasonal vegetables.</p>
              </li>
              <li className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition" itemProp="hasMenuItem" itemScope itemType="https://schema.org/MenuItem">
                <h3 className="font-semibold text-lg mb-2 text-green-900" itemProp="name">Vegan Bowl</h3>
                <p className="text-gray-700" itemProp="description">A healthy mix of seasonal vegetables, quinoa, and avocado.</p>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#menu" className="text-green-700 underline font-semibold">
                View Full Menu
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/restaurant-preview.webp" alt="Taste Garden Interior" className="rounded-lg shadow-lg object-cover w-full h-60" />
          </div>
        </section>

        {/* Reservation Link Section */}
        <section id="reservation" className="py-12 px-6 max-w-4xl mx-auto text-center">
          <div className="text-center mb-10">
            <a href="#reservation" className="text-green-700 underline font-semibold text-lg">
              Book a Table
            </a>
            <p className="mt-4 text-gray-600">Call us at <a href="tel:+905551234567" className="text-green-700 underline">+90 555 123 45 67</a> or use our online reservation system.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-800">Frequently Asked Questions</h2>
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
      </article>

      {/* Footer */}
      <footer className="bg-white  text-center py-6  border-t">
        <p className="text-sm text-green-900">© 2025 Taste Garden Restaurant | All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Facebook</a>
          <span>|</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Instagram</a>
        </div>
      </footer>
    </>
  );
}
