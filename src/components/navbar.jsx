import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from '../assets/images/acslogo.png'


export const Navbar = ({toggleMenu}) => {
    
    return (
        <div className='navbar'>
            <div className='logo-container'> 
            <Link to="/">
            <img className='logo' src={logo} />
                </Link>
                </div>
            
            <div className='links'>
                <Link to="/">
                    Shop
                </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
                <button className='hamburgerMenuBttn' onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </button>

            </div>
        </div>
    )
}
