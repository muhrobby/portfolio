import { Code, Palette, Database } from 'lucide-react';
import { Skill } from '../types';

export const skills: Skill[] = [
  { name: "JavaScript", icon: Code, level: 90, category: "Frontend" },
  { name: "React", icon: Code, level: 85, category: "Frontend" },
  { name: "TypeScript", icon: Code, level: 80, category: "Frontend" },
  { name: "CSS/Tailwind", icon: Palette, level: 88, category: "Frontend" },
  { name: "Node.js", icon: Database, level: 75, category: "Backend" },
  { name: "MongoDB", icon: Database, level: 70, category: "Backend" },
  { name: "Git", icon: Code, level: 85, category: "Tools" },
  { name: "Figma", icon: Palette, level: 82, category: "Design" }
];