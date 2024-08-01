import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import React from 'react';
import Product from '@/pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/product/:productId',
    element: <Product />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
