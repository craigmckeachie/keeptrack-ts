import { MOCK_PROJECTS } from '../MockProjects';
import { projectAPI } from '../projectAPI';

describe('projectAPI', () => {
  test('should return records', () => {
    const response = new Response(undefined, {
      status: 200,
      statusText: 'OK',
    });
    response.json = () => Promise.resolve(MOCK_PROJECTS);
    jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => Promise.resolve(response));

    return projectAPI.get().then((data) => expect(data).toEqual(MOCK_PROJECTS));
  });
});
