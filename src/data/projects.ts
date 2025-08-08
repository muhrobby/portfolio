import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Dashboard admin untuk mengelola toko online dengan fitur analytics, inventory management, dan customer management.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.netlify.app",
    category: "Web Development",
    date: "2024-01"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Aplikasi cuaca dengan fitur forecast 7 hari, geolocation, dan beautiful UI animations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "API Integration", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app-demo.netlify.app",
    category: "Mobile App",
    date: "2023-12"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Sistem manajemen tugas dengan drag & drop, deadline tracking, dan team collaboration features.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/username/task-management",
    category: "Full Stack",
    date: "2023-11"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Website portofolio personal dengan design modern, animasi smooth, dan fully responsive.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://myportfolio.netlify.app",
    category: "Web Development",
    date: "2023-10"
  }
];