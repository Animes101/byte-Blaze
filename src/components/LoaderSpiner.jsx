import React from 'react'
import CircleLoader from "react-spinners/ClipLoader";

const LoaderSpiner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>

        <CircleLoader color="#36d7b7" />
      
    </div>
  )
}

export default LoaderSpiner
