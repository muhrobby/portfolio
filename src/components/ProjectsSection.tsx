import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Project Belajar
        </h2>
        <div className="text-center">
          <h3 className="text-2xl">Soon</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
