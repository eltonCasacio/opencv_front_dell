import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { PageNotFound } from '../pages/page_not_found';

export const RootRoutes = () => {
  const { id } = useAppSelector(state => state.credentials)

  return (
    <Routes>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
  )
}