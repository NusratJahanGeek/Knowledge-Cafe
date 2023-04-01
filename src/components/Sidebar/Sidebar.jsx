import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({blogReadingTime, bookmark}) => {
    //const {blogTitle} = bookmark.blogName;
    const [time, setTime] = useState(blogReadingTime)
    useEffect(() =>{
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getReadTimeFromStorage);
    }, [blogReadingTime])

    
    return (
        <div className='blog-sidebar'>
            <div className="reading-time">
                <h4>Spent Time On Read: {time}</h4>
            </div>
            <div className='bookmarked-blogs'>
                <h4>Bookmarked Blogs: {bookmark.length}</h4>
                <div>
                    {
                        bookmark.map((bookmarked) => <p className='bookmarked-individual-blogs'>{bookmarked}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;