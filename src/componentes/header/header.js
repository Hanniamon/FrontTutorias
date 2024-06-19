import "./header.css"
import React from 'react';
import SearchForm from './SearchForm';
import NavIcons from './NavIcons';

const Header = () => {
    return (
        <header>
            <nav className="cabecera__container">
                <h1 className="logo__item">Tutorías UPIITA</h1>
                <SearchForm />
                <NavIcons />
            </nav>
        </header>
    );
};

export default Header;