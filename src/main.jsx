import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SubscriptionForm from './components/SubscriptionForm.jsx';
import TeacherPagination from './components/TeacherPagination.jsx';
 import PricingPagination from './components/PricingPagination.jsx';
import TeacherForm from './components/TeacherForm.jsx';
import MainContent from './components/MainContent.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContent/>,
  },
  {
    path: '/SubscriptionForm',
    element: <SubscriptionForm />,
  },
  {
    path: '/TeacherForm',
    element: <TeacherForm />,
  },
  {
    path: '/TeacherPagination',
    element: <TeacherPagination />,
  },
  {
    path: '/PricingPagination',
    element: <PricingPagination />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


