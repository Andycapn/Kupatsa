import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <nav className='navbar'>
            <h1 className='nav-logo'>Kupatsa</h1>
            <ul>
                <li><NavLink  activeStyle={ { color: 'black' } } exact to='/'>Home</NavLink></li>
                <li><NavLink activeStyle={ { color: 'black' } } exact to='/services'>Services</NavLink></li>
                <li><NavLink activeStyle={ { color: 'black' } } exact to='/about'>About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;