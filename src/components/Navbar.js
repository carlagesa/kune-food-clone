import React from 'react'
import './Navbar.css';
import logo from '../logo.png';
import UserIcon from '../user-icon.png';
import ShoppingIcon from '../shopping-bag.png';





export default function Navbar() {
    return (
        <div>
            <header className='header'>
                <ul>
                    {/* <button className='location-info'>Location</button> */}
                    <li className='items' id='items'>0</li>

                    <img src={logo} className="kune-logo" alt="logo" />

                    <li><img src={ShoppingIcon} className="shopping-icon" alt="Shopping" /></li>
                    <li className='login-text'>Log In</li>
                    <li><img src={UserIcon} className="user-icon" alt="User" />
                    </li>
                </ul>
            </header>
        </div>
    )
}