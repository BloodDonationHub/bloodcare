import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    home: 'HOME',
    donate: 'DONATE BLOOD',
    involved: 'GET INVOLVED',
    banks: 'BLOOD BANKS',
    news: 'NEWS & UPDATES',
    about: 'ABOUT US',
    contact: 'CONTACT',
    searchPlaceholder: 'Search donors...',
    member: 'Become a Member',
    volunteer: 'Become a Volunteer',
    donateToUs: 'Donate to BloodCare',
    newsText: '📰 News',
    media: '📷 Media (Photos & Videos)',
    tips: '💡 Tips & Health',
    events: '📅 Upcoming Events',
    introduction: 'Introduction',
    structure: 'Organizational Structure & Development',
    contactUs: 'Contact Us',
    findBank: 'Find Blood Bank Near You',
    welcome: 'Welcome to BloodCare',
    homeDescription: 'This is the home page for our Blood Donation Platform.',
  },
  np: {
    home: 'गृहपृष्ठ',
    donate: 'रक्तदान गर्नुहोस्',
    involved: 'सक्रिय सहभागिता',
    banks: 'रक्त बैंकहरू',
    news: 'समाचार र अपडेटहरू',
    about: 'हाम्रोबारे',
    contact: 'सम्पर्क',
    searchPlaceholder: 'दाता खोज्नुहोस्...',
    member: 'सदस्य बन्नुहोस्',
    volunteer: 'स्वयंसेवक बन्नुहोस्',
    donateToUs: 'BloodCare लाई दान गर्नुहोस्',
    newsText: '📰 समाचार',
    media: '📷 मिडिया (फोटो/भिडियो)',
    tips: '💡 टिप्स र स्वास्थ्य',
    events: '📅 आगामी कार्यक्रमहरू',
    introduction: 'परिचय',
    structure: 'संगठनात्मक संरचना र विकास',
    contactUs: 'सम्पर्क गर्नुहोस्',
    findBank: 'नजिकको रक्त बैंक खोज्नुहोस्',
    welcome: 'BloodCare मा स्वागत छ',
    homeDescription: 'यो हाम्रो रक्तदान प्लेटफर्मको गृहपृष्ठ हो।',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
