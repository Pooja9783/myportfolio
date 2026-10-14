
import { Project, Experience, Skill } from './types';
import masaiSchool from "./assets/masai-school.jpg";
import aritribe from "./assets/airtribe-ai-first-software-engineering.png";
import scaler from "./assets/nodejs-scaler.png";


export const PERSONAL_INFO = {
  name: "Pooja Sankhala",
  role: "MERN Full-Stack Developer",
  experience_years: 4,
  location: "Bangalore, Karnataka",
  about: "MERN Full-Stack Developer with 4+ years of experience building end-to-end web solutions. Strong in API design, authentication, and real-time systems, with a focus on performance, scalability, and maintainability.",
  email: "poojashankhla15@gmail.com",
  phone: "+91 9783224446",
  github: "github.com/Pooja9783",
  linkedin: "linkedin.com/in/pooja-sankhala",
  portfolio: "pooja-sankhala.com"
};


export const SKILLS: Skill[] = [
  {
    category: "Languages & Core",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3 / SASS"]
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "MUI",
      "Expo"
    ]
  },
  {
    category: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSocket",
      "Socket.io",
      "JWT",
      "Firebase",
      "MongoDB",
      "SQL",
      "NoSQL"
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Postman",
      "Swagger",
      "Vercel",
      "SonarQube"
    ]
  },
  {
    category: "Soft Skills",
    items: [
      "Problem-Solving",
      "Communication",
      "Teamwork & Collaboration",
      "Adaptability",
      "Time Management",
      "Analytical Thinking",
      "Continuous Learning"
    ]
  }
];



export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Prism",
    description:
      "Prism is a production-style AI Gateway that provides a single OpenAI-compatible API for routing requests across multiple LLM providers. It includes smart routing, semantic caching, retry and failover, rate limiting, budget enforcement, usage metering, and an operations dashboard.",
    tech: ["MERN", "LLM", "RAG", "OpenRouter API"],
    githubLink: "https://github.com/Pooja9783/prism-capstone",
    demoLink: "https://prism-capstone-1.onrender.com/",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },
  // {
  //   id: "2",
  //   title: "Resume Profile Matching",
  //   description:
  //     "A Retrieval-Augmented Generation (RAG) system that automatically matches and ranks candidate resumes against job descriptions using semantic search and hybrid scoring, built in Node.js without requiring external API keys.",
  //   tech: [
  //     "Node.js",
  //     "@xenova/transformers",
  //     "Chart.js",
  //     "Vector Search",
  //   ],
  //   githubLink:
  //     "https://github.com/Pooja9783/RAG-Based-Profile-matching",
  //   image:
  //     "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  // },
  {
    id: "2",
    title: "GossipBox",
    description:
      "A real-time chat application using WebSockets, MongoDB, Node.js, and Express for instant messaging.",
    tech: ["MERN", "WebSocket", "Socket.io"],
    githubLink: "https://github.com/Pooja9783/message-app",
    demoLink: "https://message-app-prod.onrender.com",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },
  // {
  //   id: "4",
  //   title: "Resume LLM Assistant",
  //   description:
  //     "An interactive Python tool powered by a Large Language Model that reads, searches, and summarizes resumes in TXT, PDF, and DOCX formats. Users can query resume content using natural language.",
  //   tech: ["Python", "LLM", "Natural Language Processing", "PDF", "DOCX"],
  //   githubLink: "https://github.com/Pooja9783/llm-intergration",
  //   image:
  //     "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  // },


  {
    id: "5",
    title: "ShareMe - Image Sharing App",
    description:
      "A social image-sharing application where users can upload images and explore images shared by other users on the home page. Features include Google authentication, image downloading, and saving images for later access. Built with React.js and Redux for state management.",
    tech: ["React.js", "Redux", "Google OAuth", "Vercel"],
    githubLink: "https://github.com/Pooja9783/message-app",
    demoLink: "https://share-me-app-one.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },


  {
    id: "3",
    title: "ChatBot AI",
    description:
      "An AI-powered chatbot built with the MERN stack and OpenRouter API to help software engineers explore programming concepts, understand technical topics, and get assistance with software development questions. Features an interactive chat interface and backend integration with LLMs, keeping API credentials out of the frontend.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenRouter API",
      "LLMs",
    ],
    githubLink: "https://github.com/Pooja9783/ai-chatbot",
    demoLink: "https://ai-chatbot-omega-eight-39.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },


];


export const EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineer (MERN Full Stack Developer)",
    company: "CoffeeWeb Technology Pvt Ltd",
    location: "Bangalore, India",
    period: "Jul 2023 — Jun 2026",
    description: [
      "Developed an end-to-end GenAI feature using the MERN stack and OpenAI API, creating backend REST endpoints for preset quick questions and free-form user inputs.",

      "Owned the backend architecture for the Menu, Coffee Reports, and News Feed admin dashboard modules, building scalable REST APIs using Node.js, Express, and MongoDB.",

      "Optimized infrastructure costs by approximately 22% by limiting WebSocket connections to actual market open and close hours instead of running continuously.",

      "Implemented dynamic meta tags, descriptions, and Open Graph data using React Helmet, increasing organic search traffic by approximately 15%.",

      "Maintained and refactored existing React.js modules by improving code structure, removing duplicate logic, and creating reusable components.",

      "Implemented lazy loading, infinite scrolling, responsive design improvements, Firebase push notifications, and WebSocket-driven real-time updates to improve performance and engagement.",
    ],
  },

  {
    id: 2,
    role: "Software Engineer (React.js Developer)",
    company: "Canopi India Pvt Ltd",
    location: "Bangalore, India",
    period: "May 2022 — Nov 2022",
    description: [
      "Developed admin dashboards for user management, role-based access control, and content workflow operations.",

      "Built reusable UI components, reducing duplicate development efforts and improving frontend consistency across product modules.",

      "Designed and implemented a global API error handling system to improve error management and provide a more consistent user experience.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    issuer: "Masai School",
    skills: ["React", "JavaScript", "Node.js", "MongoDB"],
    image: masaiSchool
  },
  {
    id: 2,
    title: "AI-First Software Engineering",
    issuer: "Airtribe",
    skills: ["Nodejs", "AI Engineering", "Low Level System Design", "High Level System Design"],
    link: "#",
    image: aritribe

  },
  {
    id: 3,
    title: "Nodejs",
    issuer: "Scaler",
    skills: ["NodeJs"],
    link: "#",
    image: scaler

  },

];



