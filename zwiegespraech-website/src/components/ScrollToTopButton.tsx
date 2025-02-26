'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!scrolled) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-gray-200 hover:bg-gray-300 text-gray-900 p-3 rounded-full shadow-lg transition-colors"
    >
      <ChevronUp size={24} />
    </button>
  );
}