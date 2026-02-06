import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Work from './Components/Work/Work.jsx';
import FindDoctor from './Pages/FindDoctor/FindDoctor.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/reviews",
        element: <Reviews/>,
      },
      {
        path: "/works",
        element: <Work/>,
      },
      {
        path: "/find-doctor",
        element: <FindDoctor/>,
      },
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
