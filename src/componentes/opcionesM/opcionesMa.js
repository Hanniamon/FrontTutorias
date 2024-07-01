import "./opcionesMa.css"

const OpcionesMateria = (props) =>{
    //Método map -> arreglo.map(materia, index) =>{
    //return <option></option>})


    const manejarCambio=(e)=>{
        console.log("cambio",e)
        props.actualizarMaterias(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Categoría: </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value=" " disabled defaultValue="" hidden>Seleccionar materia </option>
            { props.materias.map((materias,index)=>{
                return<option key={index}>{materias}</option>
            })}
        </select>
    </div>
}

export default OpcionesMateria;