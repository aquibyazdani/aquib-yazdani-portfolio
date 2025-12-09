import {
  Mail,
  Phone,
  MapPin,
  Code2,
  FileCode,
  Atom,
  Zap,
  Paintbrush,
  Wind,
  GitBranch,
  Github,
  Smartphone,
  Palette,
  Box,
  CheckCircle,
  TestTube2,
  Gauge,
  Timer,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  Folder,
  Puzzle,
  Users,
  Linkedin,
  Instagram,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import toi from "../assets/toi.png";
import screener from "../assets/screener.png";
import mm from "../assets/mm.png";
import adlob from "../assets/adlob.png";
import funpark from "../assets/funpark.png";
import ecommerce from "../assets/ecommerce.png";
import spotify from "../assets/spotify.png";
import libsilong from "../assets/libsilong.png";
import screenr_long from "../assets/screenr_long.png";
import portfolio from "../assets/aquib-portfolio.png";
// Personal Information
export const personalInfo = {
  name: "Aquib Yazdani",
  displayName: "aquib yazdani", // For navbar/logo
  title: "Sr. Software Engineer",
  tagline: "a Sr. Software Engineer",
  location: "Pune Maharashtra, India",
  email: "yazdaniaquib2@gmail.com",
  phone: "+91 8210773776",
  copyright: "© 2023 Aquib Yazdani",
  careerStartDate: "2021-06-01", // Format: YYYY-MM-DD
};

// Social Links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aquibyazdani/",
  github: "https://github.com/aquibyazdani/",
  instagram: "https://www.instagram.com/aquibyazdani/",
};

// About Me
export const aboutMe = {
  intro: `Passionate Full-Stack Developer Focused on Accessibility & Design`,

  background: `I care deeply about clean architecture, usability, and creating meaningful digital products. While I specialize in frontend development, I also develop full-stack solutions that integrate seamlessly from UI to backend. Outside of programming, I enjoy playing football, photography, and a few rounds of Valorant.`,

  philosophy: ``,

  yearOfExperience: "6+",
  projectsCompleted: "50+",
  happyClients: "30+",
};

// Skills
export const skills = {
  frontend: [
    { name: "React.js", icon: Atom },
    { name: "React Native", icon: Smartphone },
    { name: "Next.js", icon: Zap },
    { name: "JavaScript (ES6+)", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Paintbrush },
    { name: "SCSS", icon: Paintbrush },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Bootstrap", icon: Palette },
  ],
  stateManagement: [
    { name: "Redux", icon: Box },
    { name: "Context API", icon: Box },
    { name: "Zustand", icon: Box },
  ],
  testing: [
    { name: "Jest", icon: CheckCircle },
    { name: "React Testing Library", icon: TestTube2 },
    { name: "Unit Testing", icon: CheckCircle },
  ],
  performance: [
    { name: "SSR", icon: Zap },
    { name: "SSG", icon: Zap },
    { name: "Component Reusability", icon: Puzzle },
    { name: "UI Optimization", icon: Gauge },
    { name: "Load Time Reduction", icon: Timer },
    { name: "Accessibility Improvements", icon: Users },
  ],
  api: [
    { name: "RESTful APIs", icon: Globe },
    { name: "GraphQL", icon: Database },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Azure", icon: Cloud },
    { name: "GitLab", icon: GitBranch },
    { name: "Bitbucket", icon: GitBranch },
    { name: "Jira", icon: Folder },
    { name: "Slack", icon: MessageSquare },
    { name: "ProofHub", icon: Folder },
  ],
};

// Work Experience
export const workExperience = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    company: "Zensar Technologies",
    location: "Mumbai, Maharashtra",
    period: "June 2025 - Present",
    responsibilities: [
      "Leading frontend development initiatives for enterprise-level applications.",
      "Architecting scalable and maintainable React-based solutions.",
      "Mentoring junior developers and conducting code reviews.",
      "Collaborating with cross-functional teams to deliver high-quality products.",
    ],
  },
  {
    id: 2,
    title: "SDE-II",
    company: "Harns Technologies Pvt Ltd",
    location: "Mumbai, Maharashtra",
    period: "June 2021 - June 2025",
    responsibilities: [
      "Engineered dynamic, responsive dashboards using React, Next.js, and TypeScript, supporting agile development practices and enhancing web functionality.",
      "Crafted custom, responsive UI components with Material-UI and Tailwind CSS to streamline user onboarding and bolster digital marketing initiatives.",
      "Optimized state management for a large-scale inspection system by leveraging Redux and Context API enhancing application stability and reducing errors.",
      "Integrated RESTful APIs and GraphQL into a real-time insights application using Express.js, ensuring robust data flow and consistent system performance.",
      "Modernized legacy systems by migrating to modern frameworks like Next.js, significantly improving scalability and overall performance by 30%.",
      "Enhanced user accessibility and UX by implementing WCAG-compliant features in a control panel, promoting inclusive design across various browsers and devices.",
    ],
  },
];

// Education
export const education = [
  {
    id: 1,
    institution: "Heritage Institute Of Technology, Kolkata",
    degree: "B.Tech in Chemical Engineering (CGPA: 8.5)",
    period: "2016 - 2020",
  },
];

// Notable Projects
export const notableProjects = [
  {
    id: 1,
    title: "Screener - Zamzam Capital",
    role: "Sole Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "REST APIs",
    ],
    year: "2025",
    src: screenr_long,
    achievements: [
      "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria.",
      "Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
      "Created responsive dashboards with intuitive UI/UX for seamless user experience across devices.",
    ],
  },
  {
    id: 2,
    title: "TOI Epaper (Times of India)",
    role: "Lead Frontend Engineer",
    techStack: ["React.js", "Redux", "Bootstrap", "REST APIs"],
    year: "2024",
    src: toi,
    achievements: [
      "Developed and maintained a high-traffic ePaper platform accessed by thousands daily.",
      "Reduced development time by 30% using efficient language management and reusable components.",
      "Built a reusable component library to streamline frontend development.",
      "Integrated RESTful APIs for real-time updates, ensuring smooth content delivery.",
      "Implemented cross-browser compatibility and accessibility features.",
      "Integrated Google Ads and Google Analytics.",
    ],
  },
  {
    id: 3,
    title: "Adlob (Response 4You) - (Times of India)",
    role: "Principal UI Developer",
    techStack: [
      "React.js",
      "Context API",
      "Styled Components",
      "Jest",
      "REST APIs",
    ],
    year: "2024",
    src: adlob,
    achievements: [
      "Designed a seamless ad booking platform, simplifying the process for agencies and clients.",
      "Automated workflows, allowing 200+ agencies to manage campaigns effortlessly.",
      "Developed a responsive UI, improving usability by 60% across all devices.",
      "Integrated real-time tracking for ad placements and performance monitoring.",
    ],
  },
  {
    id: 4,
    title: "Libsi Markah E-commerce",
    role: "Key Developer",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS (EC2)"],
    year: "2025",
    src: libsilong,
    achievements: [
      "Improved operational efficiency by 30% with enhanced data workflows.",
      "Reduced manual intervention by 20% through seamless system integrations.",
      "Implemented efficient language management to support multilingual content.",
      "Implemented SEO-friendly practices, improving search rankings and organic traffic.",
    ],
  },
];

// Personal Projects
export const personalProjects = [
  {
    id: 1,
    title: "Portfolio",
    url: "https://aquibyazdani.com",
    src: portfolio,
  },
  {
    id: 2,
    title: "Amusement Park",
    url: "https://amusement-park-new.netlify.app",
    src: funpark,
  },
  {
    id: 3,
    title: "Memorable Mumbai",
    url: "https://memorablemumbai.com",
    src: mm,
  },
  {
    id: 4,
    title: "E-commerce clone",
    url: "https://shoppe-aquib-yazdani.netlify.app",
    src: ecommerce,
  },
  {
    id: 5,
    title: "Spotify clone",
    url: "https://spotify-yazdani.netlify.app",
    src: spotify,
  },
  {
    id: 6,
    title: "Screener",
    url: "https://screener.zamzam-capital.com",
    src: screener,
  },
  { id: 7, title: "TOI ePaper - Archive", url: "#", src: toi },
];

// Awards
export const awards = [
  {
    id: 1,
    title: "Best Frontend Developer",
    organization: "TechFlow Inc.",
    date: "2023",
  },
  {
    id: 2,
    title: "Innovation Award",
    organization: "Digital Creations",
    date: "2021",
  },
];

// Achievements
export const achievements = [
  "Boosted application responsiveness by 25% through optimized front-end code and design.",
  "Reduced version control conflicts by 15%, improving workflow efficiency by 20%.",
  "Improved team collaboration by 10%, leading to a 12% increase in project delivery speed.",
];

// References
export const references = [
  {
    id: 1,
    name: "Harish Yerragintla",
    position: "Lead Developer",
    company: "Harns Technologies",
    phone: "+1 (205) 736-5808",
    email: "harish.yerraguntla2706@gmail.com",
  },
  {
    id: 2,
    name: "Md Fariduzzaman Ansari",
    position: "Senior Frontend Engineer",
    company: "Icertis",
    phone: "+91 70443 56471",
    email: "fariduzzamaansari@gmail.com",
  },
];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "ecommerce platform",
    year: "2023",
    role: "Full Stack Developer",
    client: "ShopFast Inc.",
    tag: "Featured",
    links: {
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile app for task and project management with real-time sync.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "task management app",
    year: "2023",
    role: "Mobile Developer",
    client: "ProductivePro",
    links: {
      demo: "https://taskapp-demo.com",
      github: "https://github.com/username/taskapp",
    },
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "Modern, responsive portfolio website with smooth animations and dark mode.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "portfolio website design",
    year: "2022",
    role: "Front-end Developer",
    links: {
      demo: "https://portfolio-demo.com",
      github: "https://github.com/username/portfolio",
    },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard for visualizing complex data with charts and graphs.",
    technologies: ["React", "D3.js", "TypeScript"],
    image: "analytics dashboard",
    year: "2022",
    role: "Front-end Developer",
    client: "DataViz Corp.",
    links: {
      demo: "https://analytics-demo.com",
      github: "https://github.com/username/analytics",
    },
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Full Stack",
    description:
      "Social networking platform with posts, comments, and real-time messaging.",
    technologies: ["React", "GraphQL", "PostgreSQL"],
    image: "social media interface",
    year: "2021",
    role: "Full Stack Developer",
    client: "ConnectHub",
    links: {
      demo: "https://socialmedia-demo.com",
      github: "https://github.com/username/social",
    },
  },
  {
    id: 6,
    title: "Weather Application",
    category: "API Integration",
    description:
      "Beautiful weather app with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    image: "weather app interface",
    year: "2021",
    role: "Front-end Developer",
    links: {
      demo: "https://weather-demo.com",
      github: "https://github.com/username/weather",
    },
  },
];

// Contact Information for Footer
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

// Social Media
export const socialMedia = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: socialLinks.linkedin,
  },
  {
    name: "GitHub",
    icon: Github,
    url: socialLinks.github,
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: socialLinks.instagram,
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/918210773776",
  },
  {
    name: "Phone",
    icon: Phone,
    url: "tel:+918210773776",
  },
];

// Navigation Items
export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
];
