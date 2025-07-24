import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiDollarSign, FiUsers, FiHeart, FiAward, FiTrendingUp, FiShield, FiCheck, FiMail, FiPhone } = FiIcons;

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const benefits = [
    {
      icon: FiDollarSign,
      title: 'Attraktive Vergütung',
      description: 'Überdurchschnittliche Bezahlung nach Tarif plus Zulagen'
    },
    {
      icon: FiClock,
      title: 'Flexible Arbeitszeiten',
      description: 'Work-Life-Balance durch flexible Schichtmodelle'
    },
    {
      icon: FiTrendingUp,
      title: 'Weiterbildungen',
      description: 'Kontinuierliche Fort- und Weiterbildungsmöglichkeiten'
    },
    {
      icon: FiUsers,
      title: 'Starkes Team',
      description: 'Familiäres Arbeitsklima und kollegiale Unterstützung'
    },
    {
      icon: FiShield,
      title: 'Jobsicherheit',
      description: 'Unbefristete Verträge und sichere Arbeitsplätze'
    },
    {
      icon: FiAward,
      title: 'Karrierechancen',
      description: 'Aufstiegsmöglichkeiten und Entwicklungsperspektiven'
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Pflegefachkraft (m/w/d)',
      category: 'vollzeit',
      location: 'München',
      type: 'Vollzeit',
      salary: '3.200 - 3.800€',
      description: 'Wir suchen eine erfahrene Pflegefachkraft für die häusliche Kranken- und Altenpflege.',
      requirements: [
        'Abgeschlossene Ausbildung als Pflegefachkraft',
        'Mindestens 2 Jahre Berufserfahrung',
        'Führerschein Klasse B',
        'Einfühlungsvermögen und Teamgeist'
      ],
      responsibilities: [
        'Durchführung der Grund- und Behandlungspflege',
        'Medikamentengabe nach ärztlicher Verordnung',
        'Dokumentation der Pflegemaßnahmen',
        'Beratung von Patienten und Angehörigen'
      ]
    },
    {
      id: 2,
      title: 'Altenpfleger (m/w/d)',
      category: 'vollzeit',
      location: 'Hamburg',
      type: 'Vollzeit',
      salary: '3.000 - 3.600€',
      description: 'Für unser 24h-Betreuungsteam suchen wir einen examinierten Altenpfleger.',
      requirements: [
        'Examinierter Altenpfleger',
        'Erfahrung in der häuslichen Pflege',
        'Flexibilität bei den Arbeitszeiten',
        'Empathie und Geduld'
      ],
      responsibilities: [
        '24h-Betreuung in der häuslichen Umgebung',
        'Aktivierung und Betreuung von Senioren',
        'Hauswirtschaftliche Tätigkeiten',
        'Enge Zusammenarbeit mit Angehörigen'
      ]
    },
    {
      id: 3,
      title: 'Betreuungsassistent (m/w/d)',
      category: 'teilzeit',
      location: 'Berlin',
      type: 'Teilzeit',
      salary: '15 - 18€/Std',
      description: 'Betreuungsassistent für die Begleitung und Aktivierung von pflegebedürftigen Menschen.',
      requirements: [
        'Qualifikation nach § 53c SGB XI',
        'Freude am Umgang mit älteren Menschen',
        'Kreativität und Einfühlungsvermögen',
        'Zuverlässigkeit'
      ],
      responsibilities: [
        'Betreuung und Aktivierung',
        'Gesellschaftsspiele und Gespräche',
        'Begleitung bei Spaziergängen',
        'Unterstützung bei Alltagsaktivitäten'
      ]
    },
    {
      id: 4,
      title: 'Pflegedienstleitung (m/w/d)',
      category: 'vollzeit',
      location: 'Frankfurt',
      type: 'Vollzeit',
      salary: '4.500 - 5.500€',
      description: 'Erfahrene Führungskraft für die Leitung unseres Pflegeteams gesucht.',
      requirements: [
        'Pflegefachkraft mit Weiterbildung zur PDL',
        'Mehrjährige Führungserfahrung',
        'Betriebswirtschaftliche Kenntnisse',
        'Organisationstalent'
      ],
      responsibilities: [
        'Leitung und Koordination des Pflegeteams',
        'Qualitätssicherung und -entwicklung',
        'Mitarbeiterführung und -entwicklung',
        'Kundenberatung und -betreuung'
      ]
    },
    {
      id: 5,
      title: 'Auszubildende Pflegefachkraft (m/w/d)',
      category: 'ausbildung',
      location: 'Köln',
      type: 'Ausbildung',
      salary: '1.100 - 1.300€',
      description: 'Starte deine Ausbildung zur Pflegefachkraft in unserem erfahrenen Team.',
      requirements: [
        'Mittlerer Schulabschluss oder Hauptschulabschluss mit Berufserfahrung',
        'Interesse an der Pflege',
        'Teamfähigkeit und Lernbereitschaft',
        'Physische und psychische Belastbarkeit'
      ],
      responsibilities: [
        'Erlernen der Grund- und Behandlungspflege',
        'Begleitung erfahrener Pflegekräfte',
        'Theoretische Ausbildung in der Pflegefachschule',
        'Praktische Einsätze in verschiedenen Bereichen'
      ]
    },
    {
      id: 6,
      title: 'Hauswirtschaftskraft (m/w/d)',
      category: 'teilzeit',
      location: 'Stuttgart',
      type: 'Teilzeit',
      salary: '12 - 15€/Std',
      description: 'Unterstützung unserer Kunden bei hauswirtschaftlichen Tätigkeiten.',
      requirements: [
        'Erfahrung in der Hauswirtschaft',
        'Zuverlässigkeit und Sorgfalt',
        'Führerschein von Vorteil',
        'Freundliches Auftreten'
      ],
      responsibilities: [
        'Reinigung und Ordnung der Wohnung',
        'Wäschepflege',
        'Einkäufe und Besorgungen',
        'Zubereitung einfacher Mahlzeiten'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Alle Stellen' },
    { id: 'vollzeit', name: 'Vollzeit' },
    { id: 'teilzeit', name: 'Teilzeit' },
    { id: 'ausbildung', name: 'Ausbildung' }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);

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
              Karriere bei <span className="text-primary-600">GoldenPflege24</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Pflege. 
              Entdecken Sie spannende Karrieremöglichkeiten in einem familiären Umfeld.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100+</div>
                <div className="text-gray-600">Mitarbeiter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Mitarbeiterzufriedenheit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15</div>
                <div className="text-gray-600">Offene Stellen</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Warum bei uns arbeiten?
            </h2>
            <p className="text-xl text-gray-600">
              Entdecken Sie die Vorteile einer Karriere bei GoldenPflege24
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Aktuelle Stellenangebote
            </h2>
            <p className="text-xl text-gray-600">
              Finden Sie Ihren Traumjob bei GoldenPflege24
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiClock} className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiDollarSign} className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Anforderungen:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Aufgaben:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.slice(0, 3).map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex-1">
                    Jetzt bewerben
                  </button>
                  <button className="border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                    Mehr Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              So einfach ist die Bewerbung
            </h2>
            <p className="text-xl text-gray-600">
              Ihr Weg zu uns in nur wenigen Schritten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Online bewerben',
                description: 'Senden Sie uns Ihre Bewerbungsunterlagen über unser Online-Portal.'
              },
              {
                step: '2',
                title: 'Erstes Gespräch',
                description: 'Wir führen ein erstes Kennenlerngespräch per Telefon oder Video.'
              },
              {
                step: '3',
                title: 'Persönliches Interview',
                description: 'Bei einem persönlichen Termin lernen wir uns besser kennen.'
              },
              {
                step: '4',
                title: 'Willkommen im Team',
                description: 'Nach erfolgreicher Bewerbung heißen wir Sie herzlich willkommen.'
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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Haben Sie Fragen zu unseren Stellenangeboten?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Unser HR-Team steht Ihnen gerne für alle Fragen rund um Ihre Bewerbung zur Verfügung.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Mail</h3>
              <a href="mailto:jobs@goldenpflege24.de" className="text-primary-600 hover:text-primary-700">
                jobs@goldenpflege24.de
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
              <a href="tel:+491234567892" className="text-primary-600 hover:text-primary-700">
                +49 (0) 123 456 7892
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bereit für den nächsten Karriereschritt?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Werden Sie Teil unseres Teams und machen Sie den Unterschied im Leben anderer Menschen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Initiativbewerbung senden
            </button>
            <a
              href="/kontakt"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;