import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiAward, FiUsers, FiHeart, FiStar } = FiIcons;

const Team = () => {
  const leadership = [
    {
      name: 'Dr. Maria Goldmann',
      role: 'Geschäftsführerin & Gründerin',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      description: 'Dr. Goldmann bringt über 15 Jahre Erfahrung in der Pflegebranche mit. Sie gründete GoldenPflege24 mit der Vision, qualitativ hochwertige Pflege mit menschlicher Wärme zu verbinden.',
      qualifications: ['Promotion in Pflegewissenschaften', 'Zertifizierte Pflegedienstleitung', 'Expertin für Qualitätsmanagement'],
      email: 'm.goldmann@goldenpflege24.de',
      phone: '+49 (0) 123 456 789'
    },
    {
      name: 'Thomas Weber',
      role: 'Pflegedienstleitung',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      description: 'Thomas Weber ist examininierter Altenpfleger und Pflegewissenschaftler. Er leitet unser Pflegeteam und sorgt für die Umsetzung höchster Qualitätsstandards.',
      qualifications: ['Master in Pflegewissenschaften', 'Examininierter Altenpfleger', 'Qualitätsbeauftragter'],
      email: 't.weber@goldenpflege24.de',
      phone: '+49 (0) 123 456 790'
    },
    {
      name: 'Sarah Klein',
      role: 'Qualitätsmanagement',
      image: 'https://images.unsplash.com/photo-1594824388989-d3d9b4e8b1a2?w=400&h=400&fit=crop&crop=face',
      description: 'Sarah Klein ist unsere Spezialistin für Pflegequalität und -standards. Sie entwickelt kontinuierlich unsere Qualitätssicherung weiter und schult unser Personal.',
      qualifications: ['Zertifizierte Qualitätsmanagerin', 'Pflegefachkraft', 'Auditorin für Pflegeeinrichtungen'],
      email: 's.klein@goldenpflege24.de',
      phone: '+49 (0) 123 456 791'
    }
  ];

  const departments = [
    {
      name: 'Grundpflege Team',
      description: 'Spezialisiert auf Körperpflege, Mobilisation und tägliche Unterstützung',
      members: 25,
      icon: FiHeart,
      specialties: ['Körperpflege', 'Mobilisation', 'Ernährungshilfe', 'Medikamentengabe']
    },
    {
      name: '24h-Betreuung Team',
      description: 'Rund-um-die-Uhr Betreuung in der häuslichen Umgebung',
      members: 18,
      icon: FiUsers,
      specialties: ['24h-Anwesenheit', 'Nachtbetreuung', 'Notfallversorgung', 'Haushaltsführung']
    },
    {
      name: 'Demenz-Spezialisten',
      description: 'Experten für die Betreuung von Menschen mit Demenz',
      members: 12,
      icon: FiStar,
      specialties: ['Validationstherapie', 'Biografiearbeit', 'Angehörigenberatung', 'Sicherheitskonzepte']
    },
    {
      name: 'Palliativpflege Team',
      description: 'Würdevolle Begleitung in der letzten Lebensphase',
      members: 8,
      icon: FiAward,
      specialties: ['Schmerztherapie', 'Symptomkontrolle', 'Psychosoziale Betreuung', 'Trauerbegleitung']
    }
  ];

  const teamMembers = [
    {
      name: 'Anna Müller',
      role: 'Pflegefachkraft',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      experience: '8 Jahre',
      specialization: 'Grundpflege'
    },
    {
      name: 'Michael Schmidt',
      role: 'Altenpfleger',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
      experience: '12 Jahre',
      specialization: 'Demenzbetreuung'
    },
    {
      name: 'Julia Wagner',
      role: 'Krankenschwester',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop&crop=face',
      experience: '6 Jahre',
      specialization: 'Palliativpflege'
    },
    {
      name: 'Robert Fischer',
      role: 'Betreuungsassistent',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      experience: '4 Jahre',
      specialization: '24h-Betreuung'
    },
    {
      name: 'Lisa Hoffmann',
      role: 'Pflegefachkraft',
      image: 'https://images.unsplash.com/photo-1594824388989-d3d9b4e8b1a2?w=300&h=300&fit=crop&crop=face',
      experience: '10 Jahre',
      specialization: 'Wundversorgung'
    },
    {
      name: 'Andreas Bauer',
      role: 'Physiotherapeut',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      experience: '7 Jahre',
      specialization: 'Mobilisation'
    }
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
              Unser <span className="text-primary-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Lernen Sie die Menschen kennen, die sich täglich mit Herz und Verstand 
              für das Wohlbefinden Ihrer Liebsten einsetzen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100+</div>
                <div className="text-gray-600">Qualifizierte Mitarbeiter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Kundenzufriedenheit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Verfügbarkeit</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Führungsteam
            </h2>
            <p className="text-xl text-gray-600">
              Erfahrene Experten mit Leidenschaft für die Pflege
            </p>
          </div>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-xl text-primary-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-lg text-gray-600 mb-6">{leader.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Qualifikationen:</h4>
                    <ul className="space-y-2">
                      {leader.qualifications.map((qual, qualIndex) => (
                        <li key={qualIndex} className="flex items-center space-x-2">
                          <SafeIcon icon={FiAward} className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          <span className="text-gray-700">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <SafeIcon icon={FiMail} className="w-5 h-5" />
                      <span>{leader.email}</span>
                    </a>
                    <a
                      href={`tel:${leader.phone.replace(/\s/g, '')}`}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <SafeIcon icon={FiPhone} className="w-5 h-5" />
                      <span>{leader.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Fachbereiche
            </h2>
            <p className="text-xl text-gray-600">
              Spezialisierte Teams für jeden Pflegebereich
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={dept.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                    <p className="text-primary-600">{dept.members} Mitarbeiter</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{dept.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Spezialisierungen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Einige unserer Teammitglieder
            </h2>
            <p className="text-xl text-gray-600">
              Lernen Sie die Menschen kennen, die den Unterschied machen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Erfahrung: {member.experience}</span>
                    <span className="bg-gold-50 text-gold-700 px-2 py-1 rounded">
                      {member.specialization}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Wir suchen engagierte Pflegekräfte, die unsere Mission teilen. 
            Entdecken Sie spannende Karrieremöglichkeiten bei GoldenPflege24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/jobs"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Stellenangebote ansehen
            </a>
            <a
              href="/kontakt"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Initiativbewerbung
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;