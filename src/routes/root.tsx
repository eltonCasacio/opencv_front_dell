import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { PageNotFound } from '../pages/page_not_found';
import { filtersRouters } from './app'
import { credentialsRouters } from './credentials'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLoggedUser, updateLoggedUser } from '../pages/credentials/usersSlice';

export interface RoutesParams {
  name: string
  path: string
  element: React.JSX.Element,
  level_permission: number
}

export const RootRoutes = () => {
  const dispatch = useDispatch()
  const { id, level_permission } = useAppSelector(getLoggedUser)
  const [currentRoutes, setCurrentRoutes] = useState<RoutesParams[]>()

  useEffect(() => {
    const aux = id ? filtersRouters : credentialsRouters
    setCurrentRoutes(aux)
  }, [id])

  useEffect(() => {
    const res = localStorage.getItem("user")
    if (res) {
      const user = JSON.parse(res)
      dispatch(updateLoggedUser({
        id: user.id,
        level_permission: user.level_permission,
        username: user.username
      }))
    }
  }, [])

  return (
    <Routes>
      {currentRoutes && currentRoutes.map(r => {
        return level_permission <= r.level_permission && <Route key={r.path} path={r.path} element={r.element} />
      })}
      <Route
        path='*'
        element={<PageNotFound />}
      />
    </Routes>
  )
}