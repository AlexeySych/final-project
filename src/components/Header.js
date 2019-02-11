import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const Header = () => (    
    <header className="page-header">
        <Link to='/'>
            <img className="logo" src="/img/pokedex.png" alt="Pokedex Logo"/>
        </Link>
        <Navbar />
    </header>
)

export default Header;