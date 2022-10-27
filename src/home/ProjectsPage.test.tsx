import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../projects/ProjectsPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../state';

describe('<ProjectPage />', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectsPage />
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('Projects-sivun tulisi renderöityä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('Testataan, näkyykö sivulla "Projects" otsikko', () => {
    setup();
    expect(screen.getByRole('heading')).toHaveTextContent('ProjectsS');
  });
})
