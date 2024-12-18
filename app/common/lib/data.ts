// import React from 'react';

// import campwithusImg from '@/../public/images/camp-with-us.png';
// import carcatalogImg from '@/../public/images/car-catalog.png';
// import filedriveImg from '@/../public/images/file-drive.png';
// import projectmanagementImg from '@/../public/images/project-management.png';
// import reactfoodImg from '@/../public/images/react-food.png';
// import surgeImg from '@/../public/images/surge.png';
// import portfolioImg from '@/../public/images/portfolio.png';
// import auditMasterImg from '@/../public/images/audit-master.png';
// import {
//   BookIcon,
//   BriefcaseBusinessIcon,
//   LaptopMinimalIcon,
// } from 'lucide-react';

// export const links = [
//   {
//     name: 'Home',
//     id: 'home',
//   },
//   {
//     name: 'About',
//     id: 'about',
//   },
//   {
//     name: 'Projects',
//     id: 'projects',
//   },
//   {
//     name: 'Experience',
//     id: 'experience',
//   },
//   {
//     name: 'Skills',
//     id: 'skills',
//   },
//   {
//     name: 'Contact',
//     id: 'contact',
//   },
// ] as const;

// export const experiencesData = [
//   {
//     title: 'WhirrCrew',
//     location: 'Prague, Czechia',
//     description: `Front-end Web Develpoer position. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration. `,
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Jun 2024 - Present',
//   },
//   {
//     title: 'NAU',
//     location: 'Kyiv, Ukraine',
//     description: `Bachelor's degree in Cybersecurity. Studying on the faculty of Cyber Security and Software Engineering.`,
//     icon: React.createElement(BookIcon),
//     date: 'Sep 2022 - Present',
//   },
//   {
//     title: 'Self-studying',
//     location: 'Czechia',
//     description: `Digging into Programming, Software Engineering and Web Development, picking up a great expertise in TypeScript, React, Next.js, Node.js, and database technologies (MongoDB/PostgreSQL/MySQL) utilizing Prisma for efficient data access.`,
//     icon: React.createElement(LaptopMinimalIcon),
//     date: 'Jul 2022 - Present',
//   },
// ] as const;

// export const images = {
//   campwithusImg,
//   carcatalogImg,
//   filedriveImg,
//   projectmanagementImg,
//   reactfoodImg,
// };

// export const projectsData = [
//   {
//     title: 'FileDrive',
//     description:
//       'A platform for decentralized file storage with robust user management.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Convex',
//       'Clerk',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: filedriveImg,
//     link: 'https://github.com/bbyc4kes/file-drive',
//   },
//   {
//     title: 'Portfolio',
//     description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Framer Motion',
//       'Cloudinary',
//       'React Email',
//       'Tailwind',
//     ],
//     imageUrl: portfolioImg,
//     link: 'https://github.com/bbyc4kes/portfolio',
//   },
//   {
//     title: 'Audit Master',
//     description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, and Due Diligence.`,
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Tailwind',
//       'OpenAI',
//       'SCRUM Methodology',
//       'End-to-End Development',
//     ],
//     imageUrl: auditMasterImg,
//     link: 'https://auditmaster.ai/',
//   },
//   {
//     title: 'Surge',
//     description:
//       'Welcome Surge! A SaaS Website Builder - service that allows users to build and manage their own websites with integrated payment processing.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'MySQL',
//       'Clerk',
//       'Stripe Connect',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: surgeImg,
//     link: 'https://github.com/bbyc4kes/surge',
//   },
//   {
//     title: 'CampWithUs',
//     description:
//       'A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.',
//     tags: ['JavaScript', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
//     imageUrl: campwithusImg,
//     link: 'https://github.com/bbyc4kes/campwithus',
//   },
// ] as const;

// export const skillsData = [
//   ['JavaScript', '/svgs/javascript-js.svg'],
//   ['TypeScript', '/svgs/typescript-icon.svg'],
//   ['React', '/svgs/react.svg'],
//   ['Next.js', '/svgs/nextjs.svg'],
//   ['Node.js', '/svgs/node-js.svg'],
//   ['Express', '/svgs/express-original.svg'],
//   ['Tailwind', '/svgs/tailwind-css.svg'],
//   ['Framer', '/svgs/framer.svg'],
//   ['Shadcn', '/svgs/shadcnui.svg'],
//   ['Headless', '/svgs/brand-headlessui.svg'],
//   ['Redux', '/svgs/redux-original.svg'],
//   ['Prisma', '/svgs/file-type-light-prisma.svg'],
//   ['MongoDB', '/svgs/mongodb-original.svg'],
//   ['PostgreSQL', '/svgs/postgresql.svg'],
//   ['MySQL', '/svgs/MySQL.svg'],
//   ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
//   ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
//   ['Cloudinary', '/svgs/cloudinary.svg'],
//   ['Docker', '/svgs/Docker.svg'],
//   ['Clerk', '/svgs/clerk.svg'],
//   ['Axios', '/svgs/axios.svg'],
//   ['HTML', '/svgs/file-type-html.svg'],
//   ['CSS', '/svgs/file-type-css.svg'],
//   ['Sass', '/svgs/Sass.svg'],
//   ['Git', '/svgs/git.svg'],
//   ['GitHub', '/svgs/github.svg'],
//   ['', '/svgs/etc.svg'],
// ] as const;

import React from "react";
import { BookIcon, BriefcaseIcon, SchoolIcon } from "lucide-react";

export const links = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Contact",
    id: "contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Primary School Teacher",
    location: "Nirmal Batika Academy, Tokha, Kathmandu",
    description: `Taught 3rd to 6th-grade students Math, Science, and Computer subjects. Conducted assessments and built strong relationships with parents to enhance the educational process.`,
    icon: React.createElement(BriefcaseIcon),
    date: "July 2019 - October 2021",
  },
  {
    title: "Enumerator",
    location: "National Census, Kathmandu",
    description: `Visited citizens at their homes to collect demographic data and completed survey sheets to gather census information.`,
    icon: React.createElement(BriefcaseIcon),
    date: "October 2021 - November 2021",
  },
  {
    title: "Facilitator",
    location: "Sarthak Shiksha, Lalitpur",
    description: `Planned child support activities, explored alternative teaching methods, conducted parent-teacher meetings, and prepared weekly activity sets.`,
    icon: React.createElement(BriefcaseIcon),
    date: "July 2022 - March 2023",
  },
] as const;

export const educationData = [
  {
    institution: "Bhanubhakta Memorial Higher Secondary School",
    qualification: "SLC",
    date: "April 2009 - March 2014",
    icon: React.createElement(SchoolIcon),
  },
  {
    institution: "Trinity International College",
    qualification: "+2 Science",
    date: "July 2014 - September 2016",
    icon: React.createElement(SchoolIcon),
  },
  {
    institution: "Padma Kanya Multiple Campus",
    qualification: `B.A in Psychology & Social Work`,
    date: "September 2018 - January 2023",
    icon: React.createElement(BookIcon),
  },
  {
    institution: "Padma Kanya Multiple Campus",
    qualification: `M.A in Psychology`,
    date: "February 2023 - Present",
    icon: React.createElement(BookIcon),
  },
] as const;

export const skillsData = [
  ["Organizational Skills", "/svgs/organizational.svg"],
  ["Microsoft Word & Excel", "/svgs/microsoft-excel.svg"],
  ["Kobo Toolbox", "/svgs/kobo.svg"],
  ["Time Management", "/svgs/time-management.svg"],
  ["Communication", "/svgs/communication.svg"],
];
