import React from 'react'
import { MdDelete } from "react-icons/md";
import notFountImg from '../assets/404.jpg'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Blog = ({blog,delet,onDelete}) => {
    const {description,cover_image,id,title,published_at}=blog;

	const handleDelete=(id)=>{
		onDelete(id);
		
	}
  return (
    <div className='border border-gray-400 relative'>
      <div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || notFountImg} />
				<div className="p-6 space-y-2">
					<Link to={`/blogs/${id}`} className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</Link>
					<span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
					<p >{description}</p>
					<div onClick={()=>handleDelete(id)} className='absolute right-0 top-0 bg-black rounded shadow-lg shadow-white p-2'>
					  {delet && <MdDelete className='text-3xl text-red-500' />}
					</div>
				</div>
			</div>
    </div>
  )
}

export default Blog
