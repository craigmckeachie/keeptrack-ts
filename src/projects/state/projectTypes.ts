import { Project } from '../Project';

//action types
export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';
export const SAVE_PROJECT_REQUEST = 'SAVE_PROJECT_REQUEST';
export const SAVE_PROJECT_SUCCESS = 'SAVE_PROJECT_SUCCESS';
export const SAVE_PROJECT_FAILURE = 'SAVE_PROJECT_FAILURE';
export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

interface LoadProjectsRequest {
  type: typeof LOAD_PROJECTS_REQUEST;
}

interface LoadProjectsSuccess {
  type: typeof LOAD_PROJECTS_SUCCESS;
  payload: { projects: Project[]; page: number };
}

interface LoadProjectsFailure {
  type: typeof LOAD_PROJECTS_FAILURE;
  payload: { message: string };
}

interface SaveProjectRequest {
  type: typeof SAVE_PROJECT_REQUEST;
}

interface SaveProjectSuccess {
  type: typeof SAVE_PROJECT_SUCCESS;
  payload: Project;
}

interface SaveProjectFailure {
  type: typeof SAVE_PROJECT_FAILURE;
  payload: { message: string };
}

interface DeleteProjectRequest {
  type: typeof DELETE_PROJECT_REQUEST;
}

interface DeleteProjectSuccess {
  type: typeof DELETE_PROJECT_SUCCESS;
  payload: Project;
}

interface DeleteProjectFailure {
  type: typeof DELETE_PROJECT_FAILURE;
  payload: { message: string };
}

export type ProjectActionTypes =
  | LoadProjectsRequest
  | LoadProjectsSuccess
  | LoadProjectsFailure
  | SaveProjectRequest
  | SaveProjectSuccess
  | SaveProjectFailure
  | DeleteProjectRequest
  | DeleteProjectSuccess
  | DeleteProjectFailure;

export interface ProjectState {
  loading: boolean;
  projects: Project[];
  error: string | undefined;
  page: number;
}
