import React from 'react'
import Nav from '../Nav'
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
