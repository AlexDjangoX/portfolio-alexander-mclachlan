import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  redux,
  tailwind,
  nodejs,
  nextjs,
  git,
  boolean,
  samye,
  estio,
  molecule,
  notes,
  conjugate,
  landing,
  crypto,
  threejs,
  UI_ECDSA,
  framerMotion,
  blogLight,
  blogDark,
} from '../assets/index';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projects',
  },

  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'ReactJS NextJs Full Stack Developer',
    icon: web,
  },
  {
    title: 'Blockchain, Crypto, SolidityJS',
    icon: mobile,
  },
  {
    title: 'Ethereum Cryptography',
    icon: backend,
  },
  {
    title: 'Teacher Advanced Meditation',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Graduate / Freelancer',
    company_name: 'Boolean UK',
    icon: boolean,
    iconBg: '#fff',
    date: 'February 2022 - present',
    points: [
      'A full-time 6-month coding academy focusing on full-stack development.',
      'Learned how to turn user requirements into quality software. This included a 4 week team development project.',
      'Practiced Kanban and agile with stand-ups and retros as well as best practice around branching, merge conflicts, and pull requests.',
      'Tech stack: React, NextJS, ChakraUI, MaterialUI, Tailwind, Framer Motion , Node, Express, PostgreSQL, Prisma.',
      'Developing Proprietary Software Solutions for a Polish Language School * Private repo *',
    ],
  },
  {
    title: 'Clinical Lead',
    company_name: 'Estio Healthcare',
    icon: estio,
    iconBg: '#fff',
    date: 'March 2015 - present',
    points: [
      'Complex Clinical Lead - Spinal Injury.',
      'Worked mainly in Domiciliary Care, but also secure units, and disability care homes.',
      'Completed NVQ3 with distinction.',
    ],
  },
  {
    title: 'Buddhist Monk',
    company_name: 'Samye Ling Scotland',
    icon: samye,
    iconBg: '#fff',
    date: 'February 2003 - February 2015',
    points: [
      'Participated in a four-year cloistered retreat.',
      'After being awarded a Contemplative Scholarship from Tsadra Foundation, participated in a second four-year retreat.',
      'Taught Advanced Medication practices from the Tibetan Buddhist Tradition.',
    ],
  },

  {
    title: 'Analytical Chemist',
    company_name: 'SA Chemistry Industry',
    icon: molecule,
    iconBg: '#fff',
    date: 'Jan 1989 - Jan 2003',
    points: [
      'Graduated from Technikon Witwatersrand with NHD Chemistry.',
      'Worked in various settings within the South African Chemical industry.',
      'Specialised in Mining and Metals, all aspects of laboratory management.',
      'Managed a small business which manufactured lubricants and detergents.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Blogging Website',
    image: '../assets/blogDark.png',
    description: 'Blog dark mode',
    tags: [
      {
        name: 'NextJS 13.4',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: blogDark,
    repo: 'Live link',
    source_code_link: 'https://polish-tutor-online-blog.vercel.app/',
    gitHubRepo: '',
  },
  {
    name: 'Blogging Website',
    image: '../assets/blogLight.png',
    description: 'Blog light mode',
    tags: [
      {
        name: 'NextJS 13.4',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: blogLight,
    repo: 'Live link',
    source_code_link: 'https://polish-tutor-online-blog.vercel.app/',
    gitHubRepo: '',
  },
  {
    name: 'Drag-and-drop conjugation tool',
    image: '../assets/conjugate.png',
    description: 'Interactive verb conjugation playground',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'node/prisma',
        color: 'pink-text-gradient',
      },
    ],
    image: conjugate,
    repo: 'Live link',
    source_code_link: 'https://conjugate-server.vercel.app/',
    gitHubRepo: '',
  },
  {
    name: 'Framer Motion ',
    image: '../assets/framerMotion.png',
    description: 'Framer Motion animations website',
    tags: [
      {
        name: 'react/vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: framerMotion,
    repo: 'Live link',
    source_code_link: 'https://framer-motion-tailwind.vercel.app/',
    gitHubRepo: '',
  },
  {
    name: 'Universal Crypto ',
    image: '../assets/crypto.png',
    description: 'With Metamask browser plugin, send Crypto Universally',
    tags: [
      {
        name: 'react/solidity',
        color: 'blue-text-gradient',
      },
      {
        name: 'ethereum waffle/ethers',
        color: 'green-text-gradient',
      },
      {
        name: 'hardhat',
        color: 'pink-text-gradient',
      },
    ],
    image: crypto,
    repo: 'Live link',
    source_code_link: 'https://blockchain-five-khaki.vercel.app/',
    gitHubRepo: '',
  },
  {
    name: 'ECDSA Node',
    image: '../assets/UI_ECDSA.jpg',
    description: 'Uses Public Key Cryptography to securely transfer funds.',
    tags: [
      {
        name: 'ethereum-cryptography',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: UI_ECDSA,
    repo: 'Repo',
    source_code_link: 'https://github.com/AlexDjangoX/alchemy-ECDSA-node',
  },
];

export { services, technologies, experiences, testimonials, projects };
