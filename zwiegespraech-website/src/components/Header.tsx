'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 text-white shadow-md py-2' : 'bg-transparent text-gray-100 py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold hover:text-gray-400 transition-colors">
            Zw[i:]g[ə]spräch
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="/" className="hover:text-gray-400 transition-colors font-medium">Starts[a]ite</Link></li>
            <li><Link href="/produktion" className="hover:text-gray-400 transition-colors">Aktuelle Produkti[oː]n</Link></li>
            <li><Link href="/ueber-uns" className="hover:text-gray-400 transition-colors">Über [ˈʊ]ns</Link></li>
            <li><Link href="/kalender" className="hover:text-gray-400 transition-colors">Kal[ɛ]nd[ɐ]</Link></li>
            <li><Link href="/archiv" className="hover:text-gray-400 transition-colors">Arch[i:]v</Link></li>
            <li><Link href="/kontakt" className="hover:text-gray-400 transition-colors">K[ɔ]ntakt</Link></li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ${
        menuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="block py-2 hover:text-gray-400 transition-colors font-medium">Starts[a]ite</Link></li>
            <li><Link href="/produktion" className="block py-2 hover:text-gray-400 transition-colors">Aktuelle Produkti[oː]n</Link></li>
            <li><Link href="/ueber-uns" className="block py-2 hover:text-gray-400 transition-colors">Über [ˈʊ]ns</Link></li>
            <li><Link href="/kalender" className="block py-2 hover:text-gray-400 transition-colors">Kal[ɛ]nd[ɐ]</Link></li>
            <li><Link href="/archiv" className="block py-2 hover:text-gray-400 transition-colors">Arch[i:]v</Link></li>
            <li><Link href="/kontakt" className="block py-2 hover:text-gray-400 transition-colors">K[ɔ]ntakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}