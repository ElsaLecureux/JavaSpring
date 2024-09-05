import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Pages/ErrorPage';
import EmployeesPage, { loader as employeesLoader } from './Pages/EmployeesPage';
import AddUpdateDepartmentPage from './Pages/AddUpdateDepartment';
import DepartmentsPage from './Pages/DepartmentsPage';
import AddEmployeePage, { action as createAction } from './Pages/AddEmployeePage';
import UpdateEmployeePage, { action as updateAction } from './Pages/UpdateEmployeePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/employees" replace/>,
      },
      {
        path: "/employees",
        element: <EmployeesPage />,
        loader: employeesLoader,
      },
      {
        path: "/departments",
        element: <DepartmentsPage />,
      },
      {
        path: "/addEmployee",
        element: <AddEmployeePage />,
        action: createAction,
      },
      {
        path: "/updateEmployee/:id",
        element: <UpdateEmployeePage />,
        action: updateAction,
      },
      {
        path: "/addUpdateDepartment",
        element: <AddUpdateDepartmentPage />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
