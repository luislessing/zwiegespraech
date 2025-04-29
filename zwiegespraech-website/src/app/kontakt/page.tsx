"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// TypeScript Interface für das Formular
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  message: string;
  gdprConsent: boolean;
}

export default function KontaktPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    message: '',
    gdprConsent: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Event-Handler mit TypeScript-Typen
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Formular-Submit-Handler mit TypeScript-Typen
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.gdprConsent) {
      setFormError('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log('Form data submitted:', formData);
    
    // Clear error and show success message
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">K[ɔ]ntakt</h1>
          <h2 className="text-3xl font-normal mb-8 text-center">Wir freuen uns über Nachrichten</h2>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {formSubmitted ? (
                <div className="text-center bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded mb-8">
                  <h3 className="text-2xl font-bold mb-4">Vielen Dank für Ihre Nachricht!</h3>
                  <p className="text-lg">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        telephone: '',
                        message: '',
                        gdprConsent: false
                      });
                    }}
                    className="mt-6 bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-md transition-colors"
                  >
                    Neues Formular
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      {formError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        Vorname <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Nachname <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-Mail <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Meine Nachricht"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="gdprConsent" className="text-gray-700">
                        Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der{' '}
                        <a href="/datenschutz" className="text-gray-600 hover:underline">
                          Datenschutzerklärung
                        </a>{' '}
                        einverstanden. <span className="text-red-600">*</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-sm text-gray-600 mb-4">* Pflichtfelder</p>
                    <button
                      type="submit"
                      className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors"
                    >
                      Absenden
                    </button>
                  </div>
                </form>
              )}
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

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">So erreichen Sie uns</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4">Kontaktdaten</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-medium mr-2">E-Mail:</span>
                      <a href="mailto:zwiegespraechtheater@gmx.de" className="text-gray-600 hover:underline">
                        zwiegespraechtheater@gmx.de
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-4">Social Media</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-medium mr-2">Instagram:</span>
                      <a href="https://www.instagram.com/zwiegespraech_theater" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:underline">
                        @zwiegespraech_theater
                      </a>
                    </li>
                    <li className="flex">
                      <span className="font-medium mr-2">YouTube:</span>
                      <a href="https://www.youtube.com/@Zwiegespraech_theater" target="_blank" rel="noreferrer noopener" className="text-gray-600 hover:underline">
                        @Zwiegespraech_theater
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Möchten Sie uns live erleben?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Besuchen Sie unsere aktuelle Produktion und erleben Sie Theater hautnah!
            </p>
            <a href="/produktion" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors">
              Zur aktuellen Produktion
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}