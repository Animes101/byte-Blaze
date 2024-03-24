import React, { useEffect, useState } from "react";
import { deleteBlog, localStorageGetItems } from "../utils/bookMarkItems";

import Blog from "../components/Blog";
import EmptString from "../components/EmptString";

const BookMarks = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const blogs = localStorageGetItems();
    setBlog(blogs);
  }, []);

  const handleDeleteLocalStorage=(id)=>{

    deleteBlog(id);
    const blogs = localStorageGetItems();
    setBlog(blogs);

  }

  if(blog.length<1){
    return (
      <div className="min-h-[calc(100vh-150px)]">
        <EmptString />
      </div>
    )
  }

  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {blog.map((blog, index) => (
          <Blog onDelete={handleDeleteLocalStorage} delet={true} key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
