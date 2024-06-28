import "./header.css"
import React from 'react';
import SearchForm from './SearchForm';
import NavIcons from './NavIcons';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="cabecera__container">
                <Link to="/" ><h1 className="logo__itemh">Tutorías UPIITA</h1></Link>
                <SearchForm />
                <NavIcons />
            </nav>
        </header>
    );
};

export default Header;