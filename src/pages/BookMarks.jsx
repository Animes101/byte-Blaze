import React, { useEffect, useState } from 'react'
import { localStorageGetItems } from '../utils/bookMarkItems';


const BookMarks = () => {
  const [blog ,setBlog]=useState([]);

  useEffect(()=>{

    const blogs=localStorageGetItems();
    setBlog(blogs);

  },[])

console.log(blog);


  return (
    <div>
      {blog.map((item)=>{
        return(
          <div>
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default BookMarks
