import React from 'react';
import "./signup.css"
//import Login from "./login";
//import {Route, Routes} from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
//import Home from "./home";
//import FormCurso from "./formCurso";

const SignUp = () => {
    return (
        <section className="sectionInicio">
            <div className="login-form active">
                <h2 className="h2Inicio">Registrate</h2>
                <form className="formInicio" action="#">
                    <label className="labelInicio" htmlFor="name">Nombre completo:</label>
                    <input type="text" id="name" name="name" required/>
                    <label className="labelInicio" htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required/>
                    <label className="labelInicio" htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required/>
                    <button className="buttonInicio" type="submit">Registrarse</button>
                    {/*<a href="#">¿Olvidaste tu contraseña?</a>*/}


                    <Link to="/login">¿Ya tienes una cuenta?</Link>
                    <Outlet/>

                </form>
            </div>
        </section>


    );
}

export default SignUp;