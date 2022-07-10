import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const handleEdit = (project: Project) => {
    console.log(project);
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <ProjectCard project={project} onEdit={handleEdit} />
          <ProjectForm />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
