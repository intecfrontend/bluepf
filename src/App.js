import { initReactI18next, useTranslation } from 'react-i18next';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Jobs from './components/Jobs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import i18n from 'i18next';

// Define your translations here
const translationsEn = {
  call_me: 'Call me',
  webd: "Web Development",
  down: "Download CV",
  test: "Testimonials",
  about: "About",
  code: "My code",
  test: "testimonials",
  test: "testimonials",
};
const translationsDu = {
  call_me: 'Bel me!',
  webd: "Web Development",
  down: "Download CV",
  test: "Referenties",
  about: "Over mijzelf",
  test: "Mijn code",
  test: "testimonials",


};
const translationsFr = {
  call_me: 'Appelle-moi',
  webd: "Développement Web",
  down: "Télécharger mon CV",
  test: "Références",
  about: "À propos de moi-même",
  test: "Mon code",


};

// Initialize i18n with the translations
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    du: { translation: translationsDu },
    fr: { translation: translationsFr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: true },
});

function App() {
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  }
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <Hero />
      <h1>{t('welcome')}</h1>
      <p>{t('changed')}</p>

      <About />
      <Jobs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
