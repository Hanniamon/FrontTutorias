import "./micurso.css"
import mas from "./mas.png"
//import {useState} from "react";
const Micurso = (props)=>{
    //Estado -hooks
    console.log(props)
   // const [mostrar,actualizarMostrar]=useState(true)
    //const manejarClick=()=>{
      //  console.log("Mostrar/ocultar elemento",!mostrar)
       // actualizarMostrar(!mostrar)

    return (<section className="cursoSection">
        <h3 className="title">Mis cursos</h3>
        <img src={mas} alt="añadir" onClick={props.cambiarMostrar}/>
    </section>);
}
export default Micurso;