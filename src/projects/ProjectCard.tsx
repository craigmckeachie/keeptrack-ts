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
    <div className="card card-bordered bg-white w-96  mr-10 mb-10">
      <figure>
        <img src={project.imageUrl} alt={project.name} />
      </figure>
      <section className="card-body">
        <Link to={'/projects/' + project.id}>
          <h6 className="card-title mb-4 text-base">{project.name}</h6>
          <p className="mb-4">{formatDescription(project.description)}</p>
          <p className="mb-2 badge badge-outline p-2 ">
            Budget : $ {project.budget.toLocaleString()}
          </p>
        </Link>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary "
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
