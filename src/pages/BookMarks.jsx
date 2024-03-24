import React, { useEffect, useState } from "react";
import { deleteBlog, localStorageGetItems } from "../utils/bookMarkItems";

import Blog from "../components/Blog";

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
