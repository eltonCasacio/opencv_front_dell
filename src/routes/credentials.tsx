import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages'

export const CredentialsRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}