import './App.css';
import {Routes,Route} from "react-router-dom"
//import NotFound from "./paginas/NotFound";
import Home2 from "./paginas/home2";
import FormCurso from "./paginas/formCurso"
//import NavIcons from "./componentes/header/NavIcons";
//import Header from "./componentes/header/header";
import SignUp from "./paginas/signup";
//import Micurso from "./componentes/Micurso/micurso";
import Login from "./paginas/login";
import React from "react";



const App = ()=> {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home2 />} />
                <Route path="formCurso" element={<FormCurso/>} />
                <Route path="signup" element={<SignUp/>} />
                <Route path="login" element={<Login/>} />
            </Routes>
        </div>
    );
}
export default App;
