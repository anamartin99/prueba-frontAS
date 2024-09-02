import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WhoAreWe from '../Components/WhoAreWe/WhoAreWe';
import AdminPage from '../Pages/AdminPage/AdminPage';
import Contact from '../Pages/Contact/Contact';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NewsPage from '../Pages/NewsPage/NewsPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

function Routes() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/admin", element: <AdminPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/news", element: <NewsPage /> },
    { path: "/whoarewe", element: <WhoAreWe /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default Routes;
