import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Context
import Navbar from './container/Navbar';
import { LanguageProvider } from './context/LanguageContext';

// Pages & Components
import Home from './components/Home';
import DonateBlood from './components/DonateBlood';
import FindDonors from './components/FindDonors';
import BloodBanks from './components/BloodBanks';
import About from './components/About';
import Contact from './components/Contact';

import News from './components/News';
import Media from './components/Media';
import Tips from './components/Tips';
import Events from './components/Events';

import BecomeMember from './components/BecomeMember';
import BecomeVolunteer from './components/BecomeVolunteer';
import DonateToUs from './components/DonateToUs';

import StructureDevelopment from './components/StructureDevelopment ';
import Introduction from './components/Introduction ';
import EligibilityChecker from './pages/EligibilityChecker';
import Login from './pages/Login';
import WithAuthModal from './components/WithAuthModal';
import Vaccine from './components/Vaccine';



// Styles
import './App.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // Auth Wrapper
  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Login setIsLoggedIn={setIsLoggedIn} />;
  };

  return (
    <Router>
      <LanguageProvider>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="app" style={{ paddingTop: '70px' }}>
          <Routes>
            {/* Home & Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<DonateBlood />} />
            <Route path="/find" element={<FindDonors />} />
            <Route path="/banks" element={<BloodBanks />} />
            <Route path="/blood-banks" element={<BloodBanks />} />
            <Route path="/eligibility-checker" element={<EligibilityChecker />} />

            {/* Get Involved (Protected) */}


            <Route
              path="/become-volunteer"
              element={
                <WithAuthModal>
                  <BecomeVolunteer />
                </WithAuthModal>
              }
            />

            <Route path="/donate-to-us" element={<DonateToUs />} />

            {/* News & Updates */}
            <Route path="/news" element={<News />} />
            <Route path="/media" element={<Media />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/events" element={<Events />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/about/introduction" element={<Introduction />} />
            <Route path="/about/structure-development" element={<StructureDevelopment />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about/vaccine" element={<Vaccine />} />


          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
