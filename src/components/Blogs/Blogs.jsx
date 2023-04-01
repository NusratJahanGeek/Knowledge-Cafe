import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';

const Blogs = ({ handleReadTime, blogReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const handleBookmarked = (blogName) => {
        const newBookmark = [...bookmark, blogName];
        if (bookmark.find((item, index) => bookmark.indexOf(item) === index)) {
            toast.error("Already have Bookmarked", { theme: "colored" });
        } else {
            toast.success("Added as Bookmark", { theme: "colored" });
        }
        setBookmark(newBookmark);
    }

    return (
        <div className='blogs-container'>
            <div className='individual-blogs'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleReadTime={handleReadTime}
                        handleBookmarked={handleBookmarked}
                    ></Blog>)
                }
            </div>
            <div>
                <Sidebar
                    blogReadingTime={blogReadingTime}
                    bookmark={bookmark}

                ></Sidebar>
            </div>
        </div>
    );
};

export default Blogs;