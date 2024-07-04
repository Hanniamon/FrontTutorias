import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({setUser}) => {
    const navigate = useNavigate();


    useEffect(() => {

        localStorage.removeItem('user');

        setUser(null);
        navigate('/login');

    }, [navigate, setUser]);

    return null;
};

export default Logout;
