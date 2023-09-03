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

const translationsEn = {
  call_me: 'Call me',
  webd: "Web Development",
  down: "Download CV",
  test: "Testimonials",
  about: "About",
  code: "My code",

  aboutp1: "Over the past four years, I was a Code Instructor at intec Brussel. I transitioned from an Instructor to Head Instructor, specializing in web development for adults, often with university - level IT backgrounds.I covered GIT, HTML, CSS, JavaScript, React, PHP, Laravel, and Databases.",
  aboutp2: " I not only guided students in debugging exercises but also coached and motivated them, along with fellow instructors. Additionally, I played a pivotal role in establishing the Intec website.",
  aboutp3: "Before, I worked as a graphic designer for over 25 years, bringing a multilingual aspect, with fluency in speaking and writing four languages (NL-FR-EN-ES). As I found more joy in coding, I changed my career in 2017 to become a full-stack developer.",
  aboutb: "Download: reference letter previous employer.",

  testp1: "Benedikt worked under my supervision as an Instructor and later as Head Instructor. He is a highly passionate and committed developer. Not only was his technical guidance for students and instructors exceptional, but his support for Intec itself was also of a very high standard. Due to the discontinuation of some programs, Benedikt will be leaving our company on August 21, 2023 after having worked with us for 4 years. ",
  testp2: "I can wholeheartedly recommend him to any future employer.",
  testl1: "Director of 'Intec Brussel'",
  down: "Download CV",
  test: "Testimonials",
  about: "About",
  code: "My code",


};
const translationsDu = {
  call_me: 'Bel me!',
  webd: "Web Development",
  down: "Download CV",
  test: "Referenties",
  about: "Over mijzelf",
  code: "Mijn code",

  aboutp1: "De afgelopen vier jaar was ik Code-instructeur bij intec Brussel. Ik ben overgegaan van instructeur naar Hoofdinstructeur, gespecialiseerd in webontwikkeling voor volwassenen, vaak met een IT-achtergrond op universitair niveau. Ik behandelde GIT, HTML, CSS, JavaScript, React, PHP, Laravel en databases.",
  aboutp2: " Ik heb niet alleen studenten begeleid bij het oplossen van oefeningen, maar ook gecoacht en gemotiveerd, samen met mede-instructeurs. Daarnaast speelde ik een cruciale rol bij het opzetten van de Intec-website.",
  aboutp3: "Voorheen werkte ik meer dan 25 jaar als grafisch ontwerper, met een multilingual aspect, waarbij ik vloeiend vier talen (NL-FR-EN-ES) sprak en schreef. Omdat ik meer plezier vond in coderen, heb ik in 2017 mijn carrière veranderd om een full-stack ontwikkelaar te worden.",
  aboutb: "Download: referentiebrief vorige werkgever.",
  testp1: "Benedikt heeft onder mijn toezicht gewerkt als instructeur en later als hoofdinstructeur. Hij is een zeer gepassioneerde en toegewijde ontwikkelaar. Niet alleen was zijn technische begeleiding voor studenten en instructeurs uitzonderlijk, maar ook zijn ondersteuning voor Intec zelf was van zeer hoge kwaliteit. Vanwege het stopzetten van sommige programma's zal Benedikt ons bedrijf verlaten op 21 augustus 2023, na 4 jaar bij ons te hebben gewerkt. ",
  testp2: "Ik kan hem van harte aanbevelen aan toekomstige werkgevers.",
  testl1: "Directeur van 'Intec Brussel'",

  testp21: "A developer I will never forget.", testp22: "He made complex React code understandable to me.", testp23: "Thanks to his non stop support. Kind and professional. Anytime I needed it. I became a web developer in only 4 months. A lot faster than I thought in my wildest imagination.", testp24: "A big thank you to you, my friend!", testp25: "Web developer at 'Jaimy (Belfius)'  ",
};
const translationsFr = {
  call_me: 'Appelle-moi',
  webd: "Développement Web",
  down: "Télécharger mon CV",
  test: "Références",
  about: "Qui suis-je?",
  code: "Mon code",

  aboutp1: "Pendant les quatre dernières années, j'ai été instructeur en programmation à l'Intec Bruxelles. J'ai évolué d'instructeur à chef instructeur, spécialisé dans le développement web pour les adultes, souvent avec des antécédents en informatique au niveau universitaire. J'ai couvert GIT, HTML, CSS, JavaScript, React, PHP, Laravel et les bases de données.",
  aboutp2: "Je n'ai pas seulement guidé les étudiants dans la résolution d'exercices de débogage, mais j'ai également coaché et motivé, aux côtés de mes collègues instructeurs. De plus, j'ai joué un rôle clé dans la création du site web de l'Intec.",
  aboutp3: "Avant, j'ai travaillé en tant que graphiste pendant plus de 25 ans, apportant un aspect multilingue, avec une maîtrise de la parole et de l'écriture dans quatre langues (NL-FR-EN-ES). Comme j'ai trouvé plus de joie dans la programmation, j'ai changé de carrière en 2017 pour devenir un développeur full stack.",
  aboutb: "Télécharger: lettre de recommendation employeur précédent.",

  testp1: "Benedikt a travaillé sous ma supervision en tant qu'instructeur, puis en tant que chef instructeur. C'est un développeur très passionné et engagé. Non seulement sa guidance technique pour les étudiants et les instructeurs était exceptionnelle, mais son soutien à Intec lui-même était également de très haute qualité. En raison de l'arrêt de certains programmes, Benedikt quittera notre entreprise le 21 août 2023, après avoir travaillé avec nous pendant 4 ans.",
  testp2: "Je peux le recommander sincèrement à tout futur employeur.",
  testl1: "Directeur 'Intec Brussel'",

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
      <About />
      <Jobs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
