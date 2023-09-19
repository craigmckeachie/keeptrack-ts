import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm project={project} onCancel={cancelEditing} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
