import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <Calendar size={16} />
          {project.date}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-purple-600/30 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Code
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;