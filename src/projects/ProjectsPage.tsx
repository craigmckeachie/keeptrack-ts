import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    allProjects {
      id
      name
      description
      imageUrl
      budget
      isActive
    }
  }
`;

function ProjectsPage() {
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);
  console.log(data);

  // useEffect(() => {
  //   async function loadProjects() {
  //     setLoading(true);
  //     try {
  //       const data = await projectAPI.get(currentPage);
  //       if (currentPage === 1) {
  //         setProjects(data);
  //       } else {
  //         setProjects((projects) => [...projects, ...data]);
  //       }
  //     } catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProjects();
  // }, [currentPage]);

  const saveProject = (project: Project) => {
    // projectAPI
    //   .put(project)
    //   .then((updatedProject) => {
    //     let updatedProjects = projects.map((p: Project) => {
    //       return p.id === project.id ? project : p;
    //     });
    //     setProjects(updatedProjects);
    //   })
    //   .catch((e) => {
    //     setError(e.message);
    //   });
  };

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <h1>Projects</h1>

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error.message}
              </p>
            </section>
          </div>
        </div>
      )}

      <ProjectList projects={data.allProjects} onSave={saveProject} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
