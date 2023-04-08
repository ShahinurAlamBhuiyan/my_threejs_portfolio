import {
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
  threejs,
  git,
  figma,
  material,
  docker,
  meta,
  starbucks,
  bdemr,
  uiu,
  tesla,
  shopify,
  esheba,
  dressHouse,
  memories,
  cplusplus,
  java,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "C++",
    icon: cplusplus,
    link: "https://www.w3schools.com/cpp/cpp_intro.asp"
  },
  {
    name: "Java",
    icon: java,
    link: "https://www.java.com/en/"
  },
  {
    name: "TypeScript",
    icon: typescript,
    link: "https://www.typescriptlang.org/"
  },
  {
    name: "React JS",
    icon: reactjs,
    link: "https://react.dev/"
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    link: "https://redux-toolkit.js.org/"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    link: "https://tailwindcss.com/"
  },
  {
    name: "Material-UI",
    icon: material,
    link: "https://mui.com/"
  },
  {
    name: "Node JS",
    icon: nodejs,
    link: "https://nodejs.org/en"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    link: "https://www.mongodb.com/atlas/database"
  },
  {
    name: "Three JS",
    icon: threejs,
    link: "https://threejs.org/"
  },
  {
    name: "git",
    icon: git,
    link: "https://github.com/"
  },
  {
    name: "figma",
    icon: figma,
    link: "https://www.figma.com/"
  },

];

const experiences = [
  {
    title: "React.js Developer (Internship)",
    company_name: "BDEMR Solutions Corp.",
    company_link: "https://bdemr.com/",
    icon: bdemr,
    iconBg: "#383E56",
    date: "Sep 2021 - Nov 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Application Developer",
    company_name: "University Team Project (UIU)",
    company_link: "https://www.uiu.ac.bd/",
    icon: uiu,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Developing and maintaining  applications using Java and other related technologies.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Sheba",
    description:
      "Full-Stack Service website with connect service provider and consumer. Consumer can get services by booking. Individual dashboard for every type of user. Admin will monitor every booked and approved all booking request.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "text-lime-500",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "firebase-authentication",
        color: "text-orange-400",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      }
    ],
    image: esheba,
    git_source_code_link: "https://github.com/ShahinurAlamBhuiyan/e-sheba-client",
    live_link: "https://e-sheba24.web.app/"
  },
  {
    name: "Dress-house 24",
    description:
      "Full-Stack Service website where user can order available services.Specially secured Admin Panel & User Panel. Only Admin can add another admin, add any service & also manage services.User can add review which showing dynamically",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe-payment",
        color: "text-violet-700",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "firebase-auth",
        color: "text-yellow-700",
      },
      {
        name: "nodemon",
        color: "text-teal-700",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: dressHouse,
    git_source_code_link: "https://github.com/ShahinurAlamBhuiyan/dress-house24-client",
    live_link: "https://dress-house24.web.app/"
  },
  {
    name: "Memories",
    description:
      "Front-end website. Through this website, a user can share his/her memories and also can like, comment on another user’s post. for that, user must create an account first. Users can search any memories with titles or tags.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "text-yellow-700",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "custom-authentication",
        color: "text-orange-400",
      },
      {
        name: "base-64",
        color: "text-teal-500",
      },
    ],
    image: memories,
    git_source_code_link: "https://github.com/ShahinurAlamBhuiyan/memories-client",
    live_link: "https://memories-sh.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };