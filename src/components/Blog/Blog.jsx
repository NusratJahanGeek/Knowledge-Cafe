import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { authorImg, authorName, blogImg, blogName, firstCategory, secondCategory, writtenDate, readingTime } = props.blog;
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
                    <p>{readingTime} <FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <h2>{blogName}</h2>
            <p><small>{firstCategory} {secondCategory}</small></p>
            <button><a>Mark as read</a></button>
        </div>
    );
};

export default Blog;