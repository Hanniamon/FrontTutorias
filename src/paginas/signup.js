import React, { useState, useContext } from 'react';
import "./signup.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';

const SignUp = () => {
    const { setUser } = useContext(UserContext);
    const [nombre, setNombre] = useState("");
    const [correoInstitucional, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [descripcionProfesional, setDescripcionProfesional] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nombre === "" || correoInstitucional === "" || contrasena === "" || descripcionProfesional === "") {
            setError(true);
            return;
        }

        try {
            const response = await fetch('/api/profesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    correoInstitucional: correoInstitucional,
                    contraseña: contrasena,
                    Descripcion_profesional: descripcionProfesional
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
                setError(false);
                navigate('/'); // Redirigir a la ruta raíz
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
                           required />
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
                        required />
                    <label className="labelInicio" htmlFor="descripcionProfesional">Descripción Profesional:</label>
                    <input
                        type="text"
                        id="descripcionProfesional"
                        value={descripcionProfesional}
                        onChange={e => setDescripcionProfesional(e.target.value)}
                        name="descripcionProfesional"
                        required />
                    <button className="buttonInicio" type="submit">Registrarse</button>
                    <Link to="/login">¿Ya tienes una cuenta?</Link>
                    <Outlet />
                </form>
                {error && <p>Todos los campos son obligatorios o hubo un error en el registro</p>}
            </div>
        </section>
    );
}

export default SignUp;
