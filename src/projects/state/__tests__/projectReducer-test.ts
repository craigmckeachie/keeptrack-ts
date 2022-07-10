import { projectReducer, initialProjectState } from '../projectReducer';
import { SAVE_PROJECT_SUCCESS } from '../projectTypes';
import { Project } from '../../Project';
import { MOCK_PROJECTS } from '../../MockProjects';
describe('project reducer', () => {
  test('should update an existing project', () => {
    const project = MOCK_PROJECTS[0];
    const updatedProject = Object.assign(new Project(), project, {
      name: project.name + ' updated',
    });
    const currentState = { ...initialProjectState, projects: [project] };
    const updatedState = {
      ...initialProjectState,
      projects: [updatedProject],
    };
    expect(
      projectReducer(currentState, {
        type: SAVE_PROJECT_SUCCESS,
        payload: updatedProject,
      })
    ).toEqual(updatedState);
  });
});
