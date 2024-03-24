import React from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useLoaderData } from 'react-router-dom'

const Content = () => {
    const content=useLoaderData();
    const {title,body_html}=content;
    
  return (
    <div>
      <h1>{title}</h1>
      <div className='p-4 text-wrap	'>
      <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  )
}

export default Content
