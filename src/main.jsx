import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout.jsx';
import Home from './Components/Pages/Home/Home';
import Profile from './Components/Pages/Profile/Profile';
import InvoiceForm from './Components/Invoice/InvoiceForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/invoiceForm',
        element: <InvoiceForm></InvoiceForm>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
