import React, { useEffect, useState } from 'react';
import { useProjects } from './projectHooks';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    page,
    setPage,
    isPreviousData,
  } = useProjects();

  const handleMoreClick = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div className='mx-12'>
      <h2 className="text-2xl font-bold">Projects</h2>

      {data ? (
        <>
          {isFetching && <span className="toast">Refreshing...</span>}
          <ProjectList projects={data} />
          <div className="row">
            <div className="col-sm-4">Current page: {page + 1}</div>
            <div className="col-sm-4">
              <div className="button-group right">
                <button
                  className="button "
                  onClick={() => setPage((oldPage) => oldPage - 1)}
                  disabled={page === 0}
                >
                  Previous
                </button>
                <button
                  className="button"
                  onClick={() => {
                    if (!isPreviousData) {
                      setPage((oldPage) => oldPage + 1);
                    }
                  }}
                  disabled={data.length != 10}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : isLoading ? (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      ) : isError && error instanceof Error ? (
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
      ) : null}
    </div>
  );

  // if (data) {
  //   return (
  //     <>
  //       <h1>Projects</h1>
  //       <ProjectList projects={data} />
  //       <div className="row">
  //         <div className="col-sm-12">
  //           <div className="button-group fluid">
  //             <button className="button default" onClick={handleMoreClick}>
  //               More...
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <>
  //       <h1>Projects</h1>
  //       <div className="center-page">
  //         <span className="spinner primary"></span>
  //         <p>Loading...</p>
  //       </div>
  //     </>
  //   );
  // }

  // if (error instanceof Error) {
  //   return (
  //     <>
  //       <h1>Projects</h1>
  //       <div className="row">
  //         <div className="card large error">
  //           <section>
  //             <p>
  //               <span className="icon-alert inverse "></span>
  //               {error.message}
  //             </p>
  //           </section>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // return null;
}

export default ProjectsPage;

// return (
//   <>
//     <h1>Header</h1>
//     {data ? (
//       <p>data</p>
//     ) : isLoading ? (
//       <p>Loading...</p>
//     ) : isError ? (
//       <p>Error Message</p>
//     ) : null}
//   </>
// );
