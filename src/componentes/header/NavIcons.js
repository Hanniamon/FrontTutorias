import React from 'react';
import "./header.css"
import {Link, Outlet} from "react-router-dom";
//import FormCurso from "../../paginas/formCurso";
//import SignUp from "../../paginas/signup";
//Esta es la barra para cuando el usuario se encuentra dentro
const NavIcons = () => {
    return (
        <div className="cabecera__iconos__item">
            <Link to="/formCurso" className="cabecera__cursos">Mis tutorías</Link>
            <Link to="/" className="cabecera__notificaciones"></Link>
            <Link to="/signup" className="cabecera__a">Iniciar sesion</Link>
            <Outlet/>

        </div>

);
};

export default NavIcons;
