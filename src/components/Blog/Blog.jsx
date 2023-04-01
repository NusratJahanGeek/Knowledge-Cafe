import React, { useState } from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

const Blog = ({blog, handleReadTime, handleBookmarked}) => {
    const { authorImg, authorName, blogImg, blogName, firstCategory, secondCategory, writtenDate, readingTime } = blog;

    
   /*  const handleBookmarked = () =>{
        toast("Already Bookmarked!")
    }  */

    

    return (
        <div className='individual-blog-container'>
            <img src={blogImg} alt="" />
            <div className="blog-details">
                <div>
                    <img src={authorImg} alt="" />
                </div>
                <div>
                    <h3>{authorName}</h3>
                    <p>{writtenDate}</p>
                </div>
                <div>
                    <p>{readingTime}  min read&nbsp;&nbsp;&nbsp;&nbsp;    <button onClick={() => handleBookmarked(blogName)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <h2>{blogName}</h2>
            <p><small>{firstCategory} {secondCategory}</small></p>
            <button onClick={() =>handleReadTime(readingTime)}><a>Mark as read</a></button>
        </div>
    );
};

export default Blog;