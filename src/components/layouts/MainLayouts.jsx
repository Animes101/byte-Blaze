import React from 'react'
import Nav from '../Nav'
import Home from '../../pages/Home'
import Blogs from '../../pages/Blogs'
import BookMarks from '../../pages/BookMarks'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const MainLayouts = () => {
  return (
  <div>
    <div>
        <Nav />
     </div>
      <div className='min-h-[calc(100vh-150px)]'>
      <Outlet />
      </div>
      <div>
        <Footer />
      </div>
  
  </div>
  )
}

export default MainLayouts
