import './App.css';
import {Routes,Route} from "react-router-dom"
//import NotFound from "./paginas/NotFound";
import Home from "./paginas/home";
import FormCurso from "./paginas/formCurso"
//import NavIcons from "./componentes/header/NavIcons";
//import Header from "./componentes/header/header";
import SignUp from "./paginas/signup";




const App = ()=> {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="formCurso" element={<FormCurso/>} />
                <Route path="signup" element={<SignUp/>} />

            </Routes>
        </div>
    );
}
export default App;
