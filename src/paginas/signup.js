import React from 'react';
import "./signup.css"
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
const SignUp = ({ setUser }) => {
    const [nombre, setNombre] = useState("");
    const [correoInstitucional, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nombre === "" || correoInstitucional === "" || contrasena === "") {
            setError(true);
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nombre, email: correoInstitucional, password: contrasena }),
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
                setError(false);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        }
    };

    return (
        <section className="sectionInicio">

            <div className="login-form active">
                <Link to="/" ><h1 className="logo__item">Tutorías UPIITA</h1></Link>
                <h2 className="h2Inicio">Registrate</h2>
                <form className="formInicio" onSubmit={handleSubmit}>
                    <label className="labelInicio" htmlFor="name">Nombre completo:</label>
                    <input type="text"
                           value={nombre}
                           onChange={e => setNombre(e.target.value)}
                           id="name"
                           name="name"
                           required/>
                    <label className="labelInicio" htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        value={correoInstitucional}
                        onChange={e => setCorreo(e.target.value)}
                        id="email"
                        name="email"
                        required
                    />
                    <label className="labelInicio" htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={contrasena}
                        onChange={e => setContrasena(e.target.value)}
                        name="password"
                        required/>

                    <Link to="/">
                        <button className="buttonInicio" type="submit">Registrarse</button>
                    </Link>
                    {/*<a href="#">¿Olvidaste tu contraseña?</a>*/}


                    <Link to="/login">¿Ya tienes una cuenta?</Link>
                    <Outlet/>

                </form>
                {error && <p>Todos los campos son obligatorios o hubo un error en el registro</p>}

            </div>
        </section>


    );
}

export default SignUp;