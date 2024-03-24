import React from 'react'
import { Link } from 'react-router-dom'

const EmptString = () => {
  return (
    <div className='min-h-[calc(100vh-150px)] flex flex-col justify-center gap-5 items-center'>
        <h1 className='text-2xl font-bold text-red-400'>BootMark Not Found.........!!!!</h1>
        <button><Link to="/blogs" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
            Blogs
            </Link></button>
      
    </div>
  )
}

export default EmptString
