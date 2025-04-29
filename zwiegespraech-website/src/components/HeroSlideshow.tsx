'use client';

import React, { useState, useEffect } from 'react';

interface SlideProps {
  title: string;
  image: string;
  alt: string;
  subtitle?: string;
}

export default function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: SlideProps[] = [
    {
      title: "Zw[i:]g[ə]spräch",
      image: "images/picture-1600.jpeg", // Hier später richtiges Bild einsetzen
      alt: "Theater Logo",
      subtitle: "Alles Weitere wird Kunst"
    },
  ];

  useEffect(() => {
    // Slideshow-Timer
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
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
            {slide.subtitle && (
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                {slide.subtitle}
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
  );
}
