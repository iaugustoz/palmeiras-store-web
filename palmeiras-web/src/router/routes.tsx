import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
