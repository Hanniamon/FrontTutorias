
import Header from "../componentes/header/header"
import imagenUpiita from "./UPIITA_letras.jpg"
import { useHistory } from "react-router-dom"
import CursoVista from "../componentes/cursoVista/cursoVista"
import Materias from "../componentes/Materias/materias";
import React from "react";
function Home({user,setUser}) {




    return (
        <div>
            <Header user={user} setUser={setUser}/>
            <h1 className="welcomeText">¡Bienvenidos a nuestra página de tutorías!</h1>
            <img
                className="welcomeImage"
                src={imagenUpiita}
                alt="UPIITA"
            />

            {user ? (
                <h2>Bienvenido, {user.nombre}</h2>
            ) : (
                <h2>Por favor, inicia sesión o regístrate.</h2>
            )}

    </div>

    );
}

export default Home;