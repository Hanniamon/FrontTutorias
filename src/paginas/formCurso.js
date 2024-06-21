import React, {useState} from 'react';
import FormularioCursos from "../componentes/formulario/formularioCursos";
import Micurso from "../componentes/Micurso/micurso";
import Header from "../componentes/header/header";
const FormCurso= () => {

    const [mostrarFormulario,actualizarMostrar]=useState(true)
//ternario --> condicion ? semuuestra : no se muestra
    const cambiarMostrar =()=>{
        actualizarMostrar(!mostrarFormulario)
    }


    return (
        <div>
            <Header></Header>
            { mostrarFormulario === true ? <FormularioCursos/> :<> </>}

            <Micurso cambiarMostrar={cambiarMostrar}></Micurso>
        </div>
    );
}

export default FormCurso;