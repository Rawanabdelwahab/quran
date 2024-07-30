import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Upload from './components/Upload.jsx';
import TeacherForm from './components/TeacherForm.jsx';
import MainContent from './components/MainContent.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContent/>,
  },
  {
    path: '/Upload',
    element: <Upload />,
  },
  {
    path: '/TeacherForm',
    element: <TeacherForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


