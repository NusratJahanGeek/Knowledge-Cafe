import React from 'react';
import './Header.css'
import userImage from '../../images/User.png'
const Header = () => {
    return (
        <div className='header'>
            <div>
            <h2>Knowledge Cafe</h2>
            </div>
            <div>
            <img src={userImage} alt=""/>
            </div>
        </div>
    );
};

export default Header;