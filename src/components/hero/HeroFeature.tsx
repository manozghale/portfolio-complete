import React, { ReactNode } from 'react';

interface HeroFeatureProps {
  icon: ReactNode;
  text: string;
}

export const HeroFeature = ({ icon, text }: HeroFeatureProps) => (
  <span className="flex items-center gap-2 text-gray-300">
    {icon} {text}
  </span>
);