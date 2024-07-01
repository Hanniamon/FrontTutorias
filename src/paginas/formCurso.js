import React, {useState} from 'react';
import FormularioCursos from "../componentes/formulario/formularioCursos";
import Micurso from "../componentes/Micurso/micurso";
import Header from "../componentes/header/header";
import Materias from "../componentes/Materias/materias";
///////Esta es mi app
const FormCurso= () => {

    const [mostrarFormulario,actualizarMostrar]=useState(true)
    const [colaboradores, actualizarColaboradores] = useState([{
        materias: "Programación",
        nombreTutoria: "Estructura de datos",
        foto: "https://0701.static.prezi.com/preview/v2/kdhhjpotyuj25icwkad2dlwrcd6jc3sachvcdoaizecfr3dnitcq_3_0.png",
        profesor: "Julio Galvan",
        descripcion:"Bienvenido al curso de estructura de datos"
    },
        {
            materias: "Comunicaciones",
            nombreTutoria: "Comunicaciones digitales",
            foto: "https://www.researchgate.net/profile/Fabricio-Bradaschia/publication/321906450/figure/fig2/AS:631655282778133@1527609763375/Figura-215-Resultado-de-simulacao-do-ZSI-controlado-pela-tecnica-de-maximo-boost-com_Q320.jpg",
            profesor: "Rojas Beltrán",
            descripcion:"Esta tutoría se centra en los principios y técnicas fundamentales de las comunicaciones digitales. "
        },
        {
            materias: "Electrónica",
            nombreTutoria: "Diseño digital",
            foto: "https://th.bing.com/th/id/OIP.-FG0_UcmiXNYUsiJt2PFZQHaEo?rs=1&pid=ImgDetMain",
            profesor: "Abraham Rivera",
            descripcion:"Los estudiantes aprenderán sobre circuitos lógicos, diseño de sistemas digitales, y la implementación de dispositivos electrónicos."
        },
        {
            materias: "Calculo",
            nombreTutoria: "Ecuaciones diferenciales",
            foto: "https://4.bp.blogspot.com/-whHN4K8gk40/WYH7pVs5TOI/AAAAAAAANis/KDbtcwAS7xs4-K5CwF4OPvzb0eJqOvoeQCLcBGAs/w1200-h630-p-k-no-nu/ecuaciones-diferenciales-conceptos-basicos-www.teofiloteves.com.jpg",
            profesor: "Jannette Moguel",
            descripcion:"Bienvenido al curso de ecuaciones. Se estudiarán técnicas de solución, tanto analíticas como numéricas, y se aplicarán a problemas reales."
        },
        {
            materias: "Humanidades",
            nombreTutoria: "Liderazgo y emprendedores",
            foto: "https://noticiaspueblabla.com/wp-content/uploads/2022/02/liderazgo-lider.jpg",
            profesor: "Francisco Ledezma",
            descripcion:"Bienvenido al curso de Liderazgo"
        },
        {
            materias: "Fisica",
            nombreTutoria: "Fundamentos de física",
            foto: "https://tutorialesenpdf.com/wp-content/uploads/2019/01/fisica-tutorial-pdf.jpg",
            profesor: "Victor Barrera",
            descripcion:"Esta tutoría cubre los conceptos básicos y fundamentales de la física, incluyendo mecánica, termodinámica, electromagnetismo y óptica."
        }])

//ternario --> condicion ? semuuestra : no se muestra
    const cambiarMostrar =()=>{
        actualizarMostrar(!mostrarFormulario)
    }
    const registrarColaborador = (colaborador) => {
        console.log("Nuevo colaborador", colaborador)
        //Spread operator
        actualizarColaboradores([...colaboradores, colaborador])
    }

    //Eliminar colaborador
    const eliminarColaborador = () => {
        console.log("Eliminar colaborador")
    }

//Lista de materias
    const materias = [
        {
            titulo:"Programación",
            colorPrimario:"rgba(230,194,255,0.85)",
            colorSecundario:"#7900ea"
        },
        {   titulo: "Comunicaciones",
            colorPrimario:"#fbc6f8",
            colorSecundario:"#fa18eb"
        }
        ,
        {   titulo:"Electronica",
            colorPrimario:"#e0fad4",
            colorSecundario:"#00f629"
        },
        {   titulo:"Cálculo",
            colorPrimario:"#ffffc5",
            colorSecundario:"#e8d800"
        },
        {   titulo: "Humanidades",
            colorPrimario:"#bbcfff",
            colorSecundario:"#2d3be8"
        },
        {   titulo: "Física",
            colorPrimario:"#ffb4b4",
            colorSecundario:"#f30d49"
        }
    ]


    return (
        <div>
            <Header></Header>
            { mostrarFormulario && <FormularioCursos
                materias={materias.map((materias)=>materias.titulo)}
                registrarColaborador={registrarColaborador}
            />
            }

            <Micurso cambiarMostrar={cambiarMostrar}></Micurso>
            {
                materias.map((materias) => <Materias
                    datos={materias}
                    key={materias.titulo}
                    colaboradores={colaboradores.filter(colaborador => colaborador.materias === materias.titulo)}
                    eliminarColaborador={eliminarColaborador}
                    />
                )
            }


        </div>
    );
}

export default FormCurso;