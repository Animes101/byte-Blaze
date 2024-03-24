import React, { useState } from 'react'
import { Link, Outlet, useLoaderData} from 'react-router-dom';
import { CiBookmarkPlus } from "react-icons/ci";
import { saveBlog } from '../utils/bookMarkItems';


const Blog = () => {
    const [tabsItem ,setTabsItem]=useState(0);
    const blog=useLoaderData();
    const {type_of,published_timestamp,title,url}=blog;

    const handleBookmarks=(blog)=>{

        saveBlog(blog);


    }

  return (
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-gray-800 text-gray-50">
            <div className="w-full mx-auto space-y-4 text-center">
                <p className="text-xs font-semibold tracking-wider uppercase">{type_of}</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
                <p className="text-sm text-gray-400">by
                    <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-violet-400">
                        <span itemprop="name">{url}</span>
                    </a>on
                    <time datetime="2021-02-12 15:34:18-0200">{published_timestamp}</time>
                </p>
            </div>
            {/* {tabs} */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-800 text-gray-100">
                <Link to={`author`}  onClick={()=>setTabsItem(0)} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabsItem === 0 ? 'border border-b-0':'border-b'} rounded-t-lg border-gray-400 text-gray-50`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Architecto</span>
                </Link>
                <Link to={`contant`} onClick={()=>setTabsItem(1)}  rel="noopener noreferrer"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabsItem === 1 ? 'border border-b-0':'border-b'} rounded-t-lg border-gray-400 text-gray-50`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Corrupti</span>
                </Link>
                {/* {bookmarksIcon} */}
                <div className='cursor-pointer' onClick={()=>handleBookmarks(blog)}>
                <CiBookmarkPlus className='text-4xl ml-4 '/>
                </div>
            </div>
            <Outlet />
        </article>
  )
}

export default Blog;
