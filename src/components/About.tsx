import React from 'react';
import { Award, BookOpen, Briefcase, Code, Coffee, Globe, Heart } from 'lucide-react';
import { Timeline } from './about/Timeline';
import { SkillCard } from './about/SkillCard';
import { Stats } from './about/Stats';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 mb-6">
              With over 8 years of experience in software development, I've had the privilege 
              of working with cutting-edge technologies and amazing teams around the globe. 
              My passion lies in creating intuitive and impactful digital solutions that 
              solve real-world problems.
            </p>
            <Stats />
          </div>
        </div>

        <Timeline />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <SkillCard
            icon={<Code className="w-6 h-6" />}
            title="Technical Skills"
            items={['React/Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS']}
          />
          <SkillCard
            icon={<Globe className="w-6 h-6" />}
            title="Languages"
            items={['English (Native)', 'Spanish (Fluent)', 'French (Basic)']}
          />
          <SkillCard
            icon={<Heart className="w-6 h-6" />}
            title="Interests"
            items={['Open Source', 'AI/ML', 'Tech Education', 'Travel']}
          />
        </div>
      </div>
    </section>
  );
};

export default About;