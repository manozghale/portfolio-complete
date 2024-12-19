import React, { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-purple-600">{icon}</div>
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);