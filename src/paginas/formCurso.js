import React, {useState} from 'react';
import FormularioCursos from "../componentes/formulario/formularioCursos";
import Micurso from "../componentes/Micurso/micurso";
import Header from "../componentes/header/header";
import Materias from "../componentes/Materias/materias";
const FormCurso= () => {

    const [mostrarFormulario,actualizarMostrar]=useState(true)
//ternario --> condicion ? semuuestra : no se muestra
    const cambiarMostrar =()=>{
        actualizarMostrar(!mostrarFormulario)
    }
//Lista de equipos
    const materias = [
        {
            titulo:"Programación",
            colorPrimario:"#c8a0e1",
            colorSecundario:"#9349d8"
        }
        ,


        "Electronica",
        "Cálculo",
        "Humanidades",
        "Comunicaciones",
        "Física"
    ]


    return (
        <div>
            <Header></Header>
            { mostrarFormulario === true ? <FormularioCursos/> :<> </>}

            <Micurso cambiarMostrar={cambiarMostrar}></Micurso>
            <Materias materias="Programación"/>
            <Materias materias="Cálculo"/>
            <Materias materias="Física"/>
            <Materias materias="Electronica"/>
            <Materias materias="Humanidades"/>
            <Materias materias="Comunicaciones"/>
        </div>
    );
}

export default FormCurso;