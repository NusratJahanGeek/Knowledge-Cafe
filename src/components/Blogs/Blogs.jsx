import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Sidebar from '../Sidebar/Sidebar';

const Blogs = ({handleReadTime, blogReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs-container'>
            <div className='individual-blogs'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleReadTime={handleReadTime}
                    ></Blog>)
                }
            </div>
            <div>
                <Sidebar
                blogReadingTime={blogReadingTime}
                ></Sidebar>
            </div>
        </div>
    );
};

export default Blogs;