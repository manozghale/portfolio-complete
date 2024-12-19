import React from 'react';
import { Award, Coffee, Heart, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => (
  <div className="text-center">
    <div className="text-purple-600 flex justify-center mb-2">{icon}</div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

export const Stats: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <StatItem
      icon={<Award className="w-6 h-6" />}
      value="50+"
      label="Projects Completed"
    />
    <StatItem
      icon={<Users className="w-6 h-6" />}
      value="30+"
      label="Happy Clients"
    />
    <StatItem
      icon={<Coffee className="w-6 h-6" />}
      value="1000+"
      label="Coffee Cups"
    />
    <StatItem
      icon={<Heart className="w-6 h-6" />}
      value="15+"
      label="Open Source"
    />
  </div>
);