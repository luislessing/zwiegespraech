"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function ArchivPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Arch[i:]v</h1>
          <h2 className="text-3xl font-normal mb-8 text-center">Unsere bisherigen Produktionen</h2>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Past Productions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Vergangene Produktionen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Production 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative pt-[125%]">
                  <img 
                    src="/images/production-1.jpg" 
                    alt="Produktion 1" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">2023</p>
                  <h3 className="text-xl font-bold mb-3">Produktionstitel 1</h3>
                  <p className="text-gray-700">
                    Beschreibung der Produktion mit Details zum Stück und zur Aufführung.
                  </p>
                  <a 
                    href="#" 
                    className="mt-4 inline-block text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                  >
                    Mehr erfahren &rarr;
                  </a>
                </div>
              </div>
              
              {/* Production 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative pt-[125%]">
                  <img 
                    src="/images/production-2.jpg" 
                    alt="Produktion 2" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">2022</p>
                  <h3 className="text-xl font-bold mb-3">Produktionstitel 2</h3>
                  <p className="text-gray-700">
                    Beschreibung der Produktion mit Details zum Stück und zur Aufführung.
                  </p>
                  <a 
                    href="#" 
                    className="mt-4 inline-block text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                  >
                    Mehr erfahren &rarr;
                  </a>
                </div>
              </div>
              
              {/* Production 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative pt-[125%]">
                  <img 
                    src="/images/production-3.jpg" 
                    alt="Produktion 3" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">2021</p>
                  <h3 className="text-xl font-bold mb-3">Produktionstitel 3</h3>
                  <p className="text-gray-700">
                    Beschreibung der Produktion mit Details zum Stück und zur Aufführung.
                  </p>
                  <a 
                    href="#" 
                    className="mt-4 inline-block text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                  >
                    Mehr erfahren &rarr;
                  </a>
                </div>
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

        {/* Archive Description */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Über das Archiv</h2>
              <p className="text-lg mb-6">
                In unserem Archiv finden Sie Informationen zu allen bisherigen Produktionen von
                Zw[i:]g[ə]spräch e.V.. Wir dokumentieren hier unsere künstlerische
                Arbeit und bewahren die Erinnerungen an vergangene Projekte.
              </p>
              <p className="text-lg mb-6">
                Für weitere Informationen zu unseren vergangenen Produktionen oder wenn Sie 
                Interesse an Aufführungsrechten haben, nehmen Sie gerne Kontakt mit uns auf.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Eindrücke aus unseren Produktionen</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={`/images/archive-${i}.jpg`}
                    alt={`Szene aus früheren Produktionen ${i}`} 
                    className="w-full h-64 object-cover"
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

        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Interesse an unseren Produktionen?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Besuchen Sie unsere aktuelle Produktion oder nehmen Sie Kontakt mit uns auf, 
              wenn Sie mehr über vergangene Stücke erfahren möchten.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/produktion" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors">
                Aktuelle Produktion
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