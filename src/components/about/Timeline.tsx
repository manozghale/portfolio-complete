import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'Senior Software Engineer',
    organization: 'Tech Innovators Inc.',
    description: 'Leading development of AI-powered solutions',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    organization: 'Digital Solutions Co.',
    description: 'Built scalable web applications',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '2019',
    title: 'Masters in Computer Science',
    organization: 'Tech University',
    description: 'Specialized in AI and Machine Learning',
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export const Timeline: React.FC = () => (
  <div className="relative">
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
    <div className="space-y-12">
      {timelineData.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex items-center">
            <div className="flex-1 text-right pr-8">
              <div className="text-xl font-bold text-purple-600">{item.year}</div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.organization}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                {item.icon}
              </div>
            </div>
            <div className="flex-1 pl-8"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);