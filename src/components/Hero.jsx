import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero min-h-full">
    <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        {/* {button} */}
        <div>
            <button><Link to="/blogs" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
            Blogs
            </Link></button>
            <button><Link to="/bookMarks" class="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
            BookMarks
            </Link></button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
