
import toast from 'react-hot-toast';

export const localStorageGetItems=()=>{
    const bookmarkItems=[];
    const getItemsBookmark=localStorage.getItem('bookMarkItems');
    if(getItemsBookmark){
        bookmarkItems=JSON.parse(getItemsBookmark);
    }
    return bookmarkItems;

}

export const saveBlog = blog => {
    let blogs = localStorageGetItems()
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
      return toast.error('Already Bookmarked!')
    }
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully!')
  }
  
  export const deleteBlog = id => {
    let blogs = localStorageGetItems()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmark!')
  }