"use client";

import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function KontaktPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zwiegespräch Theater",
    "telephone": "+49-157-37000047",
    "email": "zwiegespraechtheater@gmx.de",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paderborn",
      "addressRegion": "Nordrhein-Westfalen",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.7189",
      "longitude": "8.7575"
    }
  };

  return (
    <>
      <SEO
        title="Kontakt - Zwiegespräch Theater Paderborn"
        description="Kontaktieren Sie das Schauspielkollektiv Zwiegespräch. Anfragen für Aufführungen, Termine und Kooperationen. Theater aus Paderborn."
        canonical="/kontakt/"
        keywords="Theater Kontakt Paderborn, Schauspielkollektiv anfragen, Aufführungen buchen"
        schema={localBusinessSchema}
      />
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">K[ɔ]ntakt</h1>
          <h2 className="text-3xl font-normal mb-8 text-center">Wir freuen uns über Nachrichten</h2>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Contact Form Notice Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Kontaktformular im Aufbau</h2>
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xl mb-6">
                Unser Kontaktformular befindet sich derzeit im Aufbau.
              </p>
              <p className="text-lg mb-12">
                Bitte verwenden Sie für die Kontaktaufnahme eine der unten stehenden 
                Möglichkeiten. Wir freuen uns auf Ihre Nachricht!
              </p>
            </div>
          </div>
        </section>

        {/* News Bar */}
        <section className="py-4 bg-gray-900 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="whitespace-nowrap">
                +++ Weitere Aufführungstermine folgen in Kürze +++
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">So erreichen Sie uns</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4">Kontaktdaten</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-medium mr-2">E-Mail:</span>
                      <a href="mailto:info@zwiegespraech-theater.de" className="text-gray-600 hover:underline">
                        info@zwiegespraech-theater.de
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4">Social Media</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-medium mr-2">Instagram:</span>
                      <a href="https://www.instagram.com/zwiegespraech_theater" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:underline">
                        @zwiegespraech_theater
                      </a>
                    </li>
                    <li className="flex">
                      <span className="font-medium mr-2">YouTube:</span>
                      <a href="https://www.youtube.com/@Zwiegespraech_theater" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:underline">
                        @Zwiegespraech_theater
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Möchten Sie uns live erleben?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Besuchen Sie unsere aktuelle Produktion und erleben Sie Theater hautnah!
            </p>
            <a href="/produktion" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors">
              Zur aktuellen Produktion
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
    </>
  );
}