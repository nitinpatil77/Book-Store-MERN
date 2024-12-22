import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateBook from './pages/CreateBook.jsx';
import EditBook from './pages/EditBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/create",
        element: <CreateBook />,
      },
      {
        path: "books/edit/:id",
        element: <EditBook />,
      },
      {
        path: "books/details/:id",
        element: <ShowBook />,
      },
      {
        path: "books/delete/:id",
        element: <DeleteBook />,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
