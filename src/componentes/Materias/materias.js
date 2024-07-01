import "./materias.css"
import Colaborador from "../cursoIndividual/cursoIndividual";
//mi equipo
const Materias=(props)=>{

    const {colorPrimario, colorSecundario,titulo} =props.datos
    const { colaboradores, eliminarColaborador } = props
    const obj= {
        backgroundColor:colorPrimario
    }
    console.log(colaboradores.length > 0)
    const estiloTitulo={borderColor:colorSecundario}

    return <>
        {
            colaboradores.length > 0 &&
            <section className="categoriaMateria" style={obj}>
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="cursosIndividuales">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />)
                    }
            </div>
        </section>}
            </>


}
export default Materias