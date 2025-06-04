'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Youtube } from 'lucide-react';

export default function Footer() {
  return (
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
              <a href="https://www.instagram.com/zwiegespraech_theater?igsh=azRjendnMjllMjlm" className="hover:text-gray-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@Zwiegespraech_theater" className="hover:text-gray-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} />
              </a>
              <a href="mailto:zwiegespraechtheater@gmx.de" className="hover:text-gray-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Zwiegespräch Theater. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}