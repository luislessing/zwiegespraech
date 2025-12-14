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
        {/* Coming Soon Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Archiv im Aufbau</h2>
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-xl mb-6">
                Hier werden in Zukunft unsere vergangenen Produktionen und Projekte präsentiert.
              </p>
              <p className="text-lg mb-12">
                Das Archiv befindet sich derzeit im Aufbau. Schauen Sie bald wieder vorbei,
                um mehr über die Geschichte und bisherigen Inszenierungen von Zw[i:]g[ə]spräch e.V. 
                zu erfahren.
              </p>
              <div className="mt-8">
                <a href="/produktion" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors inline-block">
                  Zur aktuellen Produktion
                </a>
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

        {/* Brief Description */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Über das künftige Archiv</h2>
              <p className="text-lg mb-6">
                In unserem Archiv werden Sie zukünftig Informationen zu allen bisherigen Produktionen von
                Zw[i:]g[ə]spräch e.V. finden. Wir dokumentieren hier unsere künstlerische
                Arbeit und bewahren die Erinnerungen an vergangene Projekte.
              </p>
              <p className="text-lg">
                Für Informationen zu unserer aktuellen Produktion besuchen Sie bitte die entsprechende Seite.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
