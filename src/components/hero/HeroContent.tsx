import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { HeroFeature } from './HeroFeature';

interface HeroContentProps {
  onViewProjects: () => void;
}

export const HeroContent = ({ onViewProjects }: HeroContentProps) => (
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Crafting Digital Excellence
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
        Elevate your digital presence with AI-powered solutions and cutting-edge design
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={onViewProjects}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors"
        >
          View Projects <ArrowRight className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-4">
          <HeroFeature icon={<Bot className="w-5 h-5" />} text="AI-Powered" />
          <HeroFeature icon={<Sparkles className="w-5 h-5" />} text="Modern Design" />
        </div>
      </div>
    </div>
  </div>
);