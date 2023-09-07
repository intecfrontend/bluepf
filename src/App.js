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
  english: "English",
  dutch: "Nederlands",
  french: "Français",
  aboutp1: "Over the past four years, I was a Code Instructor at intec Brussel. I transitioned from an Instructor to Head Instructor, specializing in web development for adults, often with university - level IT backgrounds.I covered GIT, HTML, CSS, JavaScript, React, PHP, Laravel, and Databases.",
  aboutp2: " I not only guided students in debugging exercises but also coached and motivated them, along with fellow instructors. Additionally, I played a pivotal role in establishing the Intec website.",
  aboutp3: "Before, I worked as a graphic designer for over 25 years, bringing a multilingual aspect, with fluency in speaking and writing four languages (NL-FR-EN-ES). As I found more joy in coding, I changed my career in 2017 to become a full-stack developer.",
  aboutb: "Download: reference letter previous employer.",

  testp1: "Benedikt worked under my supervision as an Instructor and later as Head Instructor. He is a highly passionate and committed developer. Not only was his technical guidance for students and instructors exceptional, but his support for Intec itself was also of a very high standard. Due to the discontinuation of some programs, Benedikt will be leaving our company on August 21, 2023 after having worked with us for 4 years. ",
  testp2: "I can wholeheartedly recommend him to any future employer.",
  testl1: "Director of 'Intec Brussel'",


  testp21: "A developer I will never forget.", testp22: "He made complex React code understandable to me.", testp23: "Thanks to his non stop support. Kind and professional. Anytime I needed it. I became a web developer in only 4 months. A lot faster than I thought in my wildest imagination.", testp24: "A big thank you to you, my friend!", testp25: "Web developer at 'Jaimy (Belfius)'  ",

  testp31: "A developer I will never forget.",
  testp32: "He made complex React code understandable to me.",
  testp33: "Thanks to his non stop support. Kind and professional. Anytime I needed it. I became a web developer in only 4 months. A lot faster than I thought in my wildest imagination.",
  testp34: "A big thank you to you, my friend!",
  testp35: "Web developer at Jamy (Belfius)",

  testp41: "I owe my developers career to Benedikt!",
  testp42: "If it weren't for his passion for coding, I wouldn't be a developer. ",
  testp43: " He supported me through some challenging times and gave me the confidence I needed during a critical moment in my life!",
  testp44: " Javascript Developer at WorldLine",
  testp45: "Youtube Code instructor, KodMan",

  adresstr: "Soldatenstraat 63",
  adresci: "Brussel (Sint Agatha Berchem)",

  find: "Find me on Linkedin",

  jobs1: "About This Site",
  jobs2: "Please, click on the GitHub Logo (cat) ", jobs22: "to see the code of this site.",
  jobs3: "Special attention has been given to have a reusable code by exploiting the use of components and OOP to the fullest.",
  jobs4: "I hope you saw the animations and Internationalisation as well as the Intersection Observer. Fully responsive to suit all screen sizes.",
  jobs5: "In all modesty, I believe all modern sites should have these assets.",
  jobs6: "More info",

  Modal1: "Amazon cloning excercise",
  Modal2: "One of the many excercises I demanded but this one is connected to a ",
  // Modal3: "'Firebase database'",
  Modal4: "to log in. It also uses ",
  Modal6: " to provide better accessability.",

  Modala1: "My Laravel Learning",
  Modala2: "Being a web developer, I realise, it is ",
  Modala3: "a life of learning.",
  Modala4: " Squash and coding, those are my favorite pasttime.",
};
const translationsDu = {
  call_me: 'Bel me!',
  webd: "Web Development",
  down: "Download CV",
  test: "Referenties",
  about: "Over mijzelf",
  code: "Mijn code",
  english: "English",
  french: "Français",
  dutch: "Nederlands",
  aboutp1: "De afgelopen vier jaar was ik Code-instructeur bij intec Brussel. Ik ben overgegaan van instructeur naar Hoofdinstructeur, gespecialiseerd in webontwikkeling voor volwassenen, vaak met een IT-achtergrond op universitair niveau. Ik behandelde GIT, HTML, CSS, JavaScript, React, PHP, Laravel en databases.",
  aboutp2: " Ik heb niet alleen studenten begeleid bij het oplossen van oefeningen, maar ook gecoacht en gemotiveerd, samen met mede-instructeurs. Daarnaast speelde ik een cruciale rol bij het opzetten van de Intec-website.",
  aboutp3: "Voorheen werkte ik meer dan 25 jaar als grafisch ontwerper, met een multilingual aspect, waarbij ik vloeiend vier talen (NL-FR-EN-ES) sprak en schreef. Omdat ik meer plezier vond in coderen, heb ik in 2017 mijn carrière veranderd om een full-stack ontwikkelaar te worden.",
  aboutb: "Download: referentiebrief vorige werkgever.",
  testp1: "Benedikt heeft onder mijn toezicht gewerkt als instructeur en later als hoofdinstructeur. Hij is een zeer gepassioneerde en toegewijde ontwikkelaar. Niet alleen was zijn technische begeleiding voor studenten en instructeurs uitzonderlijk, maar ook zijn ondersteuning voor Intec zelf was van zeer hoge kwaliteit. Vanwege het stopzetten van sommige programma's zal Benedikt ons bedrijf verlaten op 21 augustus 2023, na 4 jaar bij ons te hebben gewerkt. ",
  testp2: "Ik kan hem van harte aanbevelen aan toekomstige werkgevers.",
  testl1: "Directeur van 'Intec Brussel'",

  testp31: "Een ontwikkelaar die ik nooit zal vergeten.",
  testp32: "Hij maakte complexe React-code begrijpelijk voor mij.",
  testp33: "Dankzij zijn constante ondersteuning. Vriendelijk en professioneel. Telkens wanneer ik het nodig had. Ben ik in slechts 4 maanden een webontwikkelaar geworden. Veel sneller dan ik me had voorgesteld in mijn wildste verbeelding.",
  testp34: "Een grote dank aan jou, mijn vriend!",
  testp35: "Webontwikkelaar bij Jamy (Belfius)",

  testp41: "Ik dank mijn carrière als ontwikkelaar aan Benedikt!",
  testp42: "Als het niet was geweest voor zijn passie voor code, zou ik geen ontwikkelaar zijn.",
  testp43: "Hij heeft me ondersteund tijdens moeilijke momenten en heeft me het vertrouwen gegeven dat ik nodig had tijdens een kritiek moment in mijn leven.",
  testp44: "Javascript Ontwikkelaar bij WorldLine",
  testp45: "Youtube Code-instructeur, KodMan",

  adresstr: "Soldatenstraat 63",
  adresci: "Brussel (Sint Agatha Berchem)",

  find: "Linkedin-Profiel",

  jobs1: "Over deze site",
  jobs2: "Klik op het GitHub-logo (kat) ", jobs22: "om de code van deze site te bekijken.",
  jobs3: "Er is speciale aandacht besteed aan het hebben van herbruikbare code door optimaal gebruik te maken van componenten en OOP.",
  jobs4: "Ik hoop dat je de animaties, 'Internationalisatie' en de 'Intersection Observer' hebt gezien. Volledig responsief om op alle schermformaten te passen.",
  jobs5: "",
  jobs6: "Meer informatie",

  Modal1: "Amazon kloon oefening",
  Modal2: "Een van de vele oefeningen die ik heb gedaan, maar deze is gekoppeld aan",
  Modal4: "om in te loggen. Het maakt ook gebruik van ",
  Modal6: " voor een betere toegankelijkheid.",

  Modala1: "Mijn Laravel-leren",
  Modala2: "Als webontwikkelaar realiseer ik me dat het ",
  Modala3: "een leven van leren is. ",
  Modala4: "Squashen en coderen, dat zijn mijn favoriete bezigheden.",

};
const translationsFr = {
  call_me: 'Appelle-moi',
  webd: "Développement Web",
  down: "Télécharger mon CV",
  test: "Références",
  about: "Qui suis-je?",
  code: "Mon code",
  english: "English",
  dutch: "Nederlands",
  french: "Français",
  aboutp1: "Pendant les quatre dernières années, j'ai été instructeur en programmation à l'Intec Bruxelles. J'ai évolué d'instructeur à chef instructeur, spécialisé dans le développement web pour les adultes, souvent avec des antécédents en informatique au niveau universitaire. J'ai couvert GIT, HTML, CSS, JavaScript, React, PHP, Laravel et les bases de données.",
  aboutp2: "Je n'ai pas seulement guidé les étudiants dans la résolution d'exercices de débogage, mais j'ai également coaché et motivé, aux côtés de mes collègues instructeurs. De plus, j'ai joué un rôle clé dans la création du site web de l'Intec.",
  aboutp3: "Avant, j'ai travaillé en tant que graphiste pendant plus de 25 ans, apportant un aspect multilingue, avec une maîtrise de la parole et de l'écriture dans quatre langues (NL-FR-EN-ES). Comme j'ai trouvé plus de joie dans la programmation, j'ai changé de carrière en 2017 pour devenir un développeur full stack.",
  aboutb: "Télécharger: lettre de recommendation employeur précédent.",
  testp1: "Benedikt a travaillé sous ma supervision en tant qu'instructeur, puis en tant que chef instructeur. C'est un développeur très passionné et engagé. Non seulement sa guidance technique pour les étudiants et les instructeurs était exceptionnelle, mais son soutien à Intec lui-même était également de très haute qualité. En raison de l'arrêt de certains programmes, Benedikt quittera notre entreprise le 21 août 2023, après avoir travaillé avec nous pendant 4 ans. ",
  testp2: "Je peux le recommander sincèrement à tout futur employeur.",
  testl1: "Directeur 'Intec Brussel'",
  testp31: "Un développeur que je n'oublierai jamais.",
  testp32: "Il a rendu le code React complexe compréhensible pour moi.",
  testp33: "Grâce à son soutien constant. Aimable et professionnel. Chaque fois que j'en avais besoin. Je suis devenu développeur web en seulement 4 mois. Beaucoup plus rapidement que je ne l'aurais imaginé dans mes rêves les plus fous.",
  testp34: "Un grand merci à toi, mon ami !",
  testp35: "Développeur web chez Jamy (Belfius)",

  testp41: "Je dois ma carrière de développeur à Benedikt !",
  testp42: "Si ce n'était pas pour sa passion pour la programmation, je ne serais pas développeur.",
  testp43: "Il m'a soutenu à travers des moments difficiles et m'a donné la confiance dont j'avais besoin lors d'un moment critique de ma vie !",
  testp44: "Développeur Javascript chez WorldLine",
  testp45: "Instructeur de Code sur Youtube, KodMan",

  adresstr: "63 Rue des Soldats",
  adresci: "Bruxelles (Berchem Sainte Agathe)",

  find: "Profile Linkedin",

  jobs1: "À propos de ce site",
  jobs2: "Veuillez cliquer sur le logo GitHub(chat) ", jobs22: "pour voir le code de ce site.",
  jobs3: "Une attention particulière a été accordée à la création d'un code réutilisable en exploitant au maximum l'utilisation de composants et de la programmation orientée objet(OOP).",
  jobs4: "J'espère que vous avez vu les animations et l'internationalisation ainsi que 'l'Intersection Observer' .Entièrement responsive pour s'adapter à toutes les tailles d'écran.",
  jobs5: "",
  jobs6: "Plus d'informations",

  Modal1: "Exercice de clonage d'Amazon",
  Modal2: "L'un des nombreux exercices que j'ai demandés, mais celui-ci est lié à",
  Modal4: "pour se connecter. Il utilise également ",
  Modal6: "pour une meilleure accessibilité.",

  Modala1: "Mon apprentissage de Laravel",
  Modala2: "En tant que développeur web, je réalise que c'est ",
  Modala3: "une vie d'apprentissage. ",
  Modala4: "Le squash et la programmation, ce sont mes passe-temps préférés.",
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
