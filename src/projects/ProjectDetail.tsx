import React from 'react';
import { Project } from './Project';

interface ProjectDetailProps {
  project: Project;
}
export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="">
      <div className="">
        <div className="card card-bordered bg-gray-200 w-96 ">
          <figure>
            <img
              className=""
              src={project.imageUrl}
              alt={project.name}
              width={500}
              height={300}
            />
          </figure>
          <section className="card-body">
            <h3 className="card-title mb-4 text-base">
              <strong>{project.name}</strong>
            </h3>
            <p className=" text-gray-500 mb-2">{project.description}</p>
            <p className=" text-gray-500">
              <span className="text-gray-800 font-semibold">budget: </span>$
              {project.budget.toLocaleString()}
            </p>

            <p className=" text-gray-500">
              <span className="text-gray-800 font-semibold">signed: </span>{' '}
              {project.contractSignedOn.toLocaleDateString()}
            </p>
            <p className=" text-gray-500">
              <span className="text-gray-800 font-semibold">status: </span>{' '}
              {project.isActive ? 'active' : 'inactive'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
