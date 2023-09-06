import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { PageNotFound } from '../pages/page_not_found';
import { filtersRouters } from './filters'
import { credentialsRouters } from './credentials'
import { useEffect, useState } from 'react';

export interface RoutesParams {
  path: string
  element: React.JSX.Element
}

export const RootRoutes = () => {
  const { id } = useAppSelector(state => state.credentials)
  const [currentRoutes, setCurrentRoutes] = useState<RoutesParams[]>()

  useEffect(() => {
    const aux = id? filtersRouters: credentialsRouters
    setCurrentRoutes(aux)
  }, [id])

  return (
    <Routes>
      {currentRoutes && currentRoutes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
      <Route
        path='*'
        element={<PageNotFound />}
      />
    </Routes>
  )
}