"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

// Utility-Funktion für Altersberechnung basierend auf Jahr und Quartal
function calculateAgeFromQuarter(birthYear: number, birthQuarter: 1 | 2 | 3 | 4): number {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // 0-11 -> 1-12
  
  // Quartal zu Monat umrechnen (Mitte des Quartals für genauere Berechnung)
  const quarterToMonth = {
    1: 2,  // Q1: Februar (Mitte von Jan-Mar)
    2: 5,  // Q2: Mai (Mitte von Apr-Jun)
    3: 8,  // Q3: August (Mitte von Jul-Sep)
    4: 11  // Q4: November (Mitte von Okt-Dez)
  };
  
  const birthMonth = quarterToMonth[birthQuarter];
  let age = currentYear - birthYear;
  
  // Wenn das Geburtsdatum dieses Jahr noch nicht erreicht wurde
  if (currentMonth < birthMonth) {
    age--;
  }
  
  return age;
}

// TypeScript Interface für die Teammitglieder
interface TeamMember {
  id: number;
  name: string;
  birthYear: number;
  birthQuarter: 1 | 2 | 3 | 4;
  profession: string;
  theatreQuote: string;
  zwiegespraechQuote: string;
  imageSrc: string;
  experience?: string;
  role?: string;
}
export default function UeberUnsPage() {
  // State for team member modal - mit korrekter Typisierung
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember | null>(null);

  // Team members data - Alle Mitglieder mit Geburtsjahr und Quartal
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Babett Wittekind",
      birthYear: 1965,
      birthQuarter: 2, // Basierend auf aktuellem Alter 59
      profession: "Dipl.-Ingenieurin Lebensmitteltechnologie",
      theatreQuote: "Theater ist für mich ein wichtiger Bestandteil des Lebens, da es den Horizont erweitert. Da es leider immer weniger gibt, braucht es mehr Vielfalt, um aktuelle Themen verarbeiten zu können.",
      zwiegespraechQuote: "",
      imageSrc: "/images/team/babett.jpg"
    },
    {
      id: 2,
      name: "Bastian Bühler",
      birthYear: 1994,
      birthQuarter: 3, // Basierend auf aktuellem Alter 30
      profession: "Theateraktivität: seit 2009",
      experience: "Amateurtheater, Mitwirkung in über 30 Theaterstücken, zweimal Co-Regie",
      role: "Schauspiel",
      theatreQuote: `Theater bedeutet für mich, die eigenen Grenzen in vielfältigen Bereichen auszuloten und jedes mal, Stück um Stück, über genau diese Grenzen hinauszugehen und in allen Bereichen besser zu werden. Mir ist es wichtig, etwas auf die Bühne zu bringen, was nicht nur den Leuten auf und hinter der Bühne den Zusammenhalt bringt, sondern auch für die Menschen ist, die uns gegenübersitzen, die wir bei dem abholen, was sie brauchen. Sei es etwas zum Nachdenken, zum Lachen oder zum Weinen.`,
      zwiegespraechQuote: `Es ist die Möglichkeit, mit verschiedenen Charakteren, welche alle ihre individuellen Stärken mitbringen, etwas Eigenes aufzubauen. Also bedeutet es letztlich, die eigene Vision von Theater nach vorne zu bringen. Vieles, was im Amateurtheater gelebt und gemacht wird, sollte meines Erachtens neu und anders bearbeitet werden, um für diesen Bereich und die Menschen, die darin wirken möchten, das Beste möglich zu machen. Zw[i:]g[ə]spräch soll perspektivisch ein Ort werden, an dem sich kreative Menschen auch kreativ entfalten dürfen.`,
      imageSrc: "/images/team/bastian.jpg"
    },
    {
      id: 3,
      name: "Claus Wiegand",
      birthYear: 1963,
      birthQuarter: 1, // Basierend auf aktuellem Alter 61
      profession: "seit 1977 Möbel- & Bauschreiner",
      experience: "einwöchige Arbeit für den WDR für eine Fernsehsendung, Komplettaustattungen von Gaststätten / Hotels",
      role: "Bühnenbild, Requisite",
      theatreQuote: `Theater bedeutet für mich das gespielte Leben, das eine angenehme Ablenkung vom normalen Leben ist. Vor allem mag ich, dass alles beim Theater live gespielt wird. Daher ist es für mich anspruchsvoller als ein Film, bei dem man eine Szene immer wiederholen kann.`,
      zwiegespraechQuote: `Prinzipiell bedeutet es für mich, das unterschiedliche Menschen miteinander kommunizieren und zusammen etwas kreieren. Außerdem ist es für mich eine neue Herausforderung, was ich abseits meiner normalen Arbeit bauen kann. Ich freue mich, das fast Unmögliche möglich zu machen. Es ist auch eine Herausforderung für uns als Gruppe, weshalb ich gespannt bin, was wir in Zukunft noch alles machen werden.`,
      imageSrc: "/images/team/claus.jpg"
    },
    {
      id: 4,
      name: "Hannah Hemmelmann",
      birthYear: 1995,
      birthQuarter: 3, // Basierend auf aktuellem Alter 29
      profession: "seit 2019 HR Business Partnerin",
      experience: "Wirtschaftsrecht und Personalarbeit",
      role: "Vereinsstruktur, Kostüm, Audio",
      theatreQuote: "Das Theater begleitet mich schon seit meiner Kindheit als begeisterte Zuschauerin. Ich selbst stand bisher nur in der Schulzeit in einer BigBand auf der Bühne.",
      zwiegespraechQuote: "Zw[i:]g[ə]spräch ist für mich ein Zusammenschluss von tollen Menschen, die für das Theater, die Kunst und die Kultur brennen, weswegen ich mich freue, ein Teil davon zu sein und sie tatkräftig zu unterstützen.",
      imageSrc: "/images/team/hannah.jpg"
    },
    {
      id: 5,
      name: "Julian Thiele",
      birthYear: 1990,
      birthQuarter: 2, // Basierend auf aktuellem Alter 34
      profession: "seit 2014 Erzieher",
      experience: "Amateurtheater, Improtheater",
      role: "Kassenwart",
      theatreQuote: "Ich liebe am Theater, dass ich meinen Fokus im Schauspiel selbst lenken kann und so z. B. die Kunst der Statisten zu würdigen.",
      zwiegespraechQuote: "Ganz im Sinne des Wortes bedeutet es für mich, einen dritten Ort zu finden, an dem ganz viele kreative und engagierte Menschen sich austauschen können.",
      imageSrc: "/images/team/julian.jpg"
    },
    {
      id: 6,
      name: "Kevin Nolting",
      birthYear: 1990,
      birthQuarter: 4, // Basierend auf aktuellem Alter 34
      profession: "Theateraktivität: seit 2007",
      experience: "Amateurtheater, Mitwirkung in über 30 Theaterstücken, sechsmal Bühnenbildkonzept",
      role: "Schauspiel",
      theatreQuote: `Theater ist eine Chance, Blickwinkel durch Rollen einzunehmen, die man im Alltag nicht hat. Hierfür kann man an eigene Erfahrungen anknüpfen, aber auch komplett Neues im Dialog erarbeiten, was unglaublich spannend ist. Außerdem ist jedes Stück etwas ganz Besonderes und Einmaliges, entweder durch eine komplexe Rolle, ein besonderes Requisit oder ein ansprechendes Bühnenbild. Diese Bestandteile schaffen nur zusammen eine gute Authentizität.`,
      zwiegespraechQuote: `Einerseits sollte Zw[i:]g[ə]spräch eine Erfahrung werden, über die man generell mit anderen spricht, ein Dialog von Theaterfreunden mit Theaterfreunden, egal auf welcher Seite des Vorhangs man sich befindet. Andererseits freue ich mich auf einen Ort, an dem man etwas mit dem Ensemble erarbeitet und sich im Dialog kreativ beeinflusst, um zusammen Ideen und Konzepte zu entwickeln, die die Ideenvielfalt einer Person übersteigt.`,
      imageSrc: "/images/team/kevin.jpg"
    },
    {
      id: 7,
      name: "Leonie Stratmann / Leo Will",
      birthYear: 1991,
      birthQuarter: 2, // Basierend auf aktuellem Alter 33
      profession: "Theateraktivität: seit 1998",
      experience: "Mitwirkung in über 30 Theaterstücken, überwiegend Amateurtheater, erst als Darstellerin (Schauspiel/Gesang/Tanz), später als Spielleiterin/Co-Regisseurin u. A. am Staatstheater Hannover, Pavillontheater, VHS Hannover, FHM Bielefeld, Studium Theaterwissenschaft",
      role: "Gesangstraining, Arrangements",
      theatreQuote: "Theater bietet die Gelegenheit, Perspektiven zu wechseln, Szenarien buchstäblich durchzuspielen, Themen und Emotionen eine Bühne zu geben, zu unterhalten, zu überspitzen, zu veranschaulichen, zu hinterfragen. Und all das findet nicht vor den Bildschirmen statt, sondern wird in einem Raum voller echter Menschen erlebt, der gleichzeitig ein geschützter Raum ist – der Raum der Kunst.",
      zwiegespraechQuote: "Dieser Name ist auf so vielen Ebenen Programm im Theater. Ich denke da z.B. an das imaginierte Zwiegespräch zwischen Schauspieler*in und Rolle bei der Vorbereitung, das reale Zwiegespräch zwischen Regie und Schauspiel in den Proben, das empfundene Zwiegespräch zwischen Darstellenden und Zuschauenden und dann natürlich auch das innere Zwiegespräch bei der Verarbeitung dessen, was im Theater erlebt wurde.",
      imageSrc: "/images/team/leonie.jpg"
    },
    {
      id: 8,
      name: "Luis Lessing",
      birthYear: 1993,
      birthQuarter: 2, // Basierend auf aktuellem Alter 30
      profession: "Theateraktivität: seit 1993",
      experience: "Amateurtheater, Mitwirkung in über 20 Theaterstücken",
      role: "Schauspiel",
      theatreQuote: `Theater bedeutet für mich so viel mehr als nur eine Bühne mit Schauspielern. Es ist ein Raum voller Emotionen und Geschichten, ein Raum, in dem ich aus den verschiedensten Rollen eine Verbindung zum Publikum aufbauen kann.`,
      zwiegespraechQuote: `Zw[i:]g[ə]spräch ist ein bisschen wie das Gefühl, nach Hause zu kommen. Nach langer Pause kann endlich wieder Theater gespielt werden. Hier können wir gemeinsam und auf Augenhöhe Geschichten sowie Inszenierungen gestalten und großartige Dinge auf die Beine stellen.`,
      imageSrc: "/images/team/luis.jpg"
    },
    {
      id: 9,
      name: "Mandy Schöneborn-Madaj",
      birthYear: 1986,
      birthQuarter: 3, // Basierend auf aktuellem Alter 38
      profession: "IT-System Managerin",
      experience: "seit 2008",
      role: "Mitwirkung bei der Webseitenerstellung und Pflege",
      theatreQuote: `Theater bedeutet für mich eine wunderbare Welt voller Geschichten, Emotionen und Kreativität. Es ist eine Kunstform, die es ermöglicht, in verschiedene Rollen und Welten einzutauchen und bietet eine einzigartige Möglichkeit, menschliche Erfahrungen und Gefühle zu erkunden.`,
      zwiegespraechQuote: `Für mich bedeutet ein Zwiegespräch eine intime und direkte Form der Kommunikation, bei der zwei Personen offen und ehrlich miteinander sprechen. Es ermöglicht die Perspektive des anderen zu erfassen.`,
      imageSrc: "/images/team/mandy.jpeg"
    },
    {
      id: 10,
      name: "Marion Bühler",
      birthYear: 1962,
      birthQuarter: 1, // Basierend auf aktuellem Alter 62
      profession: "Theateraktivität: seit 2007",
      experience: "Amateurtheater, Mitwirkung in über 30 Produktionen",
      role: "Bühnenmalerei, Fotografie",
      theatreQuote: `Ich liebe es, an einem Theaterstück mitzuarbeiten, um eine gute Produktion zu ermöglichen. Daher bin ich sehr motiviert, mit dem zu helfen, was ich an Fähigkeiten mitbringe. Am Theater fasziniert mich das Live-Event, für das Menschen ihre Kreativität einbringen.`,
      zwiegespraechQuote: `Ich mag das Wort, weil darin so viel steckt. Es hat Potenzial für das, was ich mir jetzt nur erträumen kann. Ich glaube nämlich, dass es ein Projekt ist, das gut wird, weil man sich intensiv Gedanken darum macht.`,
      imageSrc: "/images/team/marion.jpg"
    },
    {
      id: 11,
      name: "Pauline Sebastian",
      birthYear: 2000,
      birthQuarter: 2, // Basierend auf aktuellem Alter 24
      profession: "Theateraktivität: 2010, 2018",
      experience: "Amateurtheater, Mitwirkung in 2 Produktionen",
      role: "Souffleuse",
      theatreQuote: `Theater sind Emotionen und kreative und gesellschaftliche Gedanken, die ich durch Geschichten in Dialogform erfahren kann. Zudem liebe ich Kreativität und den Aspekt des Geschichtenerzählens.`,
      zwiegespraechQuote: `Zw[i:]g[ə]spräch ist für mich der neue Zugang zu einem kreativen Feld, der mir vielleicht hilft zu erkennen, wohin die Reise weitergeht.`,
      imageSrc: "/images/team/pauline.jpg"
    },
    {
      id: 12,
      name: "Richard Laustroer",
      birthYear: 1987,
      birthQuarter: 4, // Basierend auf aktuellem Alter 37
      profession: "Theateraktivität: seit 1999",
      experience: "Amateurtheater/Freilichtbühne, Mitwirkung in 25 Theaterstücken",
      role: "Fotografie",
      theatreQuote: `Theater bietet die Möglichkeit, sich komplett auf andere Rollen einzulassen bzw. neue Arten zu finden, um sich zu verwirklichen. Es ist ein „Mannschaftssport" und verbindet viele Generationen (von jung bis alt). Es ist einfach ein geniales Hobby.`,
      zwiegespraechQuote: `Vor allem freue ich mich auf neue Ideen, neue Leute und viele kreative gemeinsame Stunden.`,
      imageSrc: "/images/team/richard.jpg"
    },
    {
      id: 13,
      name: "Sebastian Narhofer",
      birthYear: 199,
      birthQuarter: 4, // Basierend auf aktuellem Alter 30
      profession: "Theateraktivität: seit 2009",
      experience: "Amateurtheater, Studium Theaterpädagogik in Lingen (2017-2024), Mitwirkung in über 20 Theaterstücken, dreimal Regie, einmal Choreografie",
      role: "Regie",
      theatreQuote: `Theater ist für mich die Auseinandersetzung mit Rollen, auch mit denen, die ich im Alltag nicht einnehmen kann oder will. Mich faszinieren Beziehungen, die nach meiner Auffassung die Basis des Theaters darstellen.`,
      zwiegespraechQuote: `Es bedeutet für mich die Auseinandersetzung mit Themen der Gesellschaft auf einer künstlerischen und performativen Ebene. Meine Vision reicht von Formaten des Schauspiels über Audiowalks bis hin zu Theaterexpert*innen des Alltags.`,
      imageSrc: "/images/team/sebastian.jpg"
    },
    {
      id: 14,
      name: "Udo Jesel",
      birthYear: 1960,
      birthQuarter: 3, // Basierend auf aktuellem Alter 64
      profession: "Dipl.-Ingenieur Lebensmitteltechnologie",
      theatreQuote: "Theater bedeutet für mich, auf andere Gedanken zu kommen und Perspektiven zu erweitern. Leider ist es in Zeiten der neuen Medien immer weniger gefragt.",
      zwiegespraechQuote: "",
      imageSrc: "/images/team/udo.jpg"
    },
    {
      id: 15,
      name: "Wiktoria Lessing",
      birthYear: 1992,
      birthQuarter: 2, // Basierend auf aktuellem Alter 31
      profession: "Theateraktivität: seit 2008",
      experience: "Amateurtheater, deutsch & englisch, Mitwirkung in 7 Produktionen",
      role: "Souffleuse",
      theatreQuote: `Theater ist für mich Emotionen. Es bedeutet, Charaktereigenschaften, die man vielleicht auch selber in sich trägt, voll ausleben und ausspielen zu dürfen, ohne Angst vor Konsequenzen haben zu müssen.`,
      zwiegespraechQuote: `Zw[i:]g[ə]spräch ist für mich nach längerer Pause ein neuer Zugang zum Theater und ein neuer Ansatz, dass Theater zu leben.`,
      imageSrc: "/images/team/wiktoria.jpg"
    },
    {
      id: 16,
      name: "Yannick Dommermuth-Krüger",
      birthYear: 1993,
      birthQuarter: 1, // Basierend auf aktuellem Alter 31
      profession: "Theateraktivität: seit 2010",
      experience: "Amateurtheater, Komparsenrollen in ein paar Filmen, 20 Theaterstücken, Bühnenbau bei 10 Stücken, 2x Regie-Arbeit und 4x im technischen Bereich",
      role: "Schauspiel und Bühnenbau",
      theatreQuote: "Theater ist eine große Leidenschaft, die ich 2010 durch Schulfreunde entdeckt habe. Seitdem lässt es mich nicht mehr los. Durch die vielen Möglichkeiten, die ein Theaterverein bietet, wird es nie langweilig und es gibt sehr viel Abwechslung durch die verschiedenen Bereiche.",
      zwiegespraechQuote: "Neue kulturelle Bereiche, besonders im Bereich Theater, sind wichtig. Daher freue ich mich über jede Möglichkeit, Menschen ein Hobby oder Unterhaltung zu schenken.",
      imageSrc: "/images/team/yannick.jpeg"
    }
  ];

  const closeModal = () => {
    setActiveTeamMember(null);
  };

  // Touch handling for swipe to close
  const handleTouchStart = (e: React.TouchEvent) => {
    const startY = e.touches[0].clientY;
    const startX = e.touches[0].clientX;
    
    const handleTouchMove = (moveEvent: TouchEvent) => {
      const currentY = moveEvent.touches[0].clientY;
      const currentX = moveEvent.touches[0].clientX;
      const diffY = currentY - startY;
      const diffX = Math.abs(currentX - startX);
      
      // Only close on vertical swipe down (not horizontal swipes)
      if (diffY > 100 && diffX < 50) {
        closeModal();
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Über [ˈʊ]ns</h1>
          <h2 className="text-3xl font-normal mb-8 text-center">Wer verbirgt sich hinter dem Schauspielkollektiv Zw[i:]g[ə]spräch?</h2>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Team Member Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => {
                // Alter automatisch berechnen
                const currentAge = calculateAgeFromQuarter(member.birthYear, member.birthQuarter);
                
                return (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setActiveTeamMember(member)}
                  >
                    <div className="relative pt-[125%]">
                      <img 
                        src={member.imageSrc} 
                        alt={member.name} 
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-gray-600 mb-2">Alter: {currentAge}</p>
                      {member.role && (
                        <p className="text-gray-700 mb-1">Funktion: {member.role}</p>
                      )}
                      <p className="mt-3 text-gray-700 overflow-hidden text-ellipsis line-clamp-3">
                        {member.theatreQuote.substring(0, 150)}...
                      </p>
                      <button 
                        className="mt-4 text-gray-600 hover:text-gray-900 font-medium"
                      >
                        Mehr erfahren
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About the Group Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Warum eigentlich Zw[i:]g[ə]spräch?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  <strong>Definition: Gespräch unter zwei Parteien</strong>
                </p>
                <p className="mb-6">
                  Egal, ob man es nur mit sich führt, mit jemandem oder mehreren, passt es 
                  dazu, wie wir Theater verstehen: das Sehen, das Erleben, der Austausch 
                  und die Reflexion. Dazu sind natürlich alle eingeladen: Seien es die 
                  Mitwirkenden, die Unterstützenden, die Zuschauenden oder die, die wir 
                  noch gar nicht kennen, eben wie bei einem guten Gespräch.
                </p>
                <p className="mb-6">
                  Genauso verstehen wir das Zw[i:]g[ə]spräch nicht nur als einmaliges Projekt, 
                  sondern als eine langfristige Entwicklung, deren Grenzen wir selbst noch
                  gar nicht einsehen können und möchten - auch wie bei einem gutem 
                  Gespräch. Das alles soll Kern unseres Schauspielkollektivs sein.
                </p>
                <p>
                  Also kommt ran, wir haben zu sprechen.
                </p>
              </div>
            </div>
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

      {/* Team Member Modal */}
      {activeTeamMember && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onTouchStart={handleTouchStart}
          >
            {/* Swipe indicator bar for mobile */}
            <div className="md:hidden w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-2"></div>
            
            <div className="p-6 relative">
              {/* Larger close button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Schließen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={activeTeamMember.imageSrc} 
                    alt={activeTeamMember.name} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{activeTeamMember.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Alter: {calculateAgeFromQuarter(activeTeamMember.birthYear, activeTeamMember.birthQuarter)}
                  </p>
                  
                  {activeTeamMember.profession && (
                    <p className="mb-2"><span className="font-medium">Beruf/Erfahrung:</span> {activeTeamMember.profession}</p>
                  )}
                  
                  {activeTeamMember.experience && (
                    <p className="mb-2"><span className="font-medium">Details:</span> {activeTeamMember.experience}</p>
                  )}
                  
                  {activeTeamMember.role && (
                    <p className="mb-4"><span className="font-medium">Funktion bei Zw[i:]g[ə]spräch:</span> {activeTeamMember.role}</p>
                  )}
                  
                  <div className="mt-4">
                    <p className="font-medium mb-2">Zum Thema Theater:</p>
                    <p className="italic mb-4">{activeTeamMember.theatreQuote}</p>
                    
                    {activeTeamMember.zwiegespraechQuote && (
                      <>
                        <p className="font-medium mb-2">Zum Thema Zw[i:]g[ə]spräch:</p>
                        <p className="italic mb-6">{activeTeamMember.zwiegespraechQuote}</p>
                      </>
                    )}
                  </div>
                  
                  {/* Close Button */}
                  <div className="flex justify-center mt-6">
                    <button 
                      onClick={closeModal}
                      className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
                    >
                      Schließen
                    </button>
                  </div>
                  
                  {/* Swipe indicator for mobile */}
                  <div className="md:hidden text-center mt-4 text-gray-500 text-sm">
                    <p>Nach unten wischen zum Schließen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}