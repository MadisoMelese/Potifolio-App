import {
  teamwork,
  gitexplorer,
  madishacodecamp,
  ecommerce,
  bugcvs,
  bu,
  code,
  fiver,
  upwork,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Teamwork IT Solution, Ethiopia",
    icon: teamwork,
    iconBg: "#383E56",
    date: "Oct 2025 - Present",
    points: [
      "Developing a backend system for a different company under Teamwork IT Solution",
      "The Tech stack I'm using is Node JS, Express JS, Nest.js, Django, FastAPI and Laravel",
      "Databases: MongoDB, PostgreSQL, and MySQL",
      "Tools: Docker, Kubernetes, AWS, Azure, CI/CD, Jenkins, Git, and GitHub Actions",
      "The system is used to manage the data of the company and provide different services to the clients",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Bonga University, Ethiopia",
    icon: bu,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2025",
    points: [
      "Developed software system called Graduate Document credentials Verification System for Bonga University",
      "The Tech stack used is React JS, Node JS, MongoDB, and Express JS with Tailwind CSS for styling",
      "The system is used to verify the credentials of the graduates of the university",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "CodeCraft InfoTech, India",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Developed a backend system for a different company under CodeCraft InfoTech",
      "The Tech stack used is Node JS, Express JS, Django, FastAPI and Laravel, and Databases MongoDB, PostgreSQL, and MySQL",
      "The system is used to manage the data of the company and provide different services to the clients",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining Softwares Solutions using Modern JavaScript frameworks like React.js/Next.js, Node.js/Nest.js",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Fiverr",
    icon: fiver,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining websites using React.js + Tailwindcss, Next.js, Nest.js, Node.js, Express.js, Laravel, Django, SQL, MongoDB, PostgreSQL.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Madiso proved me wrong.",
    name: "Nathan Tesfaye",
    designation: "CEO",
    company: "Skat Nati",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Madiso optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bestegew",
    designation: "Dean",
    company: "WH College",
    image: "https://randomuser.me/api/portraits/men/98.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Gelila Jimma",
    designation: "C-F",
    company: "Jimma Coffee",
    image: "https://randomuser.me/api/portraits/women/98.jpg",
  },
];

const projects = [
  {
    name: "Graduate Document Credentials Verification System",
    description:
      "Web-based platform that allows users to search, order, and manage their goods from various providers, providing a convenient and efficient solution for customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bugcvs,
    source_code_link: "https://github.com/MadisoMelese/My-Graduation-project",
    live_demo: "https://bonga-university-graduate-document.onrender.com/",
  },
  {
    name: "Ecommerce App",
    description:
      "Web-based platform that allows users to search, order, and manage their goods from various providers, providing a convenient and efficient solution for customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/MadisoMelese/Ecommerce-App",
    live_demo: "https://ecommerce-app-tlto.onrender.com/",
  },
  {
    name: "My Future Code Lab ",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: madishacodecamp,
    source_code_link: "https://github.com/MadisoMelese/MadioshaCodeLab",
    live_demo: "https://madisomelese.github.io/MadioshaCodeLab/build/",
  },
  {
    name: "Git Explorer",
    description:
      "A git explorer focuses on exploring users from github using github free api also focuses on fetching data from backend and APIs for using time eficeently ",
    tags: [
      {
        name: "React Router",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: gitexplorer,
    source_code_link: "https://github.com/MadisoMelese/React-Router",
    live_demo: "https://github.com/MadisoMelese/React-Router",
  },
];

export { services, technologies, experiences, testimonials, projects };
