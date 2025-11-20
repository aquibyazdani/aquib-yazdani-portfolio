import { 
  Mail, Phone, MapPin, Code2, FileCode, Atom, Zap, Paintbrush, Wind, 
  GitBranch, Github, Smartphone, Palette, Box, CheckCircle, TestTube2, 
  Gauge, Timer, Globe, Database, Cloud, MessageSquare, Folder, Puzzle, Users,
  Linkedin, Instagram, type LucideIcon
} from "lucide-react";

// Personal Information
export const personalInfo = {
  name: "Robert Garcia",
  displayName: "robert garcia", // For navbar/logo
  title: "Front-end Developer",
  tagline: "A web developer and designer ready to help with your next project.",
  location: "San Francisco, CA",
  email: "hello@robertgarcia.com",
  phone: "+1 (555) 123-4567",
  copyright: "© 2023 Robert Garcia",
};

// Social Links
export const socialLinks = {
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  instagram: "https://instagram.com",
};

// About Me
export const aboutMe = {
  intro: `I'm a passionate front-end developer with over 6 years of experience crafting beautiful, responsive web applications. My journey in web development started with a curiosity about how websites work, and it has evolved into a career I'm truly passionate about.`,
  
  background: `I specialize in React, TypeScript, and modern JavaScript frameworks. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.`,
  
  philosophy: `I believe in writing clean, maintainable code and creating exceptional user experiences. My approach combines technical expertise with a keen eye for design, ensuring that every project not only functions flawlessly but also delights users.`,
  
  yearOfExperience: "6+",
  projectsCompleted: "50+",
  happyClients: "30+"
};

// Skills
export const skills = {
  frontend: [
    { name: 'React.js', icon: Atom },
    { name: 'React Native', icon: Smartphone },
    { name: 'Next.js', icon: Zap },
    { name: 'JavaScript (ES6+)', icon: Code2 },
    { name: 'TypeScript', icon: FileCode },
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: Paintbrush },
    { name: 'SCSS', icon: Paintbrush },
    { name: 'Tailwind CSS', icon: Wind },
    { name: 'Material UI', icon: Palette },
    { name: 'Bootstrap', icon: Palette }
  ],
  stateManagement: [
    { name: 'Redux', icon: Box },
    { name: 'Context API', icon: Box },
    { name: 'Zustand', icon: Box }
  ],
  testing: [
    { name: 'Jest', icon: CheckCircle },
    { name: 'React Testing Library', icon: TestTube2 },
    { name: 'Unit Testing', icon: CheckCircle }
  ],
  performance: [
    { name: 'SSR', icon: Zap },
    { name: 'SSG', icon: Zap },
    { name: 'Component Reusability', icon: Puzzle },
    { name: 'UI Optimization', icon: Gauge },
    { name: 'Load Time Reduction', icon: Timer },
    { name: 'Accessibility Improvements', icon: Users }
  ],
  api: [
    { name: 'RESTful APIs', icon: Globe },
    { name: 'GraphQL', icon: Database }
  ],
  tools: [
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: Github },
    { name: 'Azure', icon: Cloud },
    { name: 'GitLab', icon: GitBranch },
    { name: 'Bitbucket', icon: GitBranch },
    { name: 'Jira', icon: Folder },
    { name: 'Slack', icon: MessageSquare },
    { name: 'ProofHub', icon: Folder }
  ]
};

// Work Experience
export const workExperience = [
  {
    id: 1,
    title: "Senior Front-end Developer",
    company: "TechFlow Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    responsibilities: [
      "Led development of company's design system used across 5+ products, improving consistency by 40%",
      "Mentored team of 4 junior developers, conducting code reviews and pair programming sessions",
      "Optimized application performance resulting in 60% faster load times"
    ]
  },
  {
    id: 2,
    title: "Front-end Developer",
    company: "Digital Creations",
    location: "San Francisco, CA",
    period: "Mar 2020 - Dec 2021",
    responsibilities: [
      "Developed 20+ responsive websites for clients across various industries",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Integrated RESTful APIs and third-party services"
    ]
  },
  {
    id: 3,
    title: "Junior Front-end Developer",
    company: "StartupHub",
    location: "San Francisco, CA",
    period: "Jun 2018 - Feb 2020",
    responsibilities: [
      "Built and maintained web applications using React and modern JavaScript",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in agile development process and daily stand-ups"
    ]
  }
];

// Education
export const education = [
  {
    id: 1,
    institution: "Stanford University",
    degree: "Bachelor of Computer Science",
    period: "2014 - 2018"
  },
  {
    id: 2,
    institution: "UC Berkeley Extension",
    degree: "Certificate in UX/UI Design",
    period: "2019"
  }
];

// Awards
export const awards = [
  {
    id: 1,
    title: "Best UI Developer of the Year",
    organization: "TechCrunch",
    date: "Oct 2023"
  },
  {
    id: 2,
    title: "Excellence in Web Design",
    organization: "Webby Awards",
    date: "May 2022"
  }
];

// References
export const references = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "CTO",
    company: "TechFlow Inc.",
    phone: "+1 (555) 987-6543",
    email: "sarah@techflow.com"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Lead Designer",
    company: "Digital Creations",
    phone: "+1 (555) 456-7890",
    email: "michael@digitalcreations.com"
  }
];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "ecommerce platform",
    year: "2023",
    role: "Full Stack Developer",
    client: "ShopFast Inc.",
    tag: "Featured",
    links: {
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description: "Cross-platform mobile app for task and project management with real-time sync.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "task management app",
    year: "2023",
    role: "Mobile Developer",
    client: "ProductivePro",
    links: {
      demo: "https://taskapp-demo.com",
      github: "https://github.com/username/taskapp"
    }
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    description: "Modern, responsive portfolio website with smooth animations and dark mode.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "portfolio website design",
    year: "2022",
    role: "Front-end Developer",
    links: {
      demo: "https://portfolio-demo.com",
      github: "https://github.com/username/portfolio"
    }
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "Interactive dashboard for visualizing complex data with charts and graphs.",
    technologies: ["React", "D3.js", "TypeScript"],
    image: "analytics dashboard",
    year: "2022",
    role: "Front-end Developer",
    client: "DataViz Corp.",
    links: {
      demo: "https://analytics-demo.com",
      github: "https://github.com/username/analytics"
    }
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Full Stack",
    description: "Social networking platform with posts, comments, and real-time messaging.",
    technologies: ["React", "GraphQL", "PostgreSQL"],
    image: "social media interface",
    year: "2021",
    role: "Full Stack Developer",
    client: "ConnectHub",
    links: {
      demo: "https://socialmedia-demo.com",
      github: "https://github.com/username/social"
    }
  },
  {
    id: 6,
    title: "Weather Application",
    category: "API Integration",
    description: "Beautiful weather app with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    image: "weather app interface",
    year: "2021",
    role: "Front-end Developer",
    links: {
      demo: "https://weather-demo.com",
      github: "https://github.com/username/weather"
    }
  }
];

// Contact Information for Footer
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null
  }
];

// Social Media
export const socialMedia = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: socialLinks.linkedin
  },
  {
    name: "GitHub",
    icon: Github,
    url: socialLinks.github
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: socialLinks.instagram
  }
];

// Navigation Items
export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" }
];