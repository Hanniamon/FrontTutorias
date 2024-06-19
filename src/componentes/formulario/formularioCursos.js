import React from 'react';
import "./formulario.css"
import CampoTexto from "../CampoTexto/campoTexto";
import OpcionesMateria from "../opcionesM/opcionesMa";
import Boton from "../boton/boton";
const FormularioCursos= () => {

    const manejarEnvio=(e)=>{
        e.preventDefault()
        console.log("Manejar el envio",e)
        //e-> es evento
    }
    return (<section className="formularioCurso">
        <form onSubmit={manejarEnvio}>
            <h2 >Crear nuevo curso</h2>
            <CampoTexto titulo="Nombre:" placeholder="Ingresa el nombre del curso" required/>
            <CampoTexto titulo="Imagen:" placeholder="Ingresa el enlace de foto" required/>
            <CampoTexto titulo="Profesor:" placeholder="Nombre de quien imparte el curso" required />
            <CampoTexto titulo="Descripcion: " placeholder="Agrega una descripción" required/>
            <OpcionesMateria/>
            <Boton>
                Crear
            </Boton>

        </form>
    </section>);
}

export default FormularioCursos;