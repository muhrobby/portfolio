import React from 'react';

interface NavigationProps {
  activeSection: string;
  isScrolled: boolean;
  onSectionClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isScrolled, onSectionClick }) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onSectionClick(item.toLowerCase())}
                className={`px-3 py-2 transition-colors duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;