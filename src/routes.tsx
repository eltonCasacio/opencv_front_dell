import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ListFilter, CreateFilter, DetailFilter } from './features/filters'

const router = createBrowserRouter([
  {
    path: "/filter",
    element: <CreateFilter />,
    children: [
      {
        path: "list",
        element: <ListFilter />,
      },
      {
        path: "detail",
        element: <DetailFilter />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}