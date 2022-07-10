import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { initialAppState } from '../../../state';
import { loadProjects } from '../projectActions';
import {
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_FAILURE,
} from '../projectTypes';
import { projectAPI } from '../../projectAPI';
import { MOCK_PROJECTS } from '../../MockProjects';
// jest.mock('../../projectAPI');
jest.mock('../../projectAPI');

const middlewares = [ReduxThunk];
const mockStoreCreator = configureMockStore(middlewares);

describe('Project Actions', () => {
  let store: any;

  beforeEach(() => {
    store = mockStoreCreator(initialAppState);
  });

  test('should load projects successfully', () => {
    const expectedActions = [
      { type: LOAD_PROJECTS_REQUEST },
      {
        type: LOAD_PROJECTS_SUCCESS,
        payload: { projects: MOCK_PROJECTS, page: 1 },
      },
    ];

    return store.dispatch(loadProjects(1)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  test('should return error', () => {
    projectAPI.get = jest
      .fn
      // leave this commented initially
      // projectAPI.get
      ()
      .mockImplementationOnce(() => {
        return Promise.reject('failed');
      });

    const expectedActions = [
      { type: LOAD_PROJECTS_REQUEST },
      {
        type: LOAD_PROJECTS_FAILURE,
        payload: 'failed',
      },
    ];

    return store.dispatch(loadProjects(1)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
