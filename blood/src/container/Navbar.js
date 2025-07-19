import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';

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
    BloodCare
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
                  placeholder="Search donors..."
                  className={`form-control form-control-sm border-0 bg-transparent text-${darkMode ? 'light' : 'dark'}`}
                  style={{ maxWidth: '200px', boxShadow: 'none' }}
                />
              </div>
            </li>

            {/* Static Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate" onClick={handleLinkClick}>DONATE BLOOD</Link>
            </li>

            {/* GET INVOLVED */}
            <li className={`nav-item dropdown ${openDropdown === 'involved' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('involved')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('involved')}>
                GET INVOLVED
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'involved' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/become-member" onClick={handleLinkClick}>Become a Member</Link></li>
                <li><Link className="dropdown-item" to="/become-volunteer" onClick={handleLinkClick}>Become a Volunteer</Link></li>
                <li><Link className="dropdown-item" to="/donate" onClick={handleLinkClick}>Donate Blood</Link></li>
                <li><Link className="dropdown-item" to="/donate-to-us" onClick={handleLinkClick}>Donate to BloodCare</Link></li>
              </ul>
            </li>

            {/* BLOOD BANKS */}
            <li className="nav-item">
              <Link className="nav-link" to="/banks" onClick={handleLinkClick}>BLOOD BANKS</Link>
            </li>

            {/* NEWS & UPDATES */}
            <li className={`nav-item dropdown ${openDropdown === 'news' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('news')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('news')}>
                NEWS & UPDATES
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'news' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/news" onClick={handleLinkClick}>📰 News</Link></li>
                <li><Link className="dropdown-item" to="/media" onClick={handleLinkClick}>📷 Media</Link></li>
                <li><Link className="dropdown-item" to="/tips" onClick={handleLinkClick}>💡 Tips</Link></li>
                <li><Link className="dropdown-item" to="/events" onClick={handleLinkClick}>📅 Events</Link></li>
              </ul>
            </li>

            
            {/* ABOUT US */}
            <li
              className={`nav-item dropdown ${openDropdown === 'about' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('about')}
              >
                ABOUT US
              </span>
              <ul
                className={`dropdown-menu ${openDropdown === 'about' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''
                  }`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/about/introduction"
                    onClick={handleLinkClick}
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/about/structure-development"
                    onClick={handleLinkClick}
                  >
                    Organizational Structure
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/about/vaccine"
                    onClick={handleLinkClick}
                  >
                    Vaccination Info
                  </Link>
                </li>
              </ul>
            </li>


            {/* CONTACT */}
            <li className={`nav-item dropdown ${openDropdown === 'contact' ? 'show' : ''}`}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}>
              <span className="nav-link dropdown-toggle" onClick={() => handleDropdownToggle('contact')}>
                CONTACT
              </span>
              <ul className={`dropdown-menu ${openDropdown === 'contact' ? 'show' : ''} ${darkMode ? 'dropdown-menu-dark' : ''}`}>
                <li><Link className="dropdown-item" to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                <li><Link className="dropdown-item" to="/blood-banks" onClick={handleLinkClick}>Find Blood Bank</Link></li>
              </ul>
            </li>

            {/* LOGIN / LOGOUT */}
            {!isLoggedIn ? (
              <li className="nav-item ms-3">
                <button
                  className="btn btn-sm btn-outline-success d-flex align-items-center gap-1"
                  onClick={() => setShowAuthModal(true)}
                >
                  <i className="bi bi-person-circle"></i> Login / Signup
                </button>
              </li>
            ) : (
              <li className="nav-item ms-3">
                <button className="btn btn-sm btn-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            )}

            {/* DARK MODE TOGGLE */}
            <li className="nav-item d-flex align-items-center ms-3">
              <button
                onClick={toggleDarkMode}
                className="btn btn-sm btn-light"
                title="Toggle Dark Mode"
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
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
};

export default Navbar;
