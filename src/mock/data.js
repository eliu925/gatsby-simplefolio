import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Erica Liu | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello! Welcome to Erica Liu&apos;s website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1nTtGp1FJ3m77FbJAHsH1cqkq72m5ffyk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cookstarslogo.png',
    title: 'Cookstars',
    info:
      'A mobile recipe application built on React Native utilizing the Expo framework, Firebase, Spoonacular API.',
    info2:
      'For our final project, we wanted to challenge ourselves by creating a mobile application using technologies we&apos;ve never used before. I designed and implemented multiple screens, aiming to give users a fun and seamless experience.',
    info3:
      'I designed and implemented multiple screens, aiming to give users a fun and seamless experience. I also worked on Firebase scheduling and pulling data from our Spoonacular API. ',
    url: 'https://www.youtube.com/watch?v=rRqkGQzqI6w',
    repo: 'https://github.com/CookStars/cookstarsapp', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: '',
    title: 'Bubble Destroyer',
    info: '',
    info2:
      'During the 3-day hackathon, I helped design the game environment and implemented game controls and key mechanics of the original game such as collision between different object groups.',
    url: '',
    repo: 'https://github.com/Team-Bubble-Destroyers/BubbleDestroyer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GameShopper.png',
    title: 'GameShopper',
    info: 'An e-commerce website created with React, Redux, Express and Sequelize.',
    info2:
      'The first web application I ever created. I worked alongside 3 other developers and we utilized the technologies we learned to create a website from scratch. GameShopper allows users to browse through the selection of boardgames and cardgames. Users can also add multiple items to their cart.',
    info3:
      'Through pair programming, I worked on designing and implementing the shopping cart functions, routing, and testing.  ',
    url: '',
    repo: 'https://github.com/wdf-2004-grace-shopper-team-h/grace-shopper', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me!',
  email: 'eliu925@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ericaliu17/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/eliu925',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:eliu925@gmail.com',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@ericaliu93',
    },
  ],
};
