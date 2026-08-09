// ─────────────────────────────────────────────
//  portfolio.js  — edit YOUR details here only
//  Everything else reads from this file
// ─────────────────────────────────────────────

export const personal = {
  name: "Honey Jadav",
  title: "Full Stack Developer (MERN)",
  subtitle: "MCA Candidate · Ahmedabad, India",
  email: "honeyjadav2135@email.com",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "www.linkedin.com/in/honey-jadav-644057312/",
  github: "github.com/honeyjadav",
  summary:
    "Full Stack Developer with 1+ year of hands-on internship experience building MERN stack applications. Skilled in React UI development, Node.js APIs, and database integration.",
};

export const experience = [
  {
    id: "staatse",
    role: "Full Stack Developer Intern",
    company: "Staatse (Security Company)",
    type: "Virtual · Internship",
    period: "Jun 2024 – Jul 2025",
    award: "Best Performer",
    bullets: [
      "Built a security vulnerability tracking and asset management platform with a real-time dashboard, SLA monitoring, and Slack/Teams webhook alerts.",
      "Identified and reported 100+ software bugs and security issues; awarded Best Performer for quality and impact.",
      "Developed a secure file upload module with Azure Blob Storage, including validation, access control, and encryption.",
      "Built a dynamic Word document template engine to auto-generate client-ready reports from structured data.",
      "Worked with RESTful APIs to connect frontend and backend systems, collaborating in an Agile/Scrum environment to deliver features on time.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Azure Blob Storage", "Webhooks"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "Sardar Vallabhbhai Global University",
    period: "2025 – 2027",
    cgpa: null,
    status: "In Progress",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "Chimanbhai Patel Institute of Computer Applications",
    period: "2022 – 2025",
    cgpa: "8.27 / 10",
    status: "Completed",
  },
];

export const certifications = [
  {
    id: "gcp",
    name: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google",
    date: "Feb 2026",
    status: "earned",
    issuerColor: "#4285f4",
  },
  {
    id: "gsre",
    name: "Developing a Google SRE Culture",
    issuer: "Google",
    date: "Feb 2026",
    status: "earned",
    issuerColor: "#4285f4",
  },
  {
    id: "linux1",
    name: "Introduction to Linux — LFS101",
    issuer: "The Linux Foundation",
    date: "Oct 2025 – Mar 2026",
    status: "earned",
    issuerColor: "#ffd100",
  },
  {
    id: "linux2",
    name: "LFD121: Developing Secure Software",
    issuer: "The Linux Foundation",
    date: "Sep – Oct 2025",
    status: "earned",
    issuerColor: "#ffd100",
  },
  {
    id: "ibm",
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    date: "Jul 2025 – Present",
    status: "in-progress",
    issuerColor: "#78aadc",
    progress: 58,
    completedModules: [
      "What is Data Science? (12 hrs)",
      "Tools for Data Science (16 hrs)",
      "Data Science Methodology (9 hrs)",
      "Python for DS, AI & Dev (24 hrs)",
      "Python Project for Data Science (7 hrs)",
      "Databases & SQL for Data Science (18 hrs)",
      "Data Analysis with Python",
    ],
    totalModules: 12,
  },
  {
    id: "rag-ibm",
    name: "Introduction to Retrieval-Augmented Generation (RAG)",
    issuer: "IBM SkillsBuild",
    date: "2026",
    status: "earned",
    issuerColor: "#0f62fe",
  },
  {
    id: "react-scaler",
    name: "React Certification",
    issuer: "Scaler",
    date: "2026",
    status: "earned",
    issuerColor: "#61dafb",
  },
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Expected Aug 2026",
    status: "in-progress",
    issuerColor: "#0078d4",
    progress: 0,
    completedModules: [],
    totalModules: 1,
  },
];

export const projects = [
  {
    id: "vuln-mgmt",
    icon: "🛡️",
    name: "VulnTrack",
    displayName: "Security Vulnerability Management Platform",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Azure Blob Storage", "Slack/Teams Webhooks"],
    type: "Full Stack · Internship",
    description:
      "Vulnerability tracking and asset management platform for Staatse, with a real-time dashboard, SLA monitoring, and Slack/Teams webhook alerts. Includes a secure file upload module and an auto-generated Word report engine.",
    impact: "Our team won 1st rank for this project's presentation",
  },
  {
    id: "invoice-generator",
    icon: "🧾",
    name: "Invoice_Generator",
    displayName: "Invoice Generator Mobile App",
    stack: ["React Native", "Expo", "SQLite"],
    type: "Mobile App",
    description:
      "Cross-platform, offline-first invoice generator built with React Native, Expo, and SQLite.",
    impact: "downloadable mobile app for generating invoices on the go",
    link: "github.com/honeyjadav/Invoice_Generator",
  },
  {
    id: "tobedone",
    icon: "✅",
    name: "ToBeDone",
    displayName: "ToBeDone",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    type: "MCA Major Project",
    description:
      "Task/productivity management application built as my MCA major project. Covers full CRUD workflows, user authentication, and a responsive React front end backed by a REST API.",
    impact: "Core academic project, MCA 2025–2027",
    link: "github.com/honeyjadav/ToBeDone",
  },
  {
    id: "portfolio",
    icon: "🌐",
    name: "Portfolio",
    displayName: "Personal Portfolio Website",
    stack: ["React", "Vite", "CSS3"],
    type: "Frontend",
    description:
      "This portfolio site itself — a responsive, single-page React + Vite site with a dark, developer-themed UI showcasing my projects, skills, and experience.",
    impact: "Live site showcasing all my work in one place",
    link: "github.com/honeyjadav/portfolio",
  },
];

export const skills = {
  Languages: ["Python", "C", "Java", "JavaScript", "Bash / Shell"],
  "Tools & Frameworks": ["React", "Node.js", "Express.js", "GitHub"],
  Databases: ["MySQL", "Oracle Database", "MongoDB", "SQLite"],
  "Cloud & DevOps": ["AWS", "Microsoft Azure", "Azure Blob Storage", "Terraform", "Git", "Postman"],
  Practices: ["Secure Coding", "AI-Assisted Secure Development", "RESTful APIs", "Agile / Scrum"],
};

export const desktopIcons = [
  { id: "about",    icon: "🧑‍💻", label: "About Me"        },
  { id: "exp",      icon: "💼", label: "Experience"       },
  { id: "projects", icon: "📁", label: "My Projects"      },
  { id: "certs",    icon: "🎓", label: "Certifications"   },
  { id: "skills",   icon: "⚙️", label: "Skills.ini"       },
  { id: "resume",   icon: "📄", label: "Resume.doc"       },
  { id: "contact",  icon: "📧", label: "Contact.lnk"      },
  { id: "recycle",  icon: "🗑️", label: "Recycle Bin"      },
];
