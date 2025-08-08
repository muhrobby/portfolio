export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  date: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  level: number;
  category: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  // linkedin: string;
}
