import React from 'react';
import { Code, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Tentang Saya
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Journey Saya</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Saya adalah seorang developer pemula yang passionate dalam mempelajari teknologi web modern. 
                Selama perjalanan belajar, saya telah mengerjakan berbagai project untuk mengasah kemampuan 
                coding dan problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fokus utama saya adalah pada frontend development dengan React dan TypeScript, 
                namun saya juga tertarik untuk belajar backend technologies dan full-stack development.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-600/30 rounded-full text-sm">Frontend Development</span>
                <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">UI/UX Design</span>
                <span className="px-3 py-1 bg-pink-600/30 rounded-full text-sm">Problem Solving</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-blue-400" size={24} />
                <h4 className="text-lg font-semibold">Learning Focus</h4>
              </div>
              <p className="text-gray-300">Modern web technologies, responsive design, dan best practices dalam development.</p>
            </div>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-purple-400" size={24} />
                <h4 className="text-lg font-semibold">Goals</h4>
              </div>
              <p className="text-gray-300">Menjadi full-stack developer yang kompeten dan berkontribusi pada project-project meaningful.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;