import React, { ReactNode } from 'react';

interface ProjectLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
  primary?: boolean;
}

export const ProjectLink = ({ href, icon, text, primary }: ProjectLinkProps) => (
  <a
    href={href}
    className={`flex items-center gap-1 ${
      primary ? 'text-purple-600 hover:text-purple-700' : 'text-gray-600 hover:text-gray-700'
    }`}
  >
    {icon} {text}
  </a>
);