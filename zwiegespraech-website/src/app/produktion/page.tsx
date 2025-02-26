import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function AktuelleProduktion() {
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
        {/* Video/Trailer Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <video 
                  className="w-full h-auto rounded-lg shadow-lg" 
                  controls
                  poster="/images/kunst-poster.jpg" // Platzhalter, später ersetzen
                >
                  <source src="/videos/kunst-trailer.mp4" type="video/mp4" /> {/* Später aktualisieren */}
                  Dein Browser unterstützt kein Video.
                </video>
              </div>
            </div>
          </div>
        </section>
        
        {/* Description Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Die wortgewandte Komödie „Kunst" (uraufgeführt 1994 in Paris) von Yasmina Reza 
                beleuchtet die Beziehung zwischen den Freunden Marc, Serge und Yvan und dem 
                Gemälde eines berühmten Malers: Die Tatsache, dass Serge sich ein weißes Bild 
                mit weißen Streifen für 200.000 Francs gekauft hat, stößt bei Marc auf 
                Fassungslosigkeit und Spott. Yvan verspottet Serge hingegen nicht, schließlich 
                gefällt Serge dieses Bild.
              </p>
              <p className="text-lg mb-6">
                Bald entwickelt sich zwischen den drei Freunden nicht nur die Frage, was Kunst 
                eigentlich sein kann, sondern eine Eigendynamik, die bei genauerer Betrachtung 
                eine skurrile, witzige und nachdenkliche Auseinandersetzung mit anderen Fragen 
                erzwingt: Was ist eigentlich Freundschaft und was kann diese aushalten, wenn 
                man nicht mehr gemeinsam lachen kann?
              </p>
            </div>
          </div>
        </section>
        
        {/* Author Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Die Autorin - Yasmina Reza</h2>
              <p className="text-lg mb-6">
                Yasmina Reza ist eine angesehene französische Schriftstellerin, die 1959 in 
                Paris geboren wurde und für ihre intelligenten und humorvollen Werke bekannt ist. 
                Zunächst als Schauspielerin tätig, wandte sie sich später dem Schreiben zu und 
                erlangte weltweite Anerkennung mit ihrem Stück „Kunst" (1994), das zahlreiche 
                Preise erhielt.
              </p>
              <p className="text-lg mb-6">
                Rezas Werke zeichnen sich durch präzise Dialoge und subtile Beobachtungen menschlichen 
                Verhaltens aus. Sie thematisiert oft zwischenmenschliche Beziehungen und das Scheitern 
                der Kommunikation. Neben Theaterstücken hat sie auch erfolgreiche Romane verfasst und 
                ebenfalls im filmischen Bereich mit Roman Polanski zusammengearbeitet, wodurch sie 
                sich als vielseitige Autorin etabliert hat.
              </p>
              <p className="text-lg mb-6">
                <a 
                  href="https://www.britannica.com/biography/Yasmina-Reza" 
                  target="_blank" 
                  rel="noreferrer noopener" 
                  className="text-gray-600 hover:underline"
                >
                  Quelle: Encyclopedia Britannica
                </a>
              </p>
            </div>
          </div>
        </section>
        
        {/* Cast Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Die Rollen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Role 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative pt-[125%]">
                  <img 
                    src="/images/serge.jpg" // Platzhalter, später ersetzen
                    alt="Serge" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Serge</h3>
                  <p className="text-gray-700">
                    „Für mich ist es nicht weiß. Wenn ich sage, für mich, dann meine ich objektiv. 
                    Objektiv gesehen ist es nicht weiß. […] Sogar rot ist drin."
                  </p>
                </div>
              </div>
              
              {/* Role 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative pt-[125%]">
                  <img 
                    src="/images/marc.jpg" // Platzhalter, später ersetzen
                    alt="Marc" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Marc</h3>
                  <p className="text-gray-700">
                    „Ein Gedanke hinter sowas! … Was du siehst, ist zwar eine Scheiße, doch sei 
                    unbesorgt, sei unbesorgt, es steckt ein Gedanke dahinter!"
                  </p>
                </div>
              </div>
              
              {/* Role 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative pt-[125%]">
                  <img 
                    src="/images/yvan.jpg" // Platzhalter, später ersetzen
                    alt="Yvan" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Yvan</h3>
                  <p className="text-gray-700">
                    „Ihr [wisst], [dass] ich weinen kann… Ich kann hier auf der Stelle anfangen zu 
                    weinen … Ich bin übrigens nicht weit davon entfernt."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cast List Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Mitwirkende</h2>
              
              <div className="space-y-3">
                <p className="text-lg"><span className="font-medium">Serge:</span> Kevin Nolting</p>
                <p className="text-lg"><span className="font-medium">Marc:</span> Bastian Bühler</p>
                <p className="text-lg"><span className="font-medium">Yvan:</span> Luis Lessing</p>
                <p className="text-lg"><span className="font-medium">Souffleuse:</span> Pauline Sebastian & Wiktoria Lessing</p>
                <p className="text-lg"><span className="font-medium">Inszenierung:</span> Sebastian Narhofer</p>
                <p className="text-lg"><span className="font-medium">Kostüme:</span> Kevin Nolting</p>
                <p className="text-lg"><span className="font-medium">Bühnenbild:</span> Marion Bühler</p>
                <p className="text-lg"><span className="font-medium">Requisiten:</span> Claus Wiegand</p>
                <p className="text-lg mt-4">
                  Weitere Informationen zu den Mitwirkenden gibt es <a href="/ueber-uns" className="text-gray-600 hover:underline">hier</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Bilder der Produktion</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Hier kannst du bis zu 6 Bilder aus der Produktion hinzufügen */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={`/images/kunst-${i}.jpg`} // Platzhalter, später ersetzen
                    alt={`Szene aus "Kunst" ${i}`} 
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
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}