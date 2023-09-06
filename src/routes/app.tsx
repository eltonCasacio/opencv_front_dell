import { Route, Routes } from 'react-router-dom';
import { Areas, BoxFilters, Home } from '../pages'

export const CredentialsRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/box-filters' element={<BoxFilters />} />
            <Route path='/areas' element={<Areas />} />
        </Routes>
    )
}