import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import AuthForm from './AuthForm';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { t, language, setLanguage } = useLanguage();
  const { isLoggedIn, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };
  const handleDropdownToggle = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  const handleMouseEnter = (name) => setOpenDropdown(name);
  const handleMouseLeave = () => setOpenDropdown(null);

  // Translations for hardcoded text
  const customTranslations = {
    en: {
     
      searchPlaceholder: 'Search donors...',
      home: 'HOME',
      donate: 'DONATE BLOOD',
      involved: 'GET INVOLVED',
      member: 'Become a Member',
      volunteer: 'Become a Volunteer',
      donateToUs: 'Donate to BloodCare',
      banks: 'BLOOD BANKS',
      news: 'NEWS & UPDATES',
      media: 'Media',
      tips: 'Tips',
      events: 'Events',
      about: 'ABOUT US',
      introduction: 'Introduction',
      structure: 'Organizational Structure',
      vaccineInfo: 'Vaccination Info',
      contact: 'CONTACT',
      contactUs: 'Contact Us',
      findBank: 'Find Blood Bank',
      loginSignup: 'Login / Signup',
      logout: 'Logout',
      toggleDarkMode: 'Toggle Dark Mode'
    },
    np: {
    
      searchPlaceholder: 'रक्तदाता खोज्नुहोस्...',
      home: 'गृहपृष्ठ',
      donate: 'रक्त दान गर्नुहोस्',
      involved: 'संलग्न हुनुहोस्',
      member: 'सदस्य बन्नुहोस्',
      volunteer: 'स्वयंसेवक बन्नुहोस्',
      donateToUs: 'ब्लडकेयरलाई दान गर्नुहोस्',
      banks: 'रक्त बैंकहरू',
      news: 'समाचार र अपडेटहरू',
      media: 'मिडिया',
      tips: 'सुझावहरू',
      events: 'कार्यक्रमहरू',
      about: 'हाम्रो बारेमा',
      introduction: 'परिचय',
      structure: 'संगठनात्मक संरचना',
      vaccineInfo: 'वैक्सिन जानकारी',
      contact: 'सम्पर्क',
      contactUs: 'हामीलाई सम्पर्क गर्नुहोस्',
      findBank: 'रक्त बैंक खोज्नुहोस्',
      loginSignup: 'लगइन / साइन अप',
      logout: 'लगआउट',
      toggleDarkMode: 'डार्क मोड टगल गर्नुहोस्'
    }
  };

  const translate = (key) => customTranslations[language][key] || key;

  return (
    <>
      <nav className={`navbar navbar-expand-lg shadow fixed-top px-4 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <img 
            src="/images/logo.webp" 
            alt="" 
            width="60" 
            height="60" 
            className="d-inline-block align-text-top rounded-circle"
          />
          {translate('BloodCare')}
        </Link>

        <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
          {isOpen ? (
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>&times;</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* 🔍 Search */}
            <li className="nav-item me-3 d-flex align-items-center">
              <div className={`d-flex align-items-center rounded-pill px-2 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
                <FiSearch size={16} className="me-2 text-muted" />
                <input
                  type="text"
                  placeholder={translate('searchPlaceholder')}
                  className={`form-control form-control-sm border-0 bg-transparent text-${darkMode ? 'light' : 'dark'}`}
                  style={{ maxWidth: '200px', boxShadow: 'none' }}
                />
              </div>
            </li>

            {/* Static Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                {translate('home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate" onClick={handleLinkClick}>
                {translate('donate')}
              </Link>
            </li>

            {/* GET INVOLVED */}
            <li className={`nav-item dropdown ${openDropdown === 'involved' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('involved')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('involved')}>
                {translate('involved')}
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'involved' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/become-member" onClick={handleLinkClick}>{translate('member')}</Link></li>
                <li><Link className="dropdown-item" to="/become-volunteer" onClick={handleLinkClick}>{translate('volunteer')}</Link></li>
                <li><Link className="dropdown-item" to="/donate" onClick={handleLinkClick}>{translate('donate')}</Link></li>
                <li><Link className="dropdown-item" to="/donate-to-us" onClick={handleLinkClick}>{translate('donateToUs')}</Link></li>
              </ul>
            </li>

            {/* BLOOD BANKS */}
            <li className="nav-item">
              <Link className="nav-link" to="/banks" onClick={handleLinkClick}>
                {translate('banks')}
              </Link>
            </li>

            {/* NEWS & UPDATES */}
            <li className={`nav-item dropdown ${openDropdown === 'news' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('news')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('news')}>
                {translate('news')}
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'news' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/news" onClick={handleLinkClick}>📰 {translate('news')}</Link></li>
                <li><Link className="dropdown-item" to="/media" onClick={handleLinkClick}>📷 {translate('media')}</Link></li>
                <li><Link className="dropdown-item" to="/tips" onClick={handleLinkClick}>💡 {translate('tips')}</Link></li>
                <li><Link className="dropdown-item" to="/events" onClick={handleLinkClick}>📅 {translate('events')}</Link></li>
              </ul>
            </li>

            {/* ABOUT US */}
            <li className={`nav-item dropdown ${openDropdown === 'about' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('about')}>
                {translate('about')}
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'about' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/about/introduction" onClick={handleLinkClick}>{translate('introduction')}</Link></li>
                <li><Link className="dropdown-item" to="/about/structure-development" onClick={handleLinkClick}>{translate('structure')}</Link></li>
                <li><Link className="dropdown-item" to="/about/vaccine" onClick={handleLinkClick}>{translate('vaccineInfo')}</Link></li>
              </ul>
            </li>

            {/* CONTACT */}
            <li className={`nav-item dropdown ${openDropdown === 'contact' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('contact')}>
                {translate('contact')}
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'contact' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/contact" onClick={handleLinkClick}>{translate('contactUs')}</Link></li>
                <li><Link className="dropdown-item" to="/blood-banks" onClick={handleLinkClick}>{translate('findBank')}</Link></li>
              </ul>
            </li>

            {/* LOGIN / LOGOUT */}
            {!isLoggedIn ? (
              <li className="nav-item ms-3">
                <button
                  className="btn btn-sm btn-outline-success d-flex align-items-center gap-1"
                  onClick={() => setShowAuthModal(true)}
                >
                  <i className="bi bi-person-circle"></i> {translate('loginSignup')}
                </button>
              </li>
            ) : (
              <li className="nav-item ms-3">
                <button className="btn btn-sm btn-danger" onClick={logout}>
                  {translate('logout')}
                </button>
              </li>
            )}

            {/* DARK MODE TOGGLE */}
            <li className="nav-item d-flex align-items-center ms-3">
              <button
                onClick={toggleDarkMode}
                className="btn btn-sm btn-light"
                title={translate('toggleDarkMode')}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>

            {/* LANGUAGE SWITCH */}
            <li className="nav-item d-flex align-items-center ms-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
                className="btn btn-sm btn-outline-primary"
              >
                {language === 'en' ? 'नेपाली' : 'English'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🔐 Login/Signup Modal */}
      {showAuthModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <AuthForm 
              darkMode={darkMode} 
              onClose={() => setShowAuthModal(false)} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;