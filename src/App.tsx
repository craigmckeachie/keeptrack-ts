import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';
import HomePage from './home/HomePage';
import ProjectPage from './projects/ProjectPage';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    <Router>
      <header className="navbar bg-secondary text-secondary-content border-b-2 border-b-solid border-b-primary ">
        <div className=" flex-1">
          <a href="/" className="nav-army-star">
            <span>HOME</span>
          </a>
          {/* <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" /> */}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="mx-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects/" className="">
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main className="mx-10 ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
