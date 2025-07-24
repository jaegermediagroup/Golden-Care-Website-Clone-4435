import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiMail, FiPhone, FiMapPin, FiUser, FiShield } = FiIcons;

const Imprint = () => {
  const sections = [
    {
      title: 'Angaben gemäß § 5 TMG',
      icon: FiFileText,
      content: `
        GoldenPflege24 GmbH
        Musterstraße 123
        12345 Musterstadt
        Deutschland
      `
    },
    {
      title: 'Vertreten durch',
      icon: FiUser,
      content: `
        Geschäftsführerin: Dr. Maria Goldmann
      `
    },
    {
      title: 'Kontakt',
      icon: FiPhone,
      content: `
        Telefon: +49 (0) 123 456 789
        Telefax: +49 (0) 123 456 790
        E-Mail: info@goldenpflege24.de
      `
    },
    {
      title: 'Registereintrag',
      icon: FiFileText,
      content: `
        Eintragung im Handelsregister
        Registergericht: Amtsgericht Musterstadt
        Registernummer: HRB 12345
      `
    },
    {
      title: 'Umsatzsteuer-ID',
      icon: FiFileText,
      content: `
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        DE 123 456 789
      `
    },
    {
      title: 'Aufsichtsbehörde',
      icon: FiShield,
      content: `
        Zuständige Aufsichtsbehörde für ambulante Pflegedienste:
        
        Heimaufsicht der Stadt Musterstadt
        Musterstraße 456
        12345 Musterstadt
        
        Telefon: +49 (0) 123 987 654
        E-Mail: heimaufsicht@musterstadt.de
      `
    },
    {
      title: 'Berufsbezeichnung',
      icon: FiUser,
      content: `
        Berufsbezeichnung: Pflegedienst
        Verliehen in: Deutschland
        
        Zuständige Kammer:
        Pflegekammer des Landes Musterland
        Musterstraße 789
        12345 Musterstadt
      `
    }
  ];

  const legalSections = [
    {
      title: 'Haftungsausschluss',
      content: `
        Haftung für Inhalte:
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      `
    },
    {
      title: 'Haftung für Links',
      content: `
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        
        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      `
    },
    {
      title: 'Urheberrecht',
      content: `
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      `
    },
    {
      title: 'Streitschlichtung',
      content: `
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
        
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
              <SafeIcon icon={FiFileText} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Impressum
            </h1>
            <p className="text-xl text-gray-600">
              Angaben gemäß § 5 TMG und weitere rechtliche Informationen 
              zu GoldenPflege24
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={section.icon} className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rechtliche Hinweise
            </h2>
            <p className="text-xl text-gray-600">
              Wichtige Informationen zu Haftung und Urheberrecht
            </p>
          </div>

          <div className="space-y-12">
            {legalSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {section.title}
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kontakt zu uns
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bei Fragen oder Anregungen stehen wir Ihnen gerne zur Verfügung.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:info@goldenpflege24.de"
                className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <SafeIcon icon={FiMail} className="w-8 h-8 text-primary-600" />
                <div>
                  <div className="font-semibold text-gray-900">E-Mail</div>
                  <div className="text-primary-600">info@goldenpflege24.de</div>
                </div>
              </a>
              
              <a
                href="tel:+491234567890"
                className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <SafeIcon icon={FiPhone} className="w-8 h-8 text-primary-600" />
                <div>
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <div className="text-primary-600">+49 (0) 123 456 789</div>
                </div>
              </a>
              
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg">
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-primary-600" />
                <div>
                  <div className="font-semibold text-gray-900">Adresse</div>
                  <div className="text-gray-600">
                    Musterstraße 123<br />
                    12345 Musterstadt
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-8">
              Stand: Januar 2024 | Alle Angaben ohne Gewähr
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Imprint;