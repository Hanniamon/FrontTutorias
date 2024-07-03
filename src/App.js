import './App.css';
import {Routes,Route} from "react-router-dom"
import Logout from './componentes/cerrarSesion/CerrarSesion';
import Home from "./paginas/home";
import FormCurso from "./paginas/formCurso"
import SignUp from "./paginas/signup";
import Login from "./paginas/login";
import React from "react";
import {useState} from "react";



const App = ()=> {
    const [user, setUser] = useState(null);
    return(
        <div>
            <Routes>

                <Route path="formCurso" element={<FormCurso/>} />
                <Route path="signup"  element={<SignUp setUser={setUser} />}/>
                <Route path="login" element={<Login setUser={setUser} />}/>

                <Route path="/" element={<Home user={user} />} />
            </Routes>
        </div>
    );
}
export default App;
