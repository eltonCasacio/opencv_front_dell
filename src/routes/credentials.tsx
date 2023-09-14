import { Login } from '../pages'
import { RoutesParams } from './root';

export const credentialsRouters:RoutesParams[] = [
    {
        name:"login",
        path: "/",
        element: <Login />,
        level_permission: 0
    }
];