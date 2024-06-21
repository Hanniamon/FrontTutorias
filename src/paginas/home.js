
import Header from "../componentes/header/header";
import CursoVista from "../componentes/cursoVista/cursoVista"
function Home({user}) {
    return (
        <div>
            <Header/>
            <ul>
            <CursoVista/>
            <CursoVista/>
            </ul>
            {user ? (
                <h2>Bienvenido, {user.name}</h2>
            ) : (
                <h2>Por favor, inicia sesión o regístrate.</h2>
            )}

        </div>
    );
}

export default Home;