import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import BookMarks from "../pages/BookMarks";
import Author from "../components/Author";
import Content from "../components/Content";


 export const router = createBrowserRouter([
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
          element:<Blogs></Blogs>,
          loader:()=>fetch('https://dev.to/api/articles')
        },
        {
          path:"/blogs/:id",
          element:<Blog />,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}}`),
          children:[
            {
                index:true,
                element:<Author />,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}}`)
            },
            {
                path:'contant',
                element:<Content />,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}}`)
            }
          ]
        },
        {
          path:'/bookmarks',
          element:<BookMarks></BookMarks>
        }
      ]
    },
  ]);
