import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectList from '../ProjectList';
import { MOCK_PROJECTS } from '../MockProjects';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../state';

describe('<ProjectList />', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectList projects={MOCK_PROJECTS} />
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('should render without crashing', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('should display list', () => {
    setup();
    expect(screen.getAllByRole('heading')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('img')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('link')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('button')).toHaveLength(MOCK_PROJECTS.length);
  });

  test('should display form when edit clicked', async () => {
    setup();
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', { name: /edit Wisozk Group/i })
    );
    expect(
      screen.getByRole('form', {
        name: /edit a project/i,
      })
    ).toBeInTheDocument();
  });

  test('should display image and remove form when cancel clicked', async () => {
    setup();
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', { name: /edit Wisozk Group/i })
    );
    await user.click(
      screen.getByRole('button', {
        name: /cancel/i,
      })
    );
    expect(
      screen.getByRole('img', {
        name: /wisozk group/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('form', {
        name: /edit a project/i,
      })
    ).not.toBeInTheDocument();
  });
});
