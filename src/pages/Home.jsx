import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiShield, FiClock, FiUsers, FiStar, FiArrowRight, FiCheck } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiHeart,
      title: '24h Betreuung',
      description: 'Rund um die Uhr professionelle Pflege und Betreuung in gewohnter Umgebung.'
    },
    {
      icon: FiShield,
      title: 'Qualifiziertes Personal',
      description: 'Ausgebildete Pflegekräfte mit langjähriger Erfahrung und Einfühlungsvermögen.'
    },
    {
      icon: FiClock,
      title: 'Flexible Zeiten',
      description: 'Individuelle Betreuungszeiten nach Ihren Bedürfnissen und Wünschen.'
    },
    {
      icon: FiUsers,
      title: 'Familienbetreuung',
      description: 'Unterstützung und Beratung für Angehörige in allen Pflegefragen.'
    }
  ];

  const services = [
    'Grundpflege und Körperpflege',
    'Medikamentengabe',
    'Haushaltshilfe',
    'Seniorenbetreuung',
    'Demenzbetreuung',
    'Palliativpflege'
  ];

  const testimonials = [
    {
      name: 'Maria Schmidt',
      text: 'Die Betreuung meiner Mutter war außergewöhnlich. Das Team ist sehr einfühlsam und professionell.',
      rating: 5
    },
    {
      name: 'Hans Müller',
      text: 'Endlich kann ich beruhigt arbeiten, da ich weiß, dass mein Vater in besten Händen ist.',
      rating: 5
    },
    {
      name: 'Anna Weber',
      text: 'Die 24h-Betreuung hat unsere Lebensqualität enorm verbessert. Sehr empfehlenswert!',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-gold-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Pflege mit
                <span className="text-gold-600"> Herz</span> und
                <span className="text-primary-600"> Verstand</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professionelle 24-Stunden-Betreuung für Ihre Liebsten. 
                Wir sorgen dafür, dass sich Ihre Familie in den besten Händen fühlt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  Kostenlose Beratung
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/leistungen"
                  className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors text-center"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Pflege mit Herz"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.9/5 Sterne</p>
                    <p className="text-sm text-gray-600">Kundenbewertung</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Warum GoldenPflege24?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten mehr als nur Pflege - wir schaffen ein Zuhause voller Wärme und Geborgenheit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Unsere Leistungen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Von der Grundpflege bis zur spezialisierten Betreuung - 
                wir bieten umfassende Pflegeleistungen für jeden Bedarf.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/leistungen"
                className="inline-block mt-8 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Alle Leistungen ansehen
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Pflegeleistungen"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600">
              Vertrauen und Zufriedenheit stehen bei uns an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-gold-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bereit für eine kostenlose Beratung?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie uns gemeinsam die beste Pflegelösung für Ihre Familie finden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Jetzt Beratung anfordern
            </Link>
            <a
              href="tel:+491234567890"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Sofort anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;