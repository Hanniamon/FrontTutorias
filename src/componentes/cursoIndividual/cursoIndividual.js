//colaborador
import "./cursoIndividual.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombreTutoria, foto,profesor, descripcion, materia } = props.datos
    const { colorPrimario, eliminarColaborador } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombreTutoria} />
        </div>
        <div className="info">
            <h4>{nombreTutoria}</h4>
            <h5>{profesor}</h5>
            <h5>{descripcion}</h5>
        </div>
    </div>
}

export default Colaborador