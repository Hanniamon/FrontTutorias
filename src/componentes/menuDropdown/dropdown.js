import "./dropdown.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

const Dropdown = ({ level, items }) => {
    return (
        <div className="dropdown">
            <a className="superior__item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {level}<img src="./flecha_expande.png" alt={level} className="icono" />
            </a>
            <ul className="dropdown-menu">
                {items.map((item, index) => (
                    <li key={index}><a className="dropdown-item" href="#">{item}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
