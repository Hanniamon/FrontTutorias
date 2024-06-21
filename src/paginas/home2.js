import Header from "../componentes/header/header";
import upiitaEdificio from "./UPIITA_letras.jpg"
function Home2() {

    return (
        <div>
            <Header></Header>
            <div className="text">
                <h1>A TU ALCANCE</h1>
                <h1>PROYECTO <span className="highlight">TECNOLÓGICO</span></h1>
                <p>Haz crecer tus conocimientos en esta plataforma</p>
                <button className="button">DESCÚBRELO</button>
            </div>
            <img src={upiitaEdificio} alt="UPIITA Building"/>


        </div>
    );
}

export default Home2;