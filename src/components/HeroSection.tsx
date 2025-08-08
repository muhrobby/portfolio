import React from "react";
import { Briefcase, MessageCircle, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionClick }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              {/* <User size={48} className="text-white" /> */}
              <img
                src="https://avatars.githubusercontent.com/u/109953530?s=400&u=e8b520d3367eb7b4dfa84fb95ed7da83d97b7a41&v=4"
                alt="Profile Photo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hai, Saya Robby
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Passionate learner yang sedang mengembangkan skill dalam
            <span className="text-blue-400 font-semibold">
              {" "}
              web development
            </span>{" "}
            dan
            <span className="text-purple-400 font-semibold">
              {" "}
              Backend Enginer
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onSectionClick("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center gap-2"
            >
              <Briefcase size={20} />
              Lihat Project Saya
            </button>
            <button
              onClick={() => onSectionClick("contact")}
              className="px-8 py-3 border-2 border-gray-400 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Hubungi Saya
            </button>
          </div>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
