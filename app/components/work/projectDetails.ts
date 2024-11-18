// import {
//   SiCplusplus,
//   SiFramer,
//   SiGithub,
//   SiNeovim,
//   SiNextdotjs,
//   SiReact,
//   SiRust,
//   SiTailwindcss,
//   SiTypescript,
//   SiWebgl,
//   SiZig,
// } from "react-icons/si";
// import { IconType } from "react-icons";

// export type ProjectProps = {
//   id: number;
//   name: string;
//   description: string;
//   technologies: IconType[];
//   techNames: string[];
//   techLinks: string[];
//   github: string;
//   demo: string;
//   image: string;
//   available: boolean;
// };

// export const projects = [
//   {
//     id: 0,
//     name: "Eldora UI",
//     description:
//       "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
//     technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
//     techNames: [
//       "TypeScript",
//       "React",
//       "Next.js",
//       "Tailwind CSS",
//       "Framer Motion",
//     ],
//     techLinks: [
//       "https://www.typescriptlang.org/",
//       "https://reactjs.org/",
//       "https://nextjs.org/",
//       "https://tailwindcss.com/",
//       "https://www.framer.com/motion/",
//     ],
//     github: "https://github.com/karthikmudunuri/eldoraui",
//     demo: "https://www.eldoraui.site/",
//     image: "/portfolio/projects/eldoraui.png",
//     available: true,
//   },
//   {
//     id: 1,
//     name: "VR MALL",
//     description: "Developed an virtual mall by using Three.js and Typescript..",
//     technologies: [SiWebgl, SiTypescript, SiReact],
//     techNames: ["WebGL", "Typescript", "React"],
//     techLinks: [
//       "https://get.webgl.org/",
//       "https://www.typescriptlang.org/",
//       "https://reactjs.org/",
//     ],
//     github: "https://github.com/karthikmudunuri/VRMALL",
//     demo: "https://vrmalldemo.netlify.app/",
//     image: "/portfolio/projects/vrmall.png",
//     available: true,
//   },
// ];

import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiMicrosoft,
  SiWebgl,
  SiKotlin,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "Sarthak Support System",
    description:
      "A child support and education planning platform leveraging modern web development tools to manage activities and household surveys.",
    technologies: [SiReact, SiTailwindcss, SiTypescript],
    techNames: ["React", "Tailwind CSS", "TypeScript"],
    techLinks: [
      "https://reactjs.org/",
      "https://tailwindcss.com/",
      "https://www.typescriptlang.org/",
    ],
    github: "https://www.sarthakshiksha.org/",
    demo: "https://www.sarthakshiksha.org/",
    image:
      "https://www.sarthakshiksha.org/wp-content/uploads/2014/10/sarthak_shiksha_logo.png",
    available: true,
  },
  {
    id: 1,
    name: "Census Enumerator",
    description:
      "Acted as an Enumerator for the National Census, collecting demographic data through household visits and surveys. Responsibilities included maintaining accurate records and ensuring confidentiality of citizen data.",
    technologies: [SiMicrosoft],
    techNames: ["Microsoft Excel"],
    techLinks: ["https://www.microsoft.com/excel"],
    github: "",
    demo: "https://censusnepal.cbs.gov.np/",
    image: "/images/Census.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Nirmal Batika Academy",
    description:
      "Served as a primary school teacher, teaching Math, Science, and Computer to grades 3-6. Designed lesson plans, conducted student assessments, and built positive relationships with parents to foster student growth.",
    technologies: [],
    techNames: [],
    techLinks: [],
    github: "https://nirmalbatika.edu.np/",
    demo: "https://nirmalbatika.edu.np/",
    image: "https://nirmalbatika.edu.np/img/banner2.jpg",
    available: true,
  },
];
