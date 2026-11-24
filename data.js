/**
 * Portfolio Data Configuration
 * Edit this file to customize your portfolio content.
 * Add, edit, or remove projects, skills, services, and personal info easily.
 */

const portfolioData = {
  personal: {
    name: "Aldrin B. Quillano",
    role: "Aspiring Web Developer & Designer",
    tagline: "Turning ideas into meaningful projects",
    introduction:
      "Hello! I'm Aldrin, an aspiring web developer and designer with a passion for creating responsive and user-friendly applications. I enjoy learning new things, solving problems, and turning ideas into meaningful projects. As I begin my professional journey, I look forward to gaining experience and continuously improving my skills.",
    email: "hello@yourname.dev",
    location: "Your City, Country",
    resumeUrl: "#",
    avatar: "assets/profile.png",
    social: {
      github: "https://github.com/Raven-spoken",
      linkedin: "https://www.linkedin.com/in/aldrin-quillano-6034bb375/",
    },
  },

  about: {
    title: "About Me",
    subtitle: "Get to know me better",
    description:
      "With over 5 years of experience in web development and graphic design, I specialize in building full-stack applications, crafting intuitive user interfaces, and creating compelling visual identities. I'm always eager to learn new technologies and take on challenging projects.",
    experience: [
      {
        year: "2022 – Present",
        role: "Senior Web Developer",
        company: "Tech Company Inc.",
        description: "Leading frontend development and mentoring junior developers.",
      },
      {
        year: "2020 – 2022",
        role: "Full Stack Developer",
        company: "Digital Agency",
        description: "Built client websites and web applications using React and Node.js.",
      },
      {
        year: "2018 – 2020",
        role: "Junior Developer",
        company: "Startup Studio",
        description: "Developed responsive websites and learned modern web technologies.",
      },
    ],
    highlights: [
      { label: "Projects Completed", value: "50+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Years Experience", value: "5+" },
      { label: "Technologies", value: "20+" },
    ],
  },

  projects: [
    {
      id: 1,
      category: "web-development",
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "https://example.com",
      github: "https://github.com/yourusername/ecommerce",
      featured: true,
    },
    {
      id: 2,
      category: "web-development",
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop boards, and team analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveDemo: "https://example.com",
      github: "https://github.com/yourusername/taskapp",
      featured: true,
    },
    {
      id: 3,
      category: "web-development",
      title: "Portfolio CMS",
      description:
        "Headless CMS for developers to manage portfolio content with markdown support and API access.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "GraphQL"],
      liveDemo: null,
      github: "https://github.com/yourusername/portfolio-cms",
      featured: false,
    },
    {
      id: 4,
      category: "graphic-design",
      title: "Brand Identity – Tech Startup",
      description:
        "Complete brand identity including logo, color palette, typography, and marketing collateral.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      liveDemo: "https://behance.net/gallery/example",
      github: null,
      featured: true,
    },
    {
      id: 5,
      category: "graphic-design",
      title: "Social Media Campaign",
      description:
        "Visual campaign for product launch including Instagram posts, stories, and banner designs.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=600&h=400&fit=crop",
      technologies: ["Canva", "Photoshop", "After Effects"],
      liveDemo: null,
      github: null,
      featured: false,
    },
    {
      id: 6,
      category: "software-systems",
      title: "Inventory Management System",
      description:
        "Enterprise inventory tracking system with barcode scanning, reporting, and multi-warehouse support.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
      liveDemo: null,
      github: "https://github.com/yourusername/inventory-system",
      featured: true,
    },
    {
      id: 7,
      category: "software-systems",
      title: "HR Management Portal",
      description:
        "Internal HR system for employee records, leave management, payroll, and performance reviews.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "MySQL", "Angular"],
      liveDemo: "https://example.com",
      github: null,
      featured: false,
    },
    {
      id: 8,
      category: "ui-ux-design",
      title: "Mobile Banking App UI",
      description:
        "Modern mobile banking interface with intuitive navigation, transaction history, and budget tracking.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Figma", "Prototyping", "Design Systems"],
      liveDemo: "https://figma.com/file/example",
      github: null,
      featured: true,
    },
    {
      id: 9,
      category: "ui-ux-design",
      title: "SaaS Dashboard Redesign",
      description:
        "Complete UX overhaul of analytics dashboard focusing on data visualization and user workflow.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["Figma", "User Research", "Wireframing"],
      liveDemo: "https://dribbble.com/shots/example",
      github: null,
      featured: false,
    },
  ],

  projectCategories: [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "graphic-design", label: "Graphic Design" },
    { id: "software-systems", label: "Software Systems" },
    { id: "ui-ux-design", label: "UI/UX Designs" },
  ],

  skills: {
    title: "Skills & Technologies",
    subtitle: "Tools and technologies I work with",
    categories: [
      {
        name: "Languages",
        icon: "code",
        items: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3", "SQL"],
      },
      {
        name: "Frameworks",
        icon: "layers",
        items: ["React", "Vue.js", "Next.js", "Node.js", "Express", "Django", "Tailwind CSS"],
      },
      {
        name: "Databases",
        icon: "database",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
      },
      {
        name: "Design Tools",
        icon: "palette",
        items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],
      },
      {
        name: "DevOps & Tools",
        icon: "tool",
        items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
      },
      {
        name: "Other",
        icon: "star",
        items: ["REST APIs", "GraphQL", "Agile", "UI/UX Design", "Responsive Design"],
      },
    ],
  },

  services: {
    title: "Services",
    subtitle: "What I can do for you",
    items: [
      {
        icon: "globe",
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern frameworks, optimized for performance and SEO.",
      },
      {
        icon: "smartphone",
        title: "Responsive Design",
        description:
          "Mobile-first designs that look and work flawlessly across all devices and screen sizes.",
      },
      {
        icon: "palette",
        title: "UI/UX Design",
        description:
          "User-centered interface design with wireframes, prototypes, and polished visual designs.",
      },
      {
        icon: "image",
        title: "Graphic Design",
        description:
          "Brand identities, logos, marketing materials, and social media graphics that stand out.",
      },
      {
        icon: "server",
        title: "Backend Development",
        description:
          "Scalable APIs, database design, and server-side logic for robust applications.",
      },
      {
        icon: "settings",
        title: "System Integration",
        description:
          "Connecting third-party services, payment gateways, and building custom software solutions.",
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together on your next project",
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  },

  footer: {
    copyright: "Aldrin B. Quillano",
    tagline: "Crafted with passion and code.",
  },

  navigation: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ],
};
