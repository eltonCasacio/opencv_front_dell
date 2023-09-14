import {
    Home,
    BoxFilters,
    Areas,
    RegisterUser,
    Users,
    EditUser,
    Constante
} from '../pages'
import { RoutesParams } from './root';

export const filtersRouters:RoutesParams[] = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        level_permission: 1
    },
    {
        name: "Box Filter",
        path: "/box-filters",
        element: <BoxFilters />,
        level_permission: 2
    },
    {
        name: "Constant",
        path: "/constant",
        element: <Constante />,
        level_permission: 2
    },
    {
        name: "Areas",
        path: "/areas",
        element: <Areas />,
        level_permission: 1
    },
    {
        name: "Register User",
        path: "/register_user",
        element: <RegisterUser />,
        level_permission: 1
    },
    {
        name: "Users",
        path: "/users",
        element: <Users />,
        level_permission: 1
    },
    {
        name: "Edit User",
        path: "/users/edit/:user_edit_id",
        element: <EditUser />,
        level_permission: 1
    },
];