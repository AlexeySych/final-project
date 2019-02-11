import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Pokedex</Link>
        <Link to="/caught">Caught Pokemons</Link>
    </nav>
)

export default Navbar;