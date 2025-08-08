import React from "react";
import { Zap } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="text-blue-400" size={24} />
          <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <a href="https://bolt.new/">Powered by Bolt</a>
          </span>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Portfolio Muhammad Robby
        </p>
      </div>
    </footer>
  );
};

export default Footer;
