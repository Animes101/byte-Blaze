import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Author = () => {
    const author=useLoaderData();

    console.log(author);
  return (
    <div>
      hello author
    </div>
  )
}

export default Author
