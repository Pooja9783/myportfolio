
import { Project, Experience, Skill } from './types';

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
    items: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Context API", "Tailwind CSS", "MUI", "Expo"]
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Express.js", "RESTful APIs", "WebSocket", "Socket.io", "JWT", "Firebase", "MongoDB", "SQL", "NoSQL"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "Postman", "Swagger", "Vercel", "SonarQube"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Chat MERN App",
    description: "A real-time chat application using WebSocket, MongoDB, Node.js, and Express for instant messaging.",
    tech: ["MERN", "WebSocket", "Socket.io"],
    link: "#",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Q-bit",
    description: "A news application that provides updates in specific categories chosen by the user using React Native.",
    tech: ["React Native", "API Integration"],
    link: "#",
    image: "https://images.unsplash.com/photo-1504711432869-efd597cdd04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Shop Bazar",
    description: "E-commerce app with login/signup, product filtering, shopping cart, and secure payment integration.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    link: "#",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    title: "Share Me",
    description: "Image sharing platform where users can upload and view images in real-time on a global feed.",
    tech: ["React", "Cloudinary", "Real-time Feed"],
    link: "#",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "CoffeeWeb Technologies Pvt Ltd",
    period: "July 2023 - Present",
    description: [
      "Optimized performance through code splitting and lazy loading, improving retention.",
      "Built a real-time Forex and commodity visualization module using WebSockets and Lightweight Charts.",
      "Enhanced engagement with Firebase push notifications and single-device authentication for security.",
      "Developed a PWA with offline functionality and smart caching strategies."
    ]
  },
  {
    id: "exp2",
    role: "Frontend Developer",
    company: "iLearnplace",
    period: "May 2022 - Jun 2023",
    description: [
      "Implemented global API error handling with consistent fallback messaging.",
      "Utilized SonarQube for code quality analysis and adherence to best practices.",
      "Improved performance using memoization and component optimization in React."
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Career Assistant for Pooja Sankhala's portfolio.
Pooja is a MERN Full-Stack Developer with 4+ years of experience based in Bangalore.

Background Information:
${JSON.stringify(PERSONAL_INFO)}
Work History: ${JSON.stringify(EXPERIENCES)}
Skills: ${JSON.stringify(SKILLS)}
Projects: ${JSON.stringify(PROJECTS)}
Education: Masai School (MERN Stack Web Development, 2021-2022).

Tone & Behavior:
- Professional, concise, and helpful.
- Highlight her expertise in React, Node, WebSockets, and performance optimization.
- If asked about contact info, provide her email (poojashankhla15@gmail.com) and LinkedIn.
- Mention her 4+ years of real-world experience.
`;
