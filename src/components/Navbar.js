import React from 'react'
import './Navbar.css';
import logo from '../logo.png';



export default function Navbar() {
    return(
        <div>
            <header className='header'>
                <ul>
               {/* <button className='location-info'>Location</button> */}
                <img src={logo} className="kune-logo" alt="logo" />
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Log In</li>
                 

                </ul>
            </header>
        </div>
    )
}