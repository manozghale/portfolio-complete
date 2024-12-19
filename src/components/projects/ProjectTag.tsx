import React from 'react';

interface ProjectTagProps {
  tag: string;
}

export const ProjectTag = ({ tag }: ProjectTagProps) => (
  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
    {tag}
  </span>
);