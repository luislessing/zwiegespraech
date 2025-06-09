import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlideshow from '@/components/HeroSlideshow';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function HomePage() {
  const theaterSchema = {
    "@context": "https://schema.org",
    "@type": "TheaterGroup",
    "name": "Zwiegespräch Theater",
    "alternateName": "Schauspielkollektiv Zwiegespräch",
    "description": "Experimentelles Schauspielkollektiv aus Paderborn. Dialog, Reflexion und Theater als Kunstform.",
    "url": "https://zwiegespräch-theater.de",
    "sameAs": [
      "https://www.instagram.com/zwiegespraech_theater",
      "https://www.youtube.com/@Zwiegespraech_theater"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paderborn",
      "addressRegion": "NRW",
      "addressCountry": "DE"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Bastian Bühler"
      },
      {
        "@type": "Person",
        "name": "Sebastian Narhofer"
      },
      {
        "@type": "Person",
        "name": "Kevin Nolting"
      },
      {
        "@type": "Person",
        "name": "Luis Lessing"
      }
    ],
    "genre": "Experimentelles Theater",
    "slogan": "Alles Weitere wird Kunst"
  };

  return (
    <>
      <SEO
        title="Zwiegespräch Theater - Schauspielkollektiv Paderborn | Alles Weitere wird Kunst"
        description="Schauspielkollektiv Zwiegespräch aus Paderborn. Experimentelles Theater, Dialog und Reflexion. Aktuelle Produktionen und Aufführungstermine."
        keywords="Theater Paderborn, Schauspielkollektiv, Zwiegespräch, experimentelles Theater, Aufführungen, Kultur Paderborn"
        canonical="/"
        ogImage="/images/hero-theater.jpg"
        schema={theaterSchema}
      />
      
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        <Header />
        <HeroSlideshow />

        <main id="content" className="flex-grow">
          {/* Introduction Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Warum eigentlich Zw[i:]g[ə]spräch?</h2>
                <p className="text-xl mb-4">Definition: Gespräch unter zwei Parteien</p>
                <p className="text-lg leading-relaxed mb-8">
                  Egal, ob man es nur mit sich führt, mit jemandem oder mehreren, passt es 
                  dazu, wie wir Theater verstehen: das Sehen, das Erleben, der Austausch 
                  und die Reflexion. Dazu sind natürlich alle eingeladen: Seien es die 
                  Mitwirkenden, die Unterstützenden, die Zuschauenden oder die, die wir 
                  noch gar nicht kennen, eben wie bei einem guten Gespräch.
                </p>
                <p className="text-lg leading-relaxed">
                  Genauso verstehen wir das Zw[i:]g[ə]spräch nicht nur als einmaliges Projekt, 
                  sondern als eine langfristige Entwicklung, deren Grenzen wir selbst noch
                  gar nicht einsehen können und möchten - auch wie bei einem gutem 
                  Gespräch. Das alles soll Kern unseres Schauspielkollektivs sein.
                </p>
                <p className="text-lg mt-6">
                  Also kommt ran, wir haben zu <a href="/kontakt" className="text-gray-600 hover:underline">sprechen</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Eindrücke</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                  <img 
                    src="/images/Kunst/impression5.jpeg" 
                    alt="Theaterszene - Zwiegespräch Aufführung" 
                    className="w-full h-64 object-cover" 
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                  <img 
                    src="/images/Kunst/impression4.jpeg" 
                    alt="Schauspielkollektiv Zwiegespräch bei Probe" 
                    className="w-full h-64 object-cover" 
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                  <img 
                    src="/images/Kunst/impression3.jpeg" 
                    alt="Experimentelles Theater Paderborn" 
                    className="w-full h-64 object-cover" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Ticket Banner */}
          <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Aktuelle Aufführungen</h2>
              <p className="text-xl mb-8">Weitere Aufführungstermine folgen in Kürze</p>
              <a href="/kalender" className="inline-block bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors">
                Tickets sichern
              </a>
            </div>
          </section>

          {/* News/Updates */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Neuigk[aɪ̯]ten</h2>
              <div className="max-w-4xl mx-auto">
                <article className="border-l-4 border-gray-800 pl-6 py-2 mb-8">
                  <h3 className="text-xl font-bold mb-2">Neue Produktion in Arbeit</h3>
                  <p className="text-gray-600">Wir arbeiten an einer neuen Inszenierung. Details folgen bald!</p>
                </article>
                <article className="border-l-4 border-gray-800 pl-6 py-2 mb-8">
                  <h3 className="text-xl font-bold mb-2">Workshop-Reihe im Herbst</h3>
                  <p className="text-gray-600">Im September starten wir mit einer neuen Workshop-Reihe.</p>
                </article>
                <article className="border-l-4 border-gray-800 pl-6 py-2">
                  <h3 className="text-xl font-bold mb-2">Weitere Aufführungstermine</h3>
                  <p className="text-gray-600">Weitere Aufführungstermine folgen in Kürze.</p>
                </article>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}