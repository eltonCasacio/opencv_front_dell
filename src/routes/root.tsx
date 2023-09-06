import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { PageNotFound } from '../pages/page_not_found';
import { filtersRouters } from './filters'
import { credentialsRouters } from './credentials'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../pages/credentials/credentialSlice';

export interface RoutesParams {
  path: string
  element: React.JSX.Element
}

export const RootRoutes = () => {
  const dispatch = useDispatch()
  const { id } = useAppSelector(state => state.credentials)
  const [currentRoutes, setCurrentRoutes] = useState<RoutesParams[]>()

  useEffect(() => {
    const aux = id ? filtersRouters : credentialsRouters
    setCurrentRoutes(aux)
  }, [id])

  useEffect(() => {
    const res = localStorage.getItem("user")
    if (res) {
      const user = JSON.parse(res)
      dispatch(update({
        id: user.id,
        levelPermission: user.levelPermission,
        username: user.username
      }))
    }
  }, [])

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