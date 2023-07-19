import { Project } from './Project';
import React from 'react';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

function formatTitle(title: string, length: number): string {
  if (title.length <= length) {
    return title;
  } else {
    return title.substring(0, 22) + '...';
  }
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
    <div className="card card-bordered bg-gray-200 w-96  ">
      <figure>
        <img src={project.imageUrl} alt={project.name} />
      </figure>
      <section className="card-body">
        <Link to={'/projects/' + project.id}>
          <h6 className="card-title mb-4 text-base">{formatTitle(project.name, 24)}</h6>

          <p className="mb-4 text-gray-500">
            {formatDescription(project.description)}
          </p>
          <p className="mb-2 badge badge-outline p-2 text-gray-500 py-4 ">
            Budget : $ {project.budget.toLocaleString()}
          </p>
        </Link>
        <div className="card-actions justify-start">
          <button
            className="btn btn-link text-secondary pl-0 "
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
