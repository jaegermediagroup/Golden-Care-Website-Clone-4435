import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers, FiAward, FiTrendingUp, FiShield, FiStar } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Menschlichkeit',
      description: 'Wir behandeln jeden Menschen mit Würde, Respekt und Einfühlungsvermögen.'
    },
    {
      icon: FiShield,
      title: 'Qualität',
      description: 'Höchste Standards in der Pflege durch kontinuierliche Fortbildung und Qualitätskontrolle.'
    },
    {
      icon: FiUsers,
      title: 'Vertrauen',
      description: 'Langfristige Beziehungen basierend auf Verlässlichkeit und Transparenz.'
    },
    {
      icon: FiStar,
      title: 'Exzellenz',
      description: 'Streben nach Perfektion in allem, was wir tun, für das Wohl unserer Kunden.'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Gründung',
      description: 'Start als kleiner Pflegedienst mit großen Träumen'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Erweiterung des Teams und der Servicebereiche'
    },
    {
      year: '2019',
      title: 'Zertifizierung',
      description: 'Erhalt wichtiger Qualitätszertifikate'
    },
    {
      year: '2021',
      title: '24h-Service',
      description: 'Einführung der 24-Stunden-Betreuung'
    },
    {
      year: '2024',
      title: 'Heute',
      description: 'Über 500 zufriedene Kunden und 100+ Mitarbeiter'
    }
  ];

  const stats = [
    { number: '500+', label: 'Zufriedene Kunden' },
    { number: '100+', label: 'Qualifizierte Mitarbeiter' },
    { number: '9', label: 'Jahre Erfahrung' },
    { number: '4.9', label: 'Sterne Bewertung' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-gold-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Über <span className="text-primary-600">GoldenPflege24</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Seit 2015 stehen wir für professionelle Pflege mit Herz. 
                Unser erfahrenes Team sorgt dafür, dass sich Ihre Liebsten 
                in den besten Händen fühlen.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
                alt="Unser Team"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Unsere Mission"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir glauben, dass jeder Mensch das Recht auf würdevolle Pflege 
                in der vertrauten Umgebung hat. Unser Ziel ist es, nicht nur 
                professionelle Pflegeleistungen zu erbringen, sondern echte 
                Lebensqualität zu schaffen.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Durch unsere ganzheitliche Herangehensweise unterstützen wir 
                nicht nur die Pflegebedürftigen, sondern entlasten auch die 
                Angehörigen und schaffen Vertrauen für alle Beteiligten.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-500" />
                  <span className="text-gray-700">Pflege mit Herz und Verstand</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">Familiäre Atmosphäre</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-gold-500" />
                  <span className="text-gray-700">Höchste Qualitätsstandards</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600">
              Diese Grundsätze leiten uns bei allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Geschichte
            </h2>
            <p className="text-xl text-gray-600">
              Von den Anfängen bis heute - eine Reise voller Meilensteine
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unser Führungsteam
            </h2>
            <p className="text-xl text-gray-600">
              Erfahrene Experten mit Leidenschaft für die Pflege
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Maria Goldmann',
                role: 'Geschäftsführerin',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
                description: '15 Jahre Erfahrung in der Pflegebranche'
              },
              {
                name: 'Thomas Weber',
                role: 'Pflegedienstleitung',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
                description: 'Examininierter Altenpfleger und Pflegewissenschaftler'
              },
              {
                name: 'Sarah Klein',
                role: 'Qualitätsmanagement',
                image: 'https://images.unsplash.com/photo-1594824388989-d3d9b4e8b1a2?w=300&h=300&fit=crop&crop=face',
                description: 'Spezialistin für Pflegequalität und -standards'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Werden Sie Teil unserer Familie
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Erfahren Sie mehr über unsere Karrieremöglichkeiten oder kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/jobs"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Karriere bei uns
            </a>
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

export default About;