import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { VideoBackground } from './hero/VideoBackground';
import { HeroContent } from './hero/HeroContent';

const Hero = () => {
  const handleViewProjects = () => {
    scrollToSection('projects');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <VideoBackground />
      <HeroContent onViewProjects={handleViewProjects} />
    </section>
  );
};

export default Hero;