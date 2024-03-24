import React, { useEffect, useState } from 'react'
import { localStorageGetItems } from '../utils/bookMarkItems';


const BookMarks = () => {
  const [blog ,setBlog]=useState([]);

  useEffect(()=>{

    const blog=localStorageGetItems();
    setBlog([...blog,blog]);

  },[])

  console.log(blog);
  return (
    <div>
      Book marks
    </div>
  )
}

export default BookMarks
