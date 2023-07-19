import React, { useEffect, useState } from 'react';
import { projectAPI } from './projectAPI';
import ProjectDetail from './ProjectDetail';
import { Project } from './Project';
import { useParams } from 'react-router-dom';

function ProjectPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    projectAPI
      .find(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <>
        <h2 className="text-2xl font-extrabold my-8">Project Detail</h2>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="">
            <div className="">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {project && <ProjectDetail project={project} />}
      </>
    </div>
  );
}

export default ProjectPage;
