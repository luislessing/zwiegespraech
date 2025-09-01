"use client";

import { useEffect } from 'react';
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
    "email": "zwiegespraechtheater.de",
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

  // JotForm Script laden
  useEffect(() => {
    // Hier wird das JotForm Script dynamisch geladen, falls nötig
    // Das passiert automatisch, wenn Sie das Script-Tag verwenden
  }, []);

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
          {/* JotForm Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  {<script type="text/javascript" src="https://form.jotform.com/jsform/252012751934048"></script>}
                  <iframe
                    id="JotFormIFrame-252012751934048"
                    title="Kontaktformular Zwiegespräch Theater"
                    onLoad={() => {
                      if (typeof window !== 'undefined' && window.parent) {
                        window.parent.scrollTo(0,0);
                      }
                    }}
                    allowTransparency={true}
                    src="https://form.jotform.com/252012751934048"
                    frameBorder="0"
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      height: '1200px', // Passen Sie die Höhe nach Bedarf an
                      border: 'none'
                    }}
                    scrolling="no"
                  />
                  
                  {/* 
                    Option 2: Script-Tag (Alternative)
                    Verwenden Sie entweder iFrame ODER Script, nicht beide!
                    
                    <script 
                      type="text/javascript" 
                      src="https://form.jotform.com/jsform/YOUR_FORM_ID"
                    />
                  */}
                  
                  {/* Fallback für den Fall, dass JotForm nicht lädt */}
                  <noscript>
                    <p className="text-center text-gray-600">
                      Das Kontaktformular benötigt JavaScript. Bitte aktivieren Sie JavaScript in Ihrem Browser oder 
                      kontaktieren Sie uns direkt per E-Mail: 
                      <a href="mailto:zwiegespraechtheater@gmx.de" className="text-blue-600 hover:underline ml-1">
                        zwiegespraechtheater@gmx.de
                      </a>
                    </p>
                  </noscript>
                </div>
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
                        <a href="mailto:zwiegespraechtheater@gmx.de" className="text-gray-600 hover:underline">
                          zwiegespraechtheater@gmx.de
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