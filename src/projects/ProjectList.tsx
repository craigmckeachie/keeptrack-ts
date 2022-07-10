import React from 'react';
import { Project } from './Project';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
}

export default ProjectList;
