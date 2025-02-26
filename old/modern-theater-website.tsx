import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Youtube, ChevronUp } from 'lucide-react';

const ZwiegespraechWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Monochrome color palette
  const colors = {
    black: '#1a1a1a',
    darkGray: '#333333',
    gray: '#666666',
    lightGray: '#e0e0e0',
    extraLightGray: '#f5f5f5',
    white: '#ffffff'
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Slideshow timer
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev < 2 ? prev + 1 : 0));
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const slides = [
    {
      title: "Zw[i:]g[ə]spräch",
      image: "/api/placeholder/1600/800",
      alt: "Theater Logo"
    },
    {
      title: "Alles Weitere wird Kunst",
      image: "/api/placeholder/1600/800",
      alt: "Theaterszene"
    },
    {
      title: "Willkommen bei Zw[i:]g[ə]spräch",
      image: "/api/placeholder/1600/800",
      alt: "Gruppenphoto"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 text-white shadow-md py-2' : 'bg-transparent text-gray-100 py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">Zw[i:]g[ə]spräch</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-gray-400 transition-colors font-medium">Starts[a]ite</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Aktuelle Produkti[oː]n</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Über [ˈʊ]ns</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Kal[ɛ]nd[ɐ]</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Arch[i:]v</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">K[ɔ]ntakt</a></li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="block py-2 hover:text-gray-400 transition-colors font-medium">Starts[a]ite</a></li>
              <li><a href="#" className="block py-2 hover:text-gray-400 transition-colors">Aktuelle Produkti[oː]n</a></li>
              <li><a href="#" className="block py-2 hover:text-gray-400 transition-colors">Über [ˈʊ]ns</a></li>
              <li><a href="#" className="block py-2 hover:text-gray-400 transition-colors">Kal[ɛ]nd[ɐ]</a></li>
              <li><a href="#" className="block py-2 hover:text-gray-400 transition-colors">Arch[i:]v</a></li>
              <li><a href="#" className="block py-2 hover:text-gray-400 transition-colors">K[ɔ]ntakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
              {index === 0 && (
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                  Alles Weitere wird Kunst
                </p>
              )}
              <div className="mt-8">
                <a href="#content" className="bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors">
                  Erfahre mehr
                </a>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === activeSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

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
                Also kommt ran, wir haben zu <a href="#" className="text-gray-600 hover:underline">sprechen</a>.
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
                <img src="/api/placeholder/600/400" alt="Theaterszene" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                <img src="/api/placeholder/600/400" alt="Theaterszene" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                <img src="/api/placeholder/600/400" alt="Theaterszene" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Banner */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Aktuelle Aufführungen</h2>
            <p className="text-xl mb-8">Weitere Aufführungstermine folgen in Kürze</p>
            <a href="#" className="inline-block bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors">
              Tickets sichern
            </a>
          </div>
        </section>

        {/* News/Updates */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Neuigk[aɪ̯]ten</h2>
            <div className="max-w-4xl mx-auto">
              <div className="border-l-4 border-gray-800 pl-6 py-2 mb-8">
                <h3 className="text-xl font-bold mb-2">Neue Produktion in Arbeit</h3>
                <p className="text-gray-600">Wir arbeiten an einer neuen Inszenierung. Details folgen bald!</p>
              </div>
              <div className="border-l-4 border-gray-800 pl-6 py-2 mb-8">
                <h3 className="text-xl font-bold mb-2">Workshop-Reihe im Herbst</h3>
                <p className="text-gray-600">Im September starten wir mit einer neuen Workshop-Reihe.</p>
              </div>
              <div className="border-l-4 border-gray-800 pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Weitere Aufführungstermine</h3>
                <p className="text-gray-600">Weitere Aufführungstermine folgen in Kürze.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Zw[i:]g[ə]spräch</h2>
              <p className="text-gray-400">Alles Weitere wird Kunst</p>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Folge uns</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a>
              <span className="mx-2 text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutzerklärung</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Zwiegespräch Theater. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {scrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-gray-200 hover:bg-gray-300 text-gray-900 p-3 rounded-full shadow-lg transition-colors"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ZwiegespraechWebsite;
