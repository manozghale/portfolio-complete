import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectTag } from './ProjectTag';
import { ProjectLink } from './ProjectLink';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <ProjectTag key={index} tag={tag} />
        ))}
      </div>
      <div className="flex gap-4">
        <ProjectLink href={project.links.demo} icon={<ExternalLink className="w-4 h-4" />} text="Demo" primary />
        <ProjectLink href={project.links.github} icon={<Github className="w-4 h-4" />} text="Code" />
      </div>
    </div>
  </div>
);