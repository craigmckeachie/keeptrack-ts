import { useState } from 'react';
import { projectAPI } from './projectAPI';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Project } from './Project';

export function useProjects() {
  const [page, setPage] = useState(0);
  let queryInfo = useQuery(['projects', page], () => projectAPI.get(page + 1), {
    keepPreviousData: true,
    // staleTime: 5000,
  });
  // console.log(queryInfo);
  return { ...queryInfo, page, setPage };
}

export function useSaveProject() {
  const queryClient = useQueryClient();
  return useMutation((project: Project) => projectAPI.put(project), {
    onSuccess: () => queryClient.invalidateQueries('projects'),
  });
}
