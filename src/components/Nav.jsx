import React, { useEffect } from 'react'
import { useState } from 'react';

const Nav = () => {

    //themese change 

    const [themes ,setThemes]=useState('light');
    const handleThemes=(e)=>{

        console.log(e.target.checked);
        if(e.target.checked){
            setThemes('dark');
        }else{
            setThemes('light');
        }

    }

    //set html themes

    useEffect(()=>{
        localStorage.setItem('themes',themes);
        const themesItems=localStorage.getItem('themes');
        document.querySelector('html').setAttribute('data-theme',themesItems);
    },[themes]);
  return (

    <div className='h-20'>
        <div className="navbar bg-base-100   shadow-md shadow-gray-500 px-5 fixed z-10 ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-bold text-green-500">Byte _ <span className='text-red-500'>Blaze</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li className='text-lg font-bold'><a>Home</a></li>
                <li className='text-lg font-bold'><a href="">Blogs</a></li>
                <li className='text-lg font-bold'><a href="">BookMarks</a></li>
                <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" onChange={handleThemes}  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </ul>
            </div>
        </div>
    </div>
  )
  
}

export default Nav
