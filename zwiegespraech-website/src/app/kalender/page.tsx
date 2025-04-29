"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// TypeScript-Interfaces für bessere Typisierung
interface Event {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
  ticketLink: string;
  price: string;
  image?: string;
  cast?: string[];
  direction?: string;
}

export default function KalenderPage() {
  // Sample upcoming events - Hier Ihre tatsächlichen Events einfügen
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Kunst",
      date: new Date(2025, 4, 15, 19, 30), // 15. Mai 2025, 19:30
      location: "Stadthalle, Rheine",
      description: "Aufführung unserer aktuellen Produktion von Yasmina Rezas Stück 'Kunst'",
      ticketLink: "https://luislessing.de",
      price: "15€ / 10€ ermäßigt",
      image: "/images/kunst-poster.jpg",
      cast: ["Kevin Nolting", "Bastian Bühler", "Luis Lessing"],
      direction: "Sebastian Narhofer"
    },
    {
      id: 2,
      title: "Kunst",
      date: new Date(2025, 4, 16, 19, 30), // 16. Mai 2025, 19:30
      location: "Stadthalle, Rheine",
      description: "Aufführung unserer aktuellen Produktion von Yasmina Rezas Stück 'Kunst'",
      ticketLink: "/tickets",
      price: "15€ / 10€ ermäßigt",
      image: "/images/kunst-poster.jpg",
      cast: ["Kevin Nolting", "Bastian Bühler", "Luis Lessing"],
      direction: "Sebastian Narhofer"
    },
    {
      id: 3,
      title: "Workshop: Theaterimprovisation",
      date: new Date(2025, 5, 10, 15, 0), // 10. Juni 2025, 15:00
      location: "Proberaum, Rheine",
      description: "Workshop für Anfänger und Fortgeschrittene. Lernen Sie die Grundlagen der Theaterimprovisation in einer entspannten Atmosphäre.",
      ticketLink: "/tickets",
      price: "20€",
      image: "/images/workshop-poster.jpg"
    }
  ]);

  // State für das ausgewählte Event
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Generate month names in German
  const months = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  // Get current date info for the calendar
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // State for calendar navigation
  const [displayMonth, setDisplayMonth] = useState(currentMonth);
  const [displayYear, setDisplayYear] = useState(currentYear);

  // Navigate to previous month
  const previousMonth = () => {
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };

  // Navigate to next month
  const nextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  // Get days in month
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Build calendar days array
  const buildCalendarDays = (): (number | null)[] => {
    const daysInMonth = getDaysInMonth(displayMonth, displayYear);
    const firstDayOfMonth = getFirstDayOfMonth(displayMonth, displayYear);
    const days: (number | null)[] = [];

    // Fill in empty cells for days before the first of the month
    // Adjust for Monday as first day of week (European standard)
    const firstDayAdjusted = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Check if a given day has events
  const hasEvents = (day: number | null): boolean => {
    if (!day) return false;
    return events.some(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day &&
             eventDate.getMonth() === displayMonth &&
             eventDate.getFullYear() === displayYear;
    });
  };

  // Get events for a given day
  const getEventsForDay = (day: number | null): Event[] => {
    if (!day) return [];
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day &&
             eventDate.getMonth() === displayMonth &&
             eventDate.getFullYear() === displayYear;
    });
  };

  // Create calendar grid
  const calendarDays = buildCalendarDays();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Kal[ɛ]nd[ɐ]</h1>
          <h2 className="text-3xl font-normal mb-8 text-center">Unsere Termine und Aufführungen</h2>
        </div>
      </section>

      <main className="flex-grow">
        {/* Calendar Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Calendar Navigation */}
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={previousMonth}
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  &larr; Vorheriger Monat
                </button>
                <h2 className="text-2xl font-bold">
                  {months[displayMonth]} {displayYear}
                </h2>
                <button
                  onClick={nextMonth}
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  Nächster Monat &rarr;
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Day headers - European format (Monday first) */}
                <div className="grid grid-cols-7 text-center bg-gray-900 text-white py-2">
                  <div>Mo</div>
                  <div>Di</div>
                  <div>Mi</div>
                  <div>Do</div>
                  <div>Fr</div>
                  <div>Sa</div>
                  <div>So</div>
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`
                        border border-gray-200 min-h-24
                        ${!day ? 'bg-gray-100' : 'hover:bg-gray-50'}
                        ${day === currentDate.getDate() &&
                          displayMonth === currentDate.getMonth() &&
                          displayYear === currentDate.getFullYear()
                            ? 'bg-gray-200' : ''}
                        ${hasEvents(day) ? 'relative' : ''}
                      `}
                    >
                      {day && (
                        <>
                          <div className="p-2">
                            <span className="block text-right">{day}</span>
                            {hasEvents(day) && (
                              <div className="mt-1">
                                {getEventsForDay(day).map((event) => (
                                  <div
                                    key={event.id}
                                    className="bg-gray-900 text-white text-sm rounded p-1 mb-1 overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors"
                                    onClick={() => setSelectedEvent(event)}
                                  >
                                    <p className="font-bold">{event.title}</p>
                                    <p>{new Date(event.date).toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'})}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* No events message */}
              {events.length === 0 && (
                <div className="mt-12 p-8 bg-gray-100 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-4">Keine Einträge vorhanden</h3>
                  <p className="text-lg">
                    Informationen zu weiteren Aufführungen sind hier demnächst zu finden.
                  </p>
                </div>
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

        {/* Tickets Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Tickets</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Tickets für unsere Aufführungen können Sie online reservieren oder direkt an der Abendkasse erwerben.
            </p>
            <a href="/tickets" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors">
              Tickets reservieren
            </a>
          </div>
        </section>

        {/* Photo Credits */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
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

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 relative">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
              <p className="text-gray-600 mb-4">
                {new Date(selectedEvent.date).toLocaleDateString('de-DE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} um {new Date(selectedEvent.date).toLocaleTimeString('de-DE', {
                  hour: '2-digit',
                  minute: '2-digit'
                })} Uhr
              </p>

              <p className="mb-2"><span className="font-medium">Ort:</span> {selectedEvent.location}</p>

              {selectedEvent.price && (
                <p className="mb-2"><span className="font-medium">Preis:</span> {selectedEvent.price}</p>
              )}

              {selectedEvent.description && (
                <div className="mt-4 mb-6">
                  <p className="font-medium mb-1">Beschreibung:</p>
                  <p>{selectedEvent.description}</p>
                </div>
              )}

              {selectedEvent.cast && selectedEvent.cast.length > 0 && (
                <div className="mt-4">
                  <p className="font-medium mb-1">Besetzung:</p>
                  <p>{selectedEvent.cast.join(", ")}</p>
                </div>
              )}

              {selectedEvent.direction && (
                <p className="mb-2"><span className="font-medium">Regie:</span> {selectedEvent.direction}</p>
              )}

              {selectedEvent.image && (
                <div className="mt-4">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}

              {selectedEvent.ticketLink && (
                <div className="mt-6 text-center">
                  <a
                    href={selectedEvent.ticketLink}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-md transition-colors inline-block"
                  >
                    Tickets reservieren
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}