import React from 'react';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="text-blue-400" size={24} />
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;