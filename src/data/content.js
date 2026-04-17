import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiJavascript
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

export const siteData = {
  name: "Md. Tanjirul Islam",
  title: "Fresh Graduate Developer",
  shortIntro:
    "Fresh graduate developer passionate about full-stack web development, clean coding practices, and building user-friendly applications.",
  heroBadge: "Fresh Graduate Developer",
  heroRoleLine: "Learning and Building Modern Web Solutions",
  heroChips: ["Fast Learner", "Problem Solver", "Open to Opportunities"],
  about:
    "I am a fresh graduate with a strong interest in software development. I enjoy building web applications with the MERN/LAMP stack, improving my skills through real projects, and writing clean, maintainable code.",
  cvLink: "https://tanjirul-islam.netlify.app/assets/Md_Tanjirul_Islam.pdf",
  contact: {
    email: "tanjil.islam040820@gmail.com",
    phone: "01612757513",
    location: "Dhaka, Bangladesh"
  },
  socials: {
    github: "https://github.com/tanjil-islam",
    linkedin: "https://www.linkedin.com/in/md-tanjirul-islam-162a771b2/",
    codeforces: "https://codeforces.com/profile/Tanjirul16",
    youtube: "https://www.youtube.com/@anwardev"
  }
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Web Development",
    description:
      "Design and build reliable web applications with clean architecture and maintainable code."
  },
  {
    title: "UI/UX Designing",
    description:
      "Craft clear, user-focused interfaces with strong hierarchy, responsive behavior, and accessibility-first decisions."
  },
  {
    title: "App Development",
    description:
      "Develop scalable cross-platform app experiences with production-ready engineering standards."
  }
];

export const skills = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PHP", icon: SiPhp },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript }
];

export const skillStats = [
  { value: "8+", label: "Core Technologies" },
  { value: "12+", label: "Projects Built" },
  { value: "5+", label: "Backend Tools" },
  { value: "4+", label: "Databases" }
];

export const skillGroups = [
  {
    title: "Languages",
    subtitle: "Core programming languages for problem-solving and application development",
    items: [
      { name: "JavaScript", level: 88, proficiency: "Advanced", years: "2 years" },
      { name: "TypeScript", level: 72, proficiency: "Intermediate", years: "1 year" },
      { name: "Python", level: 70, proficiency: "Intermediate", years: "1 year" },
      { name: "PHP", level: 76, proficiency: "Intermediate", years: "1+ years" },
      { name: "C++", level: 74, proficiency: "Intermediate", years: "2+ years" },
      { name: "C", level: 68, proficiency: "Intermediate", years: "1+ years" }
    ]
  },
  {
    title: "Frontend",
    subtitle: "Modern frontend tools for responsive and user-focused interfaces",
    items: [
      { name: "React", level: 84, proficiency: "Advanced", years: "1+ years" },
      { name: "HTML5", level: 90, proficiency: "Advanced", years: "2+ years" },
      { name: "CSS3", level: 86, proficiency: "Advanced", years: "2+ years" },
      { name: "Tailwind CSS", level: 82, proficiency: "Advanced", years: "1+ years" }
    ]
  },
  {
    title: "Backend",
    subtitle: "Server-side technologies for APIs, data flow, and scalable services",
    items: [
      { name: "Node.js", level: 80, proficiency: "Advanced", years: "1+ years" },
      { name: "Express.js", level: 82, proficiency: "Advanced", years: "1+ years" },
      { name: "NestJS", level: 68, proficiency: "Intermediate", years: "1 year" },
      { name: "REST APIs", level: 84, proficiency: "Advanced", years: "1+ years" }
    ]
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Deployment and infrastructure skills for reliable production workflows",
    items: [
      { name: "Git & GitHub", level: 85, proficiency: "Advanced", years: "2+ years" },
      { name: "Linux CLI", level: 76, proficiency: "Intermediate", years: "1+ years" },
      { name: "Netlify", level: 82, proficiency: "Advanced", years: "1+ years" },
      { name: "Vercel", level: 78, proficiency: "Intermediate", years: "1+ years" }
    ]
  },
  {
    title: "Databases",
    subtitle: "Data storage technologies for web applications and backend services",
    items: [
      { name: "MongoDB", level: 80, proficiency: "Advanced", years: "1+ years" },
      { name: "MySQL", level: 84, proficiency: "Advanced", years: "2+ years" },
      { name: "PostgreSQL", level: 72, proficiency: "Intermediate", years: "1 year" },
      { name: "Firebase", level: 70, proficiency: "Intermediate", years: "1 year" }
    ]
  }
];

export const projects = [
  {
    title: "Online Store Management",
    summary:
      "A backend-focused e-commerce management platform built with TypeScript, NestJS, and PostgreSQL.",
    category: "Backend",
    year: 2024,
    stack: ["TypeScript", "NestJS", "PostgreSQL"],
    features: [
      "Product and order management modules",
      "Structured REST API with TypeScript",
      "Database design for store operations"
    ],
    repoUrl: "https://github.com/tanjil-islam/Online-Store-Management-typescript-nestjs-postgresql",
    liveUrl: null
  },
  {
    title: "BazarBD",
    summary:
      "A TypeScript-based project focused on building clean, modular web application structure and features.",
    category: "Full-Stack",
    year: 2025,
    stack: ["TypeScript"],
    features: [
      "Modular project architecture",
      "Type-safe development workflow",
      "Scalable code organization"
    ],
    repoUrl: "https://github.com/tanjil-islam/BazarBD",
    liveUrl: null
  },
  {
    title: "Dabble Game",
    summary:
      "A Python game project that demonstrates logic building, gameplay flow, and problem-solving through code.",
    category: "Python",
    year: 2025,
    stack: ["Python"],
    features: [
      "Core game logic implementation",
      "Input and state handling",
      "Readable and beginner-friendly code structure"
    ],
    repoUrl: "https://github.com/tanjil-islam/Dabble_Game",
    liveUrl: null
  },
  {
    title: "Parcel Delivery System",
    summary:
      "A desktop application in C# for handling parcel delivery workflows and shipment-related data operations.",
    category: "Desktop",
    year: 2023,
    stack: ["C#"],
    features: [
      "Desktop workflow for parcel tracking",
      "Form-based data management",
      "Practical application of OOP concepts"
    ],
    repoUrl: "https://github.com/tanjil-islam/Parcel-Delivery-System-CSharp",
    liveUrl: null
  },
  {
    title: "Codeforces Problem Solve",
    summary:
      "A curated archive of competitive programming solutions, showcasing consistency in algorithmic problem-solving.",
    category: "Algorithms",
    year: 2025,
    stack: ["C++"],
    features: [
      "Large set of solved coding problems",
      "Consistent competitive programming practice",
      "Focus on data structures and algorithms"
    ],
    repoUrl: "https://github.com/tanjil-islam/Codeforces-Problem-Solve",
    liveUrl: null
  },
  {
    title: "Developer Portfolio",
    summary:
      "My personal portfolio website built to present projects, skills, and contact information in a professional format.",
    category: "Frontend",
    year: 2025,
    stack: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Responsive and modern UI layout",
      "Project and skills showcase",
      "Clean developer-centric presentation"
    ],
    repoUrl: "https://github.com/tanjil-islam/md-tanjirul-islam-portfolio",
    liveUrl: "https://tanjirul-islam.netlify.app"
  }
];
