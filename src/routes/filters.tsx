import { Home, BoxFilters, Areas } from '../pages'

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
];