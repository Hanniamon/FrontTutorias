import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Logout = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Limpiar el estado del usuario
        setUser(null);
        // Eliminar el estado de la sesión del localStorage
        localStorage.removeItem('loggedIn');
        // Redirigir al usuario a la página principal o de login
        navigate('/');
    }, [setUser, navigate]);

    return null;
};

export default Logout;
