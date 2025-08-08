import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollNavigation } from './hooks/useScrollNavigation';

function App() {
  const { activeSection, isScrolled, scrollToSection } = useScrollNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation 
        activeSection={activeSection}
        isScrolled={isScrolled}
        onSectionClick={scrollToSection}
      />
      
      <HeroSection onSectionClick={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;