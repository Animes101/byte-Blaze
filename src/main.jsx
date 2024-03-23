import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx';
import MainLayouts from './components/layouts/MainLayouts.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:'/bookmarks',
        element:<BookMarks></BookMarks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
