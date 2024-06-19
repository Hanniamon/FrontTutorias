import React from 'react';
import "./header.css"
const SearchForm = () => {
    return (
        <div className="cabecera__buscar__item">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                <button className="superior__item" type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default SearchForm;
