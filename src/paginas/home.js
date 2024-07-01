
import Header from "../componentes/header/header"
import imagenUpiita from "./UPIITA_letras.jpg"
import CursoVista from "../componentes/cursoVista/cursoVista"
import Materias from "../componentes/Materias/materias";
import React from "react";
function Home({user}) {
    return (
        <div>
            <Header/>
            <h1 className="welcomeText">¡Bienvenidos a nuestra página de tutorías!</h1>
            <img
                className="welcomeImage"
                src={imagenUpiita}
                alt="UPIITA"
            />

            {user ? (
                <h2>Bienvenido, {user.name}</h2>
            ) : (
                <h2>Por favor, inicia sesión o regístrate.</h2>
            )}

        </div>
    );
}

export default Home;