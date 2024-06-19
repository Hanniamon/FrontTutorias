import "./opcionesMa.css"

const OpcionesMateria = () =>{
    //Método map -> arreglo.map(materia, index) =>{
    //return <option></option>})
    const materias = [
        "Estructura de datos",
        "Algebra linea",
        "Ecuaciones diferenciales"
    ]

    return <div className="lista-opciones">
        <label>Materias</label>
        <select>
            { materias.map((materias,index)=>{
                return<option key={index}>{materias}</option>
            })}
        </select>
    </div>
}

export default OpcionesMateria;