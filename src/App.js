import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./paginas/home";
import FormCurso from "./paginas/formCurso";
import SignUp from "./paginas/signup";
import Login from "./paginas/login";
import Logout from "./paginas/Logout";
import React from "react";
import { UserProvider } from './UserContext';
import Header from './componentes/header/header';

const App = () => {
    return (
        <UserProvider>
            <div>
                <Header />
                <Routes>
                    <Route path="formCurso" element={<FormCurso />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
