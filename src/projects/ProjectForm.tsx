import React, { SyntheticEvent, useState } from 'react';
import { Project } from './Project';
import { useSaveProject } from './projectHooks';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
}

function ProjectForm({ project: initialProject, onCancel }: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    budget: '',
  });

  const { mutate: saveProject, isLoading } = useSaveProject();
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    saveProject(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  function validate(project: Project) {
    let errors: any = { name: '', description: '', budget: '' };
    if (project.name.length === 0) {
      errors.name = 'Name is required';
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.';
    }
    if (project.description.length === 0) {
      errors.description = 'Description is required.';
    }
    if (project.budget === 0) {
      errors.budget = 'Budget must be more than $0.';
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  return (
    <div className="card w-96 bg-gray-200 card-bordered glass mr-10 mb-10 min-h-full">
      <section className="card-body">
        <form className="  " onSubmit={handleSubmit}>
          {isLoading && <span className="toast">Saving...</span>}
          <div className="input-group  input-group-vertical mb-2">
            <label className="" htmlFor="name">
              Project Name
            </label>
            <input
              className="form-control input input-bordered"
              type="text"
              name="name"
              placeholder="enter name"
              value={project.name}
              onChange={handleChange}
            />
            {errors.name.length > 0 && (
              <div className="card error">
                <p>{errors.name}</p>
              </div>
            )}
          </div>

          <div className="input-group input-group-vertical mb-2">
            <label className="form-label" htmlFor="description">
              Project Description
            </label>
            <textarea
              className="form-control input input-bordered"
              name="description"
              placeholder="enter description"
              value={project.description}
              onChange={handleChange}
            />
            {errors.description.length > 0 && (
              <div className="card error">
                <p>{errors.description}</p>
              </div>
            )}
          </div>
          <div className="input-group input-group-vertical mb-2">
            <label className="form-label" htmlFor="budget">
              Project Budget
            </label>
            <input
              className="form-control input file-input-bordered"
              type="number"
              name="budget"
              placeholder="enter budget"
              value={project.budget}
              onChange={handleChange}
            />
            {errors.budget.length > 0 && (
              <div className="card error">
                <p>{errors.budget}</p>
              </div>
            )}
          </div>
          <div className="input-group input-group-vertical mb-4">
            <label className="form-label" htmlFor="isActive">
              Active?
            </label>
            <input
              className="form-control checkbox"
              type="checkbox"
              name="isActive"
              checked={project.isActive}
              onChange={handleChange}
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Save</button>
            <button
              type="button"
              className="btn btn-link text-accent"
              onClick={onCancel}
            >
              cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProjectForm;
