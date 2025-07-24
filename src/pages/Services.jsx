import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiClock, FiUsers, FiShield, FiActivity, FiCheck, FiPhone } = FiIcons;

const Services = () => {
  const mainServices = [
    {
      icon: FiClock,
      title: '24-Stunden-Betreuung',
      description: 'Rund um die Uhr professionelle Betreuung in der gewohnten häuslichen Umgebung.',
      features: [
        'Kontinuierliche Anwesenheit',
        'Nacht- und Tagbetreuung',
        'Notfallversorgung',
        'Flexible Einsatzzeiten'
      ],
      price: 'Ab 2.200€/Monat'
    },
    {
      icon: FiHeart,
      title: 'Grundpflege',
      description: 'Professionelle Körperpflege und Unterstützung bei den täglichen Aktivitäten.',
      features: [
        'Körperpflege und Hygiene',
        'An- und Auskleiden',
        'Mobilisation',
        'Ernährungshilfe'
      ],
      price: 'Ab 35€/Stunde'
    },
    {
      icon: FiHome,
      title: 'Haushaltshilfe',
      description: 'Unterstützung im Haushalt für ein sauberes und organisiertes Zuhause.',
      features: [
        'Reinigung und Ordnung',
        'Wäschepflege',
        'Einkäufe',
        'Mahlzeitenzubereitung'
      ],
      price: 'Ab 25€/Stunde'
    },
    {
      icon: FiUsers,
      title: 'Seniorenbetreuung',
      description: 'Einfühlsame Begleitung und Aktivierung für ein erfülltes Leben im Alter.',
      features: [
        'Gesellschaft und Gespräche',
        'Spaziergänge und Ausflüge',
        'Gedächtnistraining',
        'Hobbys und Interessen'
      ],
      price: 'Ab 30€/Stunde'
    },
    {
      icon: FiShield,
      title: 'Demenzbetreuung',
      description: 'Spezialisierte Betreuung für Menschen mit Demenz und ihre Angehörigen.',
      features: [
        'Validationstherapie',
        'Strukturierter Tagesablauf',
        'Angehörigenberatung',
        'Sicherheitsmaßnahmen'
      ],
      price: 'Ab 40€/Stunde'
    },
    {
      icon: FiActivity,
      title: 'Palliativpflege',
      description: 'Würdevolle Begleitung in der letzten Lebensphase mit Fokus auf Lebensqualität.',
      features: [
        'Schmerzlinderung',
        'Symptomkontrolle',
        'Psychosoziale Betreuung',
        'Angehörigenunterstützung'
      ],
      price: 'Auf Anfrage'
    }
  ];

  const additionalServices = [
    'Medikamentengabe',
    'Wundversorgung',
    'Injektionen',
    'Blutdruckmessung',
    'Blutzuckerkontrolle',
    'Verbandswechsel',
    'Physiotherapie',
    'Ergotherapie',
    'Logopädie',
    'Fahrdienste',
    'Begleitung zu Ärzten',
    'Behördengänge'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-gold-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unsere <span className="text-primary-600">Leistungen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Pflegeleistungen für jeden Bedarf - von der Grundpflege 
              bis zur spezialisierten 24-Stunden-Betreuung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hauptleistungen
            </h2>
            <p className="text-xl text-gray-600">
              Professionelle Pflege und Betreuung nach höchsten Standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mb-4">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="text-lg font-bold text-primary-600">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Zusätzliche Leistungen
            </h2>
            <p className="text-xl text-gray-600">
              Ergänzende Services für eine ganzheitliche Betreuung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              So funktioniert's
            </h2>
            <p className="text-xl text-gray-600">
              Von der ersten Beratung bis zur langfristigen Betreuung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Kostenlose Beratung',
                description: 'Wir besprechen Ihre Bedürfnisse und erstellen ein individuelles Angebot.'
              },
              {
                step: '2',
                title: 'Pflegeplanung',
                description: 'Gemeinsam entwickeln wir einen maßgeschneiderten Pflegeplan.'
              },
              {
                step: '3',
                title: 'Personalauswahl',
                description: 'Wir finden die passende Pflegekraft für Ihre Anforderungen.'
              },
              {
                step: '4',
                title: 'Betreuungsstart',
                description: 'Die Pflege beginnt und wird kontinuierlich überwacht und angepasst.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Individuelle Beratung gewünscht?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Pflegebedürfnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491234567890"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
              Jetzt anrufen
            </a>
            <a
              href="/kontakt"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Beratungstermin vereinbaren
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;