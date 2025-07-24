import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-goldenpflege24.png" 
                alt="GoldenPflege24 Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback wenn das Logo nicht gefunden wird
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-xl">G</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professionelle Pflege und Betreuung für Ihre Liebsten. 
              Wir stehen Ihnen rund um die Uhr zur Verfügung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen" className="text-gray-300 hover:text-white transition-colors">Leistungen</Link></li>
              <li><Link to="/ueber-uns" className="text-gray-300 hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">Karriere</Link></li>
              <li><Link to="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unsere Leistungen</h3>
            <ul className="space-y-2 text-gray-300">
              <li>24h-Betreuung</li>
              <li>Häusliche Pflege</li>
              <li>Seniorenbetreuung</li>
              <li>Haushaltshilfe</li>
              <li>Medizinische Versorgung</li>
              <li>Palliativpflege</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-gray-300">Musterstraße 123</p>
                  <p className="text-gray-300">12345 Musterstadt</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-gold-500" />
                <p className="text-gray-300">+49 (0) 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-gold-500" />
                <p className="text-gray-300">info@goldenpflege24.de</p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-gold-500" />
                <p className="text-gray-300">24/7 verfügbar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 GoldenPflege24. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </Link>
            <Link to="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;