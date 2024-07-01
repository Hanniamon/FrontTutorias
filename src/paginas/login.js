import "./signup.css"
import {Link, Outlet} from "react-router-dom";
import React, {useState} from "react";
import axios from 'axios';
import Home2 from "./home2";



const Login = ( )=> {
    const [correoInstitucional, setCorreoInstitucional] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state

        try {
            const response = await axios.get('http://18.188.198.40:3000/api/profesores');
            const profesores = response.data;

            // Busca al profesor con el correo y la contraseña proporcionados
            const profesor = profesores.find(prof =>
                prof.correoInstitucional === correoInstitucional && prof.contraseña === contraseña
            );

            if (profesor) {
                // Guardar los datos del usuario en el estado global o localStorage
                console.log('Inicio de sesión exitoso:', profesor);
                // Redirigir al usuario a la página deseada, por ejemplo, el panel de control


            } else {
                setError('Correo o contraseña incorrectos');
            }
        } catch (err) {
            setError('Error al iniciar sesión');
            console.error('Error:', err);
        }
    };
    return (
        <section className="sectionInicio">

            <div className="login-form active">
               <Link to="/" ><h1 className="logo__item">Tutorías UPIITA</h1></Link>
                <h2 className="h2Inicio">Inicia sesión</h2>
                <form className="formInicio" onSubmit={handleLogin}>
                    <label className="labelInicio" htmlFor="email">Correo electrónico:</label>
                    <input type="email" value={correoInstitucional}  onChange={(e) => setCorreoInstitucional(e.target.value)} id="email" name="email"
                           required/>
                    <label className="labelInicio" htmlFor="password">Contraseña:</label>
                    <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}
                           id="password" name="password" required/>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Link to='/'><button className="buttonInicio" type="submit">Iniciar sesión</button></Link>
                    {/*<a href="#">¿Olvidaste tu contraseña?</a>*/}


                    <Link to="/signup">¿No tienes una cuenta?Regístrate</Link>
                    <Outlet/>

                </form>


            </div>

        </section>

    );
}

export default Login;