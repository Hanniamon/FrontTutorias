import React, {useState} from 'react';
import "./formulario.css";
import CampoTexto from "../CampoTexto/campoTexto";
import OpcionesMateria from "../opcionesM/opcionesMa";
import Boton from "../boton/boton";
const FormularioCursos= () => {

    const [nombre, actualizarNombre]=useState("")
    const [imagen, actualizarImagen]=useState("")
    const [profesion, actualizarProfesion]=useState("")
    const [descripcion, actualizarDescripcion]=useState("")
    const [materias,actualizarMaterias]=useState("")


    const manejarEnvio=(e)=>{
        e.preventDefault()
        console.log("Manejar el envio")
        let datosaEnviar={
            nombre,
            imagen,
            profesion,
            descripcion
        }
        console.log(datosaEnviar)
        //e-> es evento
    }



    return (<section className="formularioCurso">
        <form onSubmit={manejarEnvio}>
            <h2 >Crear nuevo curso</h2>
            <CampoTexto titulo="Nombre:"
                        placeholder="Ingresa el nombre del curso"
                        required
                        valor={nombre}
                        actualizarValor={actualizarNombre}
            />
            <CampoTexto titulo="Imagen:"
                        placeholder="Ingresa el enlace de foto"
                        required
                        valor={imagen}
                        actualizarValor={actualizarImagen}
            />
            <CampoTexto titulo="Profesor:"
                        placeholder="Nombre de quien imparte el curso"
                        required
                        valor={profesion}
                        actualizarValor={actualizarProfesion}
            />
            <CampoTexto titulo="Descripcion: "
                        placeholder="Agrega una descripción"
                        required
                        valor={descripcion}
                        actualizarValor={actualizarDescripcion}
            />
            <OpcionesMateria
                valor={materias}
                actualizarMaterias={actualizarMaterias}

            />
            <Boton>
                Crear
            </Boton>

        </form>
    </section>);
}

export default FormularioCursos;