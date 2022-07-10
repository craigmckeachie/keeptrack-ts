import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';
import HomePage from './home/HomePage';

// import ProjectsPage from './projects/ProjectsPage';
const ProjectsPage = React.lazy(() => import('./projects/ProjectsPage'));

// import ProjectPage from './projects/ProjectPage';
const ProjectPage = React.lazy(() => import('./projects/ProjectPage'));

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects/" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects"
            element={
              <React.Suspense fallback={<>...</>}>
                <ProjectsPage />
              </React.Suspense>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <React.Suspense fallback={<>...</>}>
                <ProjectPage />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
