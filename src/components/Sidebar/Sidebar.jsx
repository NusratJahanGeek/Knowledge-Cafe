import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({blogReadingTime}) => {
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
                <h4>Bookmarked Blogs: </h4>
            </div>
        </div>
    );
};

export default Sidebar;