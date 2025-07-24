import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck, FiMessageCircle } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: '',
        urgency: 'normal'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Telefon',
      details: ['+49 (0) 123 456 789', 'Kostenlose Hotline'],
      link: 'tel:+491234567890'
    },
    {
      icon: FiMail,
      title: 'E-Mail',
      details: ['info@goldenpflege24.de', 'Antwort innerhalb 24h'],
      link: 'mailto:info@goldenpflege24.de'
    },
    {
      icon: FiMapPin,
      title: 'Adresse',
      details: ['Musterstraße 123', '12345 Musterstadt'],
      link: 'https://maps.google.com'
    },
    {
      icon: FiClock,
      title: 'Öffnungszeiten',
      details: ['24/7 Notfallbereitschaft', 'Büro: Mo-Fr 8-18 Uhr'],
      link: null
    }
  ];

  const serviceTypes = [
    'Kostenlose Beratung',
    '24h-Betreuung',
    'Grundpflege',
    'Haushaltshilfe',
    'Seniorenbetreuung',
    'Demenzbetreuung',
    'Palliativpflege',
    'Sonstiges'
  ];

  const faqs = [
    {
      question: 'Wie schnell können Sie mit der Betreuung beginnen?',
      answer: 'In der Regel können wir innerhalb von 48-72 Stunden mit der Betreuung beginnen, bei Notfällen auch schneller.'
    },
    {
      question: 'Übernimmt die Pflegeversicherung die Kosten?',
      answer: 'Ja, viele unserer Leistungen werden von der Pflegeversicherung übernommen. Wir beraten Sie gerne zu den Finanzierungsmöglichkeiten.'
    },
    {
      question: 'Sind Ihre Pflegekräfte qualifiziert?',
      answer: 'Alle unsere Pflegekräfte sind examiniert und verfügen über langjährige Erfahrung. Sie werden regelmäßig fortgebildet.'
    },
    {
      question: 'Kann ich die Pflegekraft wechseln?',
      answer: 'Ja, falls die Chemie nicht stimmt, können wir gerne eine andere Pflegekraft für Sie finden.'
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
              <span className="text-primary-600">Kontakt</span> & Beratung
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wir sind für Sie da! Kontaktieren Sie uns für eine kostenlose Beratung 
              oder bei Fragen zu unseren Pflegeleistungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491234567890"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
                Sofort anrufen
              </a>
              <a
                href="#contact-form"
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Nachricht senden
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              So erreichen Sie uns
            </h2>
            <p className="text-xl text-gray-600">
              Wir sind rund um die Uhr für Sie da
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className={`${detailIndex === 0 ? 'text-primary-600 font-medium' : 'text-gray-600 text-sm'}`}
                    >
                      {info.link && detailIndex === 0 ? (
                        <a href={info.link} className="hover:text-primary-700 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kostenlose Beratung anfordern
            </h2>
            <p className="text-xl text-gray-600">
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCheck} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
                <p className="text-gray-600">
                  Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+49 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Gewünschte Leistung
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Bitte wählen...</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Dringlichkeit
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Dringend</option>
                    <option value="emergency">Notfall</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Beschreiben Sie uns Ihre Situation oder stellen Sie Ihre Fragen..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Ich stimme der <a href="/datenschutz" className="text-primary-600 hover:text-primary-700">Datenschutzerklärung</a> zu. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                  Nachricht senden
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Antworten auf die wichtigsten Fragen zu unseren Leistungen
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <SafeIcon icon={FiMessageCircle} className="mr-3 w-5 h-5 text-primary-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unser Standort
            </h2>
            <p className="text-xl text-gray-600">
              Besuchen Sie uns in unserem Büro oder vereinbaren Sie einen Hausbesuch
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bürozeiten & Anfahrt</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Adresse</p>
                      <p className="text-gray-600">Musterstraße 123<br />12345 Musterstadt</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Bürozeiten</p>
                      <p className="text-gray-600">
                        Montag - Freitag: 8:00 - 18:00 Uhr<br />
                        Samstag: 9:00 - 14:00 Uhr<br />
                        Sonntag: Notfallbereitschaft
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">24h-Hotline</p>
                      <p className="text-gray-600">+49 (0) 123 456 789</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Hinweis:</strong> Gerne besuchen wir Sie auch zu Hause für eine 
                    persönliche Beratung. Vereinbaren Sie einfach einen Termin mit uns.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-96 bg-gray-200 rounded-lg flex items-center justify-center"
            >
              {/* Placeholder for map */}
              <div className="text-center">
                <SafeIcon icon={FiMapPin} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interaktive Karte</p>
                <p className="text-sm text-gray-400">Hier würde normalerweise eine Google Maps Karte angezeigt</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notfall? Wir sind sofort da!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bei Pflegenotfällen sind wir rund um die Uhr erreichbar und können schnell helfen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491234567890"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center text-lg"
              >
                <SafeIcon icon={FiPhone} className="mr-2 w-6 h-6" />
                Notfall-Hotline: +49 (0) 123 456 789
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Bei lebensbedrohlichen Notfällen wählen Sie bitte den Notruf 112
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;