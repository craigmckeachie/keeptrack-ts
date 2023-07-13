import { Project } from './Project';
import React from 'react';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card  w-96 shadow-xl m-4 bg-neutral-content glass">
      <figure>
        <img src={project.imageUrl} alt={project.name} />
      </figure>
      <section className="card-body">
        <Link to={'/projects/' + project.id}>
          <h5 className="card-title">{project.name}</h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleEditClick(project);
            }}
          >
            Edit
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
