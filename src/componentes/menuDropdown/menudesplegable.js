import "./menudesplegable.css";
import React from 'react';

import Dropdown from './dropdown';

const MenuDesplegable = () => {
    const dropdownData = [
        {
            level: 'Nivel I',
            items: ['Programación', 'Estructura de datos', 'Ecuaciones diferenciales']
        },
        {
            level: 'Nivel II',
            items: ['Señales y sistemas', 'Propagación de ondas electromagneticas', 'Electrónica']
        },
        {
            level: 'Nivel III',
            items: ['Redes inteligentes', 'Líneas de transmisión y antenas', 'Seguridad en redes']
        },
        {
            level: 'Nivel IV',
            items: ['Redes de telecomunicaciones', 'Dispositivos programables', 'Aplicaciones distribuidas']
        }
    ];

    return (
        <section className="superior__seccion__container">
            <a className="superior__item" href="#">Inicio</a>
            {dropdownData.map((dropdown, index) => (
                <Dropdown key={index} level={dropdown.level} items={dropdown.items} />
            ))}
        </section>
    );
};

export default MenuDesplegable;
