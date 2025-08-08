import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactInfo } from "../data/contact";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Mari Berkolaborasi
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk
          menghubungi saya!
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href={`mailto:${contactInfo.email}`}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:scale-105 transition-all duration-200"
          >
            <Mail
              className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300"
              size={32}
            />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400">{contactInfo.email}</p>
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:scale-105 transition-all duration-200"
          >
            <Github
              className="mx-auto mb-4 text-purple-400 group-hover:text-purple-300"
              size={32}
            />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400">@muhrobby</p>
          </a>
          {/* <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:scale-105 transition-all duration-200"
          >
            <Linkedin
              className="mx-auto mb-4 text-pink-400 group-hover:text-pink-300"
              size={32}
            />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400">Your Profile</p>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
