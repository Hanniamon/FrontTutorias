import { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        // Elimina los datos del usuario de localStorage
        localStorage.removeItem('usuario');
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = '/login'; // Cambia '/login' a la ruta de tu página de inicio de sesión
    }, []);

    return null;
};

export default Logout;
