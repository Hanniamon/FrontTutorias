import Header from "../componentes/header/header"
import imagenUpiita from "./UPIITA_letras.jpg"
import React, { useContext } from "react";
import { UserContext } from '../UserContext';

function Home() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <Header />
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
