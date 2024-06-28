import "./opcionesMa.css"

const OpcionesMateria = (props) =>{
    //Método map -> arreglo.map(materia, index) =>{
    //return <option></option>})
    const materias = [
        "Programación",
        "Electronica",
        "Cálculo",
        "Humanidades",
        "Comunicaciones",
        "Física"
    ]


    const manejarCambio=(e)=>{
        console.log("cambio",e)
        props.actualizarMaterias(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Categoría: </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value=" " disabled defaultValue="" hidden>Seleccionar materia </option>
            { materias.map((materias,index)=>{
                return<option key={index}>{materias}</option>
            })}
        </select>
    </div>
}

export default OpcionesMateria;