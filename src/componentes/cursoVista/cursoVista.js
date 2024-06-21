import './cursoVista.css';
import ecuacionesImg from './ecuaciones.png';

const CursoVista = () =>{
    return(
        <ul className="videos__container">
            <li className="videos__item">
                <img
                    className="portada"
                    src={ecuacionesImg}
                    alt="Ecuaciones"
                />
                <div className="descripcion-video">
                    <div className="detalles__video">
                        <h3 className="curso-titulo">Ecuaciones diferenciales</h3>
                        <p className="curso-profesor">Un curso por Carlos Cruz</p>
                        <p className="curso-descripcion">Aprende los conceptos básicos de algebra lineal</p>
                        <p className="curso-alumnos">20 alumnos inscritos</p>
                        <button type="submit">Inscribir</button>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default CursoVista;