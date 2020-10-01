import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bhagya portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is',
  name: 'Bhagyalakshmi Kavati',
  subtitle: 'I am looking for Entry Level Front End Devloper opportunities',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Enthusiastic, dedicated and result oriented computer science engineer, Seeking the position for an entry level Front End/UI/Web developer opportunities to apply the knowledge, build web applications, learn new skills and grow along with organization.',
  paragraphTwo: 'Around 2 years of experience in developing interactive, responsive, single page and accessible rich user interface web applications with attention to details and cross browser support using HTML5, JavaScript, ReactJS and Angular.',
  paragraphThree: 'Proficient in Web Development, Algorithms and Data Structures, Agile Development and Software Development. Highly organized and motivated individual with strong communication and interpersonal skills.',
  resume: 'https://github.com/kavatibhagya/portfolio/blob/master/src/mock/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'upwork.png',
    title: 'Front End Developer - Freelance - Upwork - San Jose, CA',
    info: 'Worked on multiple projects to develop the web pages from the scratch to customizing the existing pages and fixing the issues according to the contracts.',
    info2: 'gogetemsports.com is an e-commerce website for sports gear, fitness clothing and electronic products. Developed a react form to collect the user input along with the validation and posted data back to the server. Implemented the advanced filters and search components for the various products with different criterias. Updated the navigation menu, landing page grid view and sub menu styles with the latest styles using Bootstrap. Modified the product description page to show the tags for various attributes and also to show the similar, also purchased and recommended products using the tag and carousel component.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cloudchip.jpeg',
    title: 'UI Developer Intern - Cloudchip Technologies - Hyderabad, India',
    info: 'Cloudchip provides a ready to use scalable IoT cloud infrastructure for connecting the Internet of Things. Developed complete user management, attendance and performance tracking system from the UI perspective. Closely worked with business system analysts to understand the requirements to ensure that the right set of UI modules were built.',
    info2: 'Utilized HTML5, CSS, JavaScript, JQuery, and AJAX to create a user login system that allowed customers to login. Developed the complete layout of the pages of websites using CSS for multiple browsers. Developed a single page, mobile-first, cross-device web application for real-time location sharing utilizing AngularJS, JavaScript API. Created AngularJS controllers, services and used AngularJS filters for filter functionality in the search box. Utilized AngularJS inbuilt directives and also used custom directives for the ones that are not available. Worked closely with the SQA team in fixing the reported bugs/defects and checking cross platform compatibility. Technologies: HTML5, JavaScript, CSS3, AngularJS, Bootstrap, jQuery, AJAX, Java and JSON',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'geeqkwiz.jpg',
    title: 'Front End Quiz web app',
    info: 'This is a technical quiz app which has different categories to select and present with a set of questions and multiple choices. After the test completion score card will be shown to the user with the results sections wise.',
    info2: 'Currently it is a work in progress state. Planning to complete and launch it soon in a straight domain.',
    url: 'https://geeqkwiz.web.app/',
    repo: 'https://github.com/kavatibhagya/geeqkwiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'random.png',
    title: 'Random users',
    info: 'This is a simple ReactJS responsive web page to show the random users and filter based on the gender',
    info2: 'I did this basically to play around with React hooks like useState and useEffect',
    url: 'https://2r4sy.csb.app/',
    repo: 'https://github.com/kavatibhagya/react-random-user', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github.jpeg',
    title: 'Github users',
    info: 'This is a another simple responsive web page to showcase the random github users',
    url: 'https://gitrandomusers.now.sh/',
    repo: 'https://github.com/kavatibhagya/github-users', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mahadev.png',
    title: 'Mahadev Dental',
    info: 'This is a dental hospital website. Which showcase the Services, Contact and History details of the hospital. And also it gives the testimonials of visited patients, Treatments and other offers.',
    url: 'http://mahadevdental.herokuapp.com/',
    repo: 'https://github.com/kavatibhagya/mahadevdental', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'madikonda.jpeg',
    title: 'Madikonda',
    info: 'This is a static website of my hometown. Which showcases latest updates happening in town, history and other news articles.',
    url: 'http://madikonda.herokuapp.com/',
    repo: 'https://github.com/kavatibhagya/madikonda', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to learn more about me?',
  btn: 'Email me',
  email: 'bhagyalakshmi.kavati@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kavatibhagya/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kavatibhagya',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
