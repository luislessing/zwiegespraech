"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Impressum</h1>
          <h2 className="text-2xl font-normal mb-8 text-center">Rechtliche Angaben</h2>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Impressum Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <p className="text-lg mb-8">
                Das folgende Impressum und der Datenschutz gelten für alle Seiten von
                www.zwiegespraech-theater.de und Unterseiten der genannten URL.
              </p>

              <h2 className="text-2xl font-bold mb-4">1. Name des Vereins</h2>
              <p className="mb-6">
                Dies ist die Internetpräsenz des Vereins „Zwiegespräch e. V.".
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Vertretungsberechtigung</h2>
              <p className="mb-2">Vertreten wird dieser durch</p>
              <div className="mb-6 bg-gray-50 p-4 rounded-md">
                <p><strong>Name:</strong> Bastian Bühler</p>
                <p><strong>Adresse:</strong> Liegnitzer Straße 15, 33098 Paderborn</p>
                <p><strong>E-Mail:</strong> <a href="mailto:zwiegespraechtheater@gmx.de" className="text-gray-600 hover:underline">zwiegespraechtheater@gmx.de</a></p>
                <p><strong>Telefon:</strong> 015737000047</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">3. Registergericht und Registernummer</h2>
              <div className="mb-6 bg-gray-50 p-4 rounded-md">
                <p><strong>Registergericht:</strong> Amtsgericht Paderborn</p>
                <p><strong>Registernummer:</strong> 4022</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">4. Journalistische oder redaktionelle Inhalte</h2>
              <p className="mb-2">Die Zuständigkeit für journalistische und redaktionelle Inhalte obliegt</p>
              <div className="mb-6 bg-gray-50 p-4 rounded-md">
                <p><strong>Name:</strong> Kevin Nolting</p>
                <p><strong>Adresse:</strong> Burgstraße 1, 32825 Blomberg</p>
                <p><strong>E-Mail:</strong> <a href="mailto:zwiegespraechtheater@gmx.de" className="text-gray-600 hover:underline">zwiegespraechtheater@gmx.de</a></p>
                <p><strong>Telefon:</strong> 015737000047</p>
              </div>

              {/* Datenschutz Section */}
              <h1 className="text-3xl font-bold mb-8 mt-12">Datenschutz</h1>
              
              <p className="mb-6">
                Datenschutz ist uns ein besonders wichtiges Anliegen, und selbstverständlich halten wir uns an die geltenden datenschutzrechtlichen Vorgaben. Wir möchten Sie daher nachfolgend über die mit dem Besuch dieser Website verbundene Verarbeitung von personenbezogenen Daten aufklären und Sie über Ihre entsprechenden Rechte informieren:
              </p>

              <h2 className="text-2xl font-bold mb-4">Verantwortlicher für die Datenverarbeitung</h2>
              <p className="mb-4">
                Verantwortlicher im Sinne des Art. 4 Nr. 7 DSGVO, an den Sie sich bei Fragen oder einem anderen Anliegen zum Datenschutz wenden können, ist der Verein „Zwiegespräch e. V." (als juristische Person, vertreten durch den Vorstand gem. § 26 BGB):
              </p>
              <div className="mb-6 bg-gray-50 p-4 rounded-md">
                <p><strong>Bastian Bühler</strong><br />
                Liegnitzer Straße 15, 33098 Paderborn<br />
                <a href="mailto:zwiegespraechtheater@gmx.de" className="text-gray-600 hover:underline">zwiegespraechtheater@gmx.de</a><br />
                015737000047</p>
                
                <p className="mt-4"><strong>Kevin Nolting</strong><br />
                Burgstraße 1, 32825 Blomberg<br />
                <a href="mailto:zwiegespraechtheater@gmx.de" className="text-gray-600 hover:underline">zwiegespraechtheater@gmx.de</a><br />
                015737000047</p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Welche Daten werden erfasst und verarbeitet?</h2>
              <p className="mb-4">
                Beim Besuch unserer Website werden auf verschiedene Weise personenbezogene Daten der Nutzer erfasst. Personenbezogene Daten sind solche Daten, mit denen eine natürliche Person identifiziert werden kann. Dazu gehören beispielsweise der Name des Betroffenen, seine Wohnadresse, seine Telefonnummer oder auch sein Geburtsdatum. Wenn Sie unsere Seite aufrufen, werden zum einen durch Ihren Browser automatisch Informationen an den Server unserer Website gesendet, sog. Zugriffsdaten bzw. ServerLogfiles, wie z.B. der verwendete Webbrowser und das verwendete Betriebssystem, der Domain-Name Ihres Internet-Providers, Ihre IP-Adresse oder auch der sog. Zeitstempel, also der genaue Zeitpunkt und die Dauer Ihres Besuchs. Diese Daten müssen notwendigerweise erfasst werden, um technisch eine Darstellung und Verbindung herzustellen. Eine Datenauswertung erfolgt lediglich in anonymisierter Form, indem der Host der Webseite eine Aufrufstatistik erstellt. Darüber hinaus erfassen wir diejenigen personenbezogenen Daten, die Sie selbst bewusst auf unserer Homepage angeben, etwa durch Nutzung unseres Kontaktformulars (Hinweis: Die Verwendung unseres Kontaktformulars ist nicht mit einer Speicherung personenbezogenen Daten auf unserem Server verbunden; das Formular wird als E-Mail versandt.)
              </p>

              <h3 className="text-xl font-semibold mb-3">Zusammenfassend handelt es sich um folgende Kategorien von Daten:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Kontaktdaten (Name, Adresse, E-Mail-Adresse, Telefonnummer, etc.)</li>
                <li>inhaltliche Daten (eingestellte Texte und übersandte Nachrichten, eingestellte Fotos, ggf. Videos)</li>
                <li>Kommunikationsdaten (Geräte-Informationen, IP-Adresse)</li>
                <li>Nutzungsdaten (besuchte Website, Nutzungsdauer etc.)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Rechtsgrundlage für die Verarbeitung</h2>
              <p className="mb-6">
                Als maßgebliche Rechtsgrundlagen für die Zulässigkeit der Verarbeitung dienen die EU-Datenschutzgrundverordnung vom 27.04.2016 sowie das Bundesdatenschutzgesetz i. d. F. v. 30.06.2017. Die Rechtmäßigkeit der Datenerfassung ergibt sich aus Art. 6 DSGVO. Soweit die Datenverarbeitung aufgrund einer ausdrücklichen Einwilligung erfolgt, dient Abs. 1 a) der genannten Norm als Rechtsgrundlage (ggf. auch Art. 9 Abs. 2 a) DSGVO bei Gesundheitsdaten). Für die Speicherung und sonstige Verarbeitung Ihrer Daten im Zusammenhang mit der Verwendung unseres Online-Mitgliedsantrages ist das mitgliedschaftliche Vertragsverhältnis zwischen Ihnen und dem Verein in Verbindung mit Art. 6 Abs. 1 b) DSGVO Rechtsgrundlage. Das gilt auch für alle anderen Datenverarbeitungen, die zur Durchführung vertraglicher Maßnahmen, aber auch zur Beantwortung von Anfragen erforderlich sind. Soweit wir im Einzelfall zur Datenverarbeitung rechtlich verpflichtet sind, ist hierfür Art. 6 Abs. 1 c) DSGVO Grundlage; in dem Fall, dass die Verarbeitung der Wahrung unserer berechtigten Interessen dient, Art. 6 Abs. 1 f) DSGVO.
              </p>

              <h2 className="text-2xl font-bold mb-4">Zweck und Dauer der Datenverarbeitung</h2>
              <p className="mb-6">
                Die automatische Erfassung Ihrer Nutzer- und Kommunikationsdaten beim Besuch unserer Website dient notwendigerweise der Herstellung der technischen Verbindung und Nutzbarkeit unserer Website. Soweit Sie das auf unserer Homepage enthaltene Kontaktformular verwenden oder Sie uns über die Seite eine E-Mail schicken, dient die Erfassung der in diesem Zusammenhang bekannt gegebenen Kontaktdaten (in der Regel nur Name und E-Mail-Adresse) lediglich der entsprechenden Rückmeldung unsererseits. Eventuelle zusätzliche Angaben, die Sie uns übermitteln, werden allein dem Zweck und Anlass entsprechend verarbeitet. Nach Wegfall des Grundes für die Speicherung, werden die Daten unverzüglich gelöscht oder -- sofern im Einzelfall erforderlich -- gesperrt. Wenn Sie unser Online-Formular für einen Antrag auf Vereinsmitgliedschaft nutzen, werden Ihre dort gemachten Angaben allein zur Begründung und Durchführung des mitgliedschaftlichen Vertragsverhältnisses verwendet. Diese Daten werden lediglich für die Dauer der Vereinsmitgliedschaft im Rahmen unserer Mitgliederverwaltung gespeichert und ausschließlich hierfür genutzt. Nach Beendigung der Mitgliedschaft werden die Daten gelöscht oder -- soweit notwendig -- gesperrt.
              </p>

              <h2 className="text-2xl font-bold mb-4">Weitergabe von personenbezogenen Daten</h2>
              <p className="mb-6">
                Die von Ihnen übermittelten personenbezogenen Daten werden nicht an Dritte weitergegeben, weder zu kommerziellen noch zu nichtkommerziellen Zwecken.
              </p>

              <h2 className="text-2xl font-bold mb-4">Datensicherheit</h2>
              <p className="mb-6">
                Wir versichern, dass wir die nach Art. 32 DSGVO erforderlichen technischen sowie organisatorischen Maßnahmen ergriffen haben, um ein dem Risiko für die Rechte und Freiheiten des Nutzers angemessenes Schutzniveau zu gewährleisten. Dies betrifft insbesondere die Auswahl der verwendeten Hard- und Software sowie die innerorganisatorische Kontrolle und Zugriffsberechtigung. Nichtsdestotrotz wird vorsorglich darauf hingewiesen, dass die Datenübertragung im Internet (z.B. per E-Mail) immer gewisse Sicherheitslücken aufweisen und nicht vollumfänglich vor dem Zugriff durch Dritte geschützt werden kann.
              </p>

              <h2 className="text-2xl font-bold mb-4">Rechte des Betroffenen</h2>
              <p className="mb-4">
                Sie haben hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten nach den geltenden datenschutzrechtlichen Bestimmungen insbesondere einen Anspruch auf
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Information und Auskunft über die von uns vorgenommene Verarbeitung Ihrer personenbezogenen Daten (Art. 15 DSGVO),</li>
                <li>auf Berichtigung und Vervollständigung bezüglich unrichtiger bzw. unvollständiger Daten (Art. 16 DSGVO) und</li>
                <li>auf Löschung nach Maßgabe des Art. 17 DSGVO bzw. auf Einschränkung nach Art. 18 DSGVO.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Widerspruch und Widerruf von Einwilligungen</h2>
              <p className="mb-6">
                Soweit Ihre personenbezogenen Daten im Rahmen des Art. 6 Abs. 1 f) DSGVO erhoben und verarbeitet werden (d.h. bei Vorliegen berechtigter Interessen des Verantwortlichen), haben Sie nach Art. 21 DSGVO das Recht, hiergegen jederzeit Widerspruch einzulegen, wenn insoweit Gründe bestehen, die sich aus Ihrer besonderen Situation ergeben, oder wenn sich der Widerspruch gegen eine Direktwerbung richtet. Soweit eine Datenverarbeitung aufgrund Ihrer diesbezüglichen vorherigen Einwilligung erfolgt ist, steht es Ihnen jederzeit frei, Ihre Einwilligung in den betreffenden Datenverarbeitungsvorgang zu widerrufen. Sowohl für den Widerspruch als auch für den Widerruf genügt eine einfache Mitteilung per E-Mail an uns. Die betreffenden personenbezogenen Daten werden dann unverzüglich gelöscht.
              </p>

              <h2 className="text-2xl font-bold mb-4">Beschwerderecht</h2>
              <p className="mb-6">
                Nach Art. 77 DSGVO hat ein Betroffener im Falle eines datenschutzrechtlichen Verstoßes das Recht, sich mit einer entsprechenden Beschwerde an die zuständige Aufsichtsbehörde zu wenden. Hierbei handelt es sich um den Datenschutzbeauftragten des Landes Nordrhein-Westfalens.
              </p>

              <h2 className="text-2xl font-bold mb-4">Verschlüsselung</h2>
              <p className="mb-6">
                Aus Sicherheitsgründen nutzen wir auf unserer Seite eine SSL- bzw. TLS-Verschlüsselung, was Sie an dem Schloss-Symbol in der Browserzeile sowie an der Abkürzung „https://" (statt „http://") erkennen können. Ist die Verschlüsselung aktiv, können Daten bzw. inhaltliche Angaben, die Sie an uns übermitteln, von Dritten nicht mitgelesen werden.
              </p>

              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="mb-6">
                Diese Webseite an sich verwendet keine Cookies. Für Cookies etwaiger eingebundener Medien (Youtube-Videos, Links zu externen Webseiten etc.) kann keine Gewähr übernommen werden (siehe Dienste und Inhalte anderer Anbieter).
              </p>

              <h2 className="text-2xl font-bold mb-4">Dienste und Inhalte anderer Anbieter</h2>
              <p className="mb-6">
                Auf unserer Internetseite können Sie Dienste und Inhalte anderer Anbieter nutzen, etwa Videos von YouTube oder die Weiterleitungsfunktion auf unsere Kanäle in sozialen Netzwerken (Instagram). Zur vollständigen Darstellung der entsprechenden Inhalte ist es notwendig, Ihre IP-Adresse zu übermitteln. Leider können wir keine Gewähr dafür übernehmen, dass die IP-Adressen von den betreffenden Anbietern nicht gespeichert und verarbeitet werden. Es ist dann aber in der Regel davon auszugehen, dass eine Speicherung nur zu statistischen Zwecken stattfindet. Sollte uns bekannt werden, dass die betreffenden IP-Adressen tatsächlich gespeichert werden, wird ein entsprechender ausdrücklicher Hinweis an die Besucher unserer Webseite ergehen. Soweit Sie eine Verlinkung auf unserer Webseite nutzen, die Sie zu einer anderen Webseite weiterleitet, wird für die Rechtmäßigkeit der dortigen Inhalte und die dortige Einhaltung des Datenschutzes keine Haftung übernommen. Insoweit ist ausschließlich der Betreiber der entsprechenden Homepage verantwortlich. Wenn Sie den Inhalt dieser Webseite in sozialen Netzwerken teilen wollen, können Sie dies durch Anklicken des entsprechenden Buttons bewirken. Damit ist keine automatische Übertragung von Nutzerdaten an die Betreiber der sozialen Netzwerke verbunden.
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