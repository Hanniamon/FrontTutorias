import "./signup.css"
import {Link, Outlet} from "react-router-dom";
import React, {useState} from "react";
//import Signup from "./signup";
export function Login ({setUser}) {
    //const [nombre,setNombre]=useState("")
    const [correo,setCorreo]=useState("")
    const [contrasena,setContrasena]=useState("")
    const [error,setError]=useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if (correo=== ""|| contrasena===""){
            setError(true)
            return
        }
        setError(false)
        setUser([correo])
    }
    return (
        <section className="sectionInicio">
            <div className="login-form active">
                <h2 className="h2Inicio">Inicia sesión</h2>
                <form className="formInicio" onSubmit={handleSubmit}>
                    <label className="labelInicio" htmlFor="email">Correo electrónico:</label>
                    <input type="email" value={correo}  onChange={e=>setCorreo(e.target.value)} id="email" name="email" required/>
                    <label className="labelInicio" htmlFor="password">Contraseña:</label>
                    <input type="password" value={contrasena} onChange={e=>setContrasena(e.target.value)} id="password" name="password" required/>
                    <button className="buttonInicio" type="submit">Iniciar sesión</button>
                    {/*<a href="#">¿Olvidaste tu contraseña?</a>*/}


                    <Link to="/signup">¿No tienes una cuenta?Regístrate</Link>
                    <Outlet/>

                </form>
                {error && <p>Todos los campos son obligatorios</p>}
            </div>
        </section>

    );
}

export default Login;