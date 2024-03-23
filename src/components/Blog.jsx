import React from 'react'

import notFountImg from '../assets/404.jpg'
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {description,cover_image,id,title,published_at}=blog;
  return (
    <div className='border border-gray-400'>
      <Link rel="noopener noreferrer" to={`/blogs/${id}`}  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || notFountImg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
    </div>
  )
}

export default Blog
