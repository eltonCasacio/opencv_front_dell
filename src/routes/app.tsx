import { Home, BoxFilters, Areas, RegisterUser, Users, EditUser } from '../pages'

export const filtersRouters = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/box-filters",
        element: <BoxFilters />
    },
    {
        path: "/areas",
        element: <Areas />
    },
    {
        path: "/register_user",
        element: <RegisterUser />
    },
    {
        path: "/users",
        element: <Users />
    },
    {
        path: "/users/edit/:user_edit_id",
        element: <EditUser />
    },
];