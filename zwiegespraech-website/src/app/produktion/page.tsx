"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useState } from 'react';

export default function ProduktionPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const castImages = [
    {
      id: 1,
      name: "Serge",
      actor: "Kevin Nolting",
      quote: '„Für mich ist es nicht weiß. Wenn ich sage, für mich, dann meine ich objektiv. Objektiv gesehen ist es nicht weiß. […] Sogar rot ist drin."',
      images: ["/images/serge-1.jpg", "/images/serge-2.jpg"]
    },
    {
      id: 2,
      name: "Marc",
      actor: "Bastian Bühler",
      quote: '„Ein Gedanke hinter sowas! … Was du siehst, ist zwar eine Scheiße, doch sei unbesorgt, sei unbesorgt, es steckt ein Gedanke dahinter!"',
      images: ["/images/marc-1.jpg", "/images/marc-2.jpg"]
    },
    {
      id: 3,
      name: "Yvan",
      actor: "Luis Lessing",
      quote: '„Ihr [wisst], [dass] ich weinen kann… Ich kann hier auf der Stelle anfangen zu weinen … Ich bin übrigens nicht weit davon entfernt."',
      images: ["/images/yvan-1.jpg", "/images/yvan-2.jpg"]
    }
  ];

  const galleryImages = [
    "/images/kunst-1.jpg",
    "/images/kunst-2.jpg",
    "/images/kunst-3.jpg",
    "/images/kunst-4.jpg",
    "/images/kunst-5.jpg"
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Aktuelle Produkti[oː]n</h1>
          <h2 className="text-3xl font-normal mb-8 text-center">„Kunst"</h2>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Description Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Die wortgewandte Komödie „Kunst" (uraufgeführt 1994 in Paris) von Yasmina 
                Reza beleuchtet die Beziehung zwischen den Freunden Marc, Serge und Yvan
                und dem Gemälde eines berühmten Malers: Die Tatsache, dass Serge sich 
                ein weißes Bild mit weißen Streifen für 200.000 Francs gekauft hat, 
                stößt bei Marc auf Fassungslosigkeit und Spott. Yvan verspottet Serge 
                hingegen nicht, schließlich gefällt Serge dieses Bild. Bald entwickelt 
                sich zwischen den drei Freunden nicht nur die Frage, was Kunst 
                eigentlich sein kann, sondern eine Eigendynamik, die bei genauerer 
                Betrachtung eine skurrile, witzige und nachdenkliche Auseinandersetzung 
                mit anderen Fragen erzwingt: Was ist eigentlich Freundschaft und was 
                kann diese aushalten, wenn man nicht mehr gemeinsam lachen kann?
              </p>

              {/* Video Trailer */}
              <div className="relative pt-[56.25%] bg-black mb-16">
                <video 
                  className="absolute top-0 left-0 w-full h-full" 
                  controls
                  poster="/images/kunst-poster.jpg"
                >
                  <source src="/videos/kunst-trailer.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Die Autorin - Yasmina Reza</h2>
              <p className="text-xl mb-6">
                Yasmina Reza ist eine angesehene französische Schriftstellerin, die 1959 in 
                Paris geboren wurde und für ihre intelligenten und humorvollen Werke 
                bekannt ist. Zunächst als Schauspielerin tätig, wandte sie sich später 
                dem Schreiben zu und erlangte weltweite Anerkennung mit ihrem Stück 
                „Kunst" (1994), das zahlreiche Preise erhielt. Rezas Werke zeichnen sich
                durch präzise Dialoge und subtile Beobachtungen menschlichen Verhaltens
                aus. Sie thematisiert oft zwischenmenschliche Beziehungen und das 
                Scheitern der Kommunikation. Neben Theaterstücken hat sie auch 
                erfolgreiche Romane verfasst und ebenfalls im filmischen Bereich mit 
                Roman Polanski zusammengearbeitet, wodurch sie sich als vielseitige 
                Autorin etabliert hat.
              </p>
              <p className="text-lg">
                Quelle: <a 
                  href="https://www.britannica.com/biography/Yasmina-Reza" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="text-gray-600 hover:underline"
                >
                  https://www.britannica.com/biography/Yasmina-Reza
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Cast Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Die Rollen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {castImages.map((character) => (
                <div key={character.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative pt-[125%] bg-gray-200">
                    {character.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={character.name} 
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                          index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    {character.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {character.images.map((_, index) => (
                          <button 
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                              index === activeImageIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                            aria-label={`Bild ${index + 1} anzeigen`}
                          />
                        ))}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                      {character.name}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{character.name}</h3>
                    <p className="text-gray-600 mb-4">Gespielt von: {character.actor}</p>
                    <p className="text-gray-700 italic">
                      {character.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cast & Crew List */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Mitwirkende</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg py-2"><span className="font-bold">Serge:</span> Kevin Nolting</p>
                  <p className="text-lg py-2"><span className="font-bold">Marc:</span> Bastian Bühler</p>
                  <p className="text-lg py-2"><span className="font-bold">Yvan:</span> Luis Lessing</p>
                  <p className="text-lg py-2"><span className="font-bold">Souffleuse:</span> Pauline Sebastian & Wiktoria Lessing</p>
                </div>
                <div>
                  <p className="text-lg py-2"><span className="font-bold">Inszenierung:</span> Sebastian Narhofer</p>
                  <p className="text-lg py-2"><span className="font-bold">Kostüme:</span> Kevin Nolting</p>
                  <p className="text-lg py-2"><span className="font-bold">Bühnenbild:</span> Marion Bühler</p>
                  <p className="text-lg py-2"><span className="font-bold">Requisiten:</span> Claus Wiegand</p>
                </div>
              </div>
              
              <p className="text-center mt-8">
                Weitere Informationen zu den Mitwirkenden gibt es <a href="/ueber-uns" className="text-gray-600 hover:underline">hier</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Eindrücke aus der Produktion</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={image} 
                    alt={`Szene aus "Kunst" ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg">
                Vielen Dank an{' '}
                <a href="https://www.instagram.com/marionbuehler_art/" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:underline">
                  Marion Bühler
                </a>{' '}
                und{' '}
                <a href="https://www.instagram.com/kreuzundquerfotografie/" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:underline">
                  Richard Laustroer
                </a>{' '}
                für das Bereitstellen der Fotos.
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

        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Interesse geweckt?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Besuchen Sie eine unserer Aufführungen oder nehmen Sie Kontakt mit uns auf,
              wenn Sie mehr über das Stück erfahren möchten.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kalender" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors">
                Tickets
              </a>
              <a href="/kontakt" className="bg-white border border-gray-900 hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}