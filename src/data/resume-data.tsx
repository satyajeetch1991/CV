import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Satyajeet Chavan",
  initials: "SC",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about: "B.Tech in Artificial Intelligence at VIIT Pune. Passionate about full-stack development, AI, and building impactful solutions.",
  summary: (
    <>
      B.Tech student at VIIT Pune, specializing in Artificial Intelligence. 
      Experienced in full-stack web development, machine learning, and building scalable platforms. 
      Enthusiastic about solving real-world problems with technology and always eager to learn new skills.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/184357124?v=4", // Replace with your actual GitHub avatar URL
  personalWebsiteUrl: "https://linkedin.com/in/satyajeet-chavan",
  contact: {
    email: "chavansatyajeet2004@gmail.com",
    tel: "7774964145",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/satyajeetch1991",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/satyajeet-chavan",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Vishwakarma Institute of Information Technology, Pune",
      degree: "B.Tech in Artificial Intelligence",
      start: "2023",
      end: "2027",
      gpa: "8.73",
    },
    {
      school: "Dudhganga Valley School, Kolhapur",
      degree: "Class 10",
      start: "2020",
      end: "2021",
      gpa: "90.60%",
    },
    {
      school: "CET/JEE",
      degree: "CET – 97.62, JEE – 91.01",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "ResumeForge (Webverse Hack 2025 Finalist)",
      link: "",
      badges: ["Hackathon", "Full Stack"],
      title: "Full Stack Developer",
      start: "2025",
      end: "2025",
      description: (
        <>
          Finalist at Webverse Hack 2025 for building ResumeForge, a resume builder platform.
        </>
      ),
    },
    {
      company: "Smart Complaint Management System (CodeSprint Pune 2024)",
      link: "",
      badges: ["Hackathon", "AI"],
      title: "Developer",
      start: "2024",
      end: "2024",
      description: (
        <>
          3rd Place at CodeSprint Pune 2024 for developing a smart complaint management system.
        </>
      ),
    },
  ],
  skills: [
    "C++", "Python", "C", "Java", "JavaScript", "HTML/CSS", "SQL",
    "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Tensorflow", "Git",
    "DSA", "OOP", "DBMS", "Canva", "Bootstrap"
  ],
  projects: [
    {
      title: "E-Commerce Website",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      description:
        "Full-stack platform with secure authentication, Stripe integration, recommendation system, and optimized backend.",
      link: {
        label: "GitHub",
        href: "https://github.com/satyajeetch1991/ecommerce", // Replace with your actual repo if available
      },
    },
    {
      title: "Financial Advisor Platform",
      techStack: ["Python", "Flask", "ML", "APIs"],
      description:
        "AI-powered platform for investment advice with market analysis APIs and interactive dashboard.",
      link: {
        label: "GitHub",
        href: "https://github.com/satyajeetch1991/financial-advisor", // Replace with your actual repo if available
      },
    },
  ],
  achievements: [
    "🥉 CodeSprint Pune 2024 – 3rd Place – Smart Complaint Management System",
    "🏅 Webverse Hack 2025 – Finalist – ResumeForge builder platform",
    "🎓 Cybage Khushboo Scholar (2023–2027) – Full tuition scholarship",
    "☁️ Google Cloud Arcade – Advanced Milestone (2024)"
  ],
  certifications: [
    "Full Stack Web Development – Apna College",
    "Artificial Intelligence Certificate – CDAC India (Apr–Jun 2024)",
    "AI Bootcamp – CDAC India (Oct 2024)",
    "Career Essentials in Project Management – Microsoft & LinkedIn (Feb 2025)",
    "AWS Developer Associate Prep – LinkedIn (Jan 2025)",
    "CCNAv7 Networking – Cisco (Distinction)"
  ],
  conferences: [
    "Presented: “Time Spent on Social Media” at Intellectual Property India"
  ],
} as const;