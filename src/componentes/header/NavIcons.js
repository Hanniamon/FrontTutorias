import React from 'react';
import "./header.css"
import {Link, Outlet} from "react-router-dom";
//Esta es la barra para cuando el usuario se encuentra dentro
const NavIcons = ({user,setUser}) => {

    return (
        <div className="cabecera__iconos__item">

            { user ? (
                <>
                    <Link to="/formCurso" className="cabecera__cursos">Mis tutorías</Link>
                    <Link to="/" className="cabecera__notificaciones">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                        </svg>
                    </Link>
                    <Link to="/" className="cabecera__a">Bienvenido {user.nombre}</Link>
                    <Link to="/login" className="cabecera__a">Cerrar sesión</Link>
                </>
            ) : (
                <Link to="/login" className="cabecera__a">Iniciar sesión</Link>
            )}
            <Outlet/>

        </div>

    );
};

export default NavIcons;
