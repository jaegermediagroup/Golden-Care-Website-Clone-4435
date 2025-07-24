import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiMail, FiPhone } = FiIcons;

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Verantwortlicher',
      content: `
        Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
        
        GoldenPflege24 GmbH
        Musterstraße 123
        12345 Musterstadt
        
        Telefon: +49 (0) 123 456 789
        E-Mail: info@goldenpflege24.de
        
        Geschäftsführer: Dr. Maria Goldmann
      `
    },
    {
      title: '2. Erfassung und Speicherung personenbezogener Daten',
      content: `
        Beim Besuch unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.
        
        Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
        
        • IP-Adresse des anfragenden Rechners
        • Datum und Uhrzeit des Zugriffs
        • Name und URL der abgerufenen Datei
        • Website, von der aus der Zugriff erfolgt (Referrer-URL)
        • Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers
      `
    },
    {
      title: '3. Verwendung von Cookies',
      content: `
        Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden.
        
        Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.
        
        Sie können der Verwendung von Cookies widersprechen und diese durch eine entsprechende Einstellung Ihres Internetbrowsers verhindern.
      `
    },
    {
      title: '4. Kontaktformular und E-Mail-Kontakt',
      content: `
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden die von Ihnen mitgeteilten Daten von uns gespeichert, um Ihre Fragen zu bearbeiten und mögliche Anschlussfragen beantworten zu können.
        
        Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
      `
    },
    {
      title: '5. Zwecke der Datenverarbeitung',
      content: `
        Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.
        
        Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme sicherzustellen.
      `
    },
    {
      title: '6. Rechtsgrundlage',
      content: `
        Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
        
        Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
      `
    },
    {
      title: '7. Dauer der Speicherung',
      content: `
        Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist.
        
        Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.
      `
    },
    {
      title: '8. Ihre Rechte',
      content: `
        Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
        
        • Recht auf Auskunft
        • Recht auf Berichtigung oder Löschung
        • Recht auf Einschränkung der Verarbeitung
        • Recht auf Widerspruch gegen die Verarbeitung
        • Recht auf Datenübertragbarkeit
        
        Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
      `
    },
    {
      title: '9. SSL-Verschlüsselung',
      content: `
        Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        
        Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      `
    },
    {
      title: '10. Änderungen der Datenschutzerklärung',
      content: `
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
        
        Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
      `
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-gold-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-gray-600">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Hier erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Überblick</h2>
              <p className="text-blue-800 mb-0">
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der 
                Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb 
                unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und 
                Inhalte sowie externen Onlinepräsenzen auf.
              </p>
            </div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fragen zum Datenschutz?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten 
              können Sie sich jederzeit an uns wenden.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:datenschutz@goldenpflege24.de"
                className="flex items-center justify-center space-x-3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={FiMail} className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">E-Mail</div>
                  <div className="text-primary-600">datenschutz@goldenpflege24.de</div>
                </div>
              </a>
              
              <a
                href="tel:+491234567890"
                className="flex items-center justify-center space-x-3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={FiPhone} className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <div className="text-primary-600">+49 (0) 123 456 789</div>
                </div>
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Stand: Januar 2024 | Diese Datenschutzerklärung wird regelmäßig überprüft und aktualisiert.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;