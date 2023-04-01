import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='blogs-container'>
            <div className="individual-blogs">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
            <div className="blog-sidebar">
                <div className="reading-time">
                    <h4>Spent Time On Read:</h4>
                </div>
                <div className='bookmarked-blogs'>
                    <h4>Bookmarked Blogs: </h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;