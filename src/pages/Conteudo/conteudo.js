import NavBar from '../../components/Navbar/Navbar';
import TableConteudo from "./TableConteudo";
import "./Compromissos.css";

function Conteudo() {

    return (
        <div className="fullscreen fundo">
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Compromissos</h1>
                </div>
                <div className="">
                    <TableConteudo/>
                </div>
                <footer className="position">
                    <h5>
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/" className="float-start">
                                <i class="bi bi-arrow-left-circle-fill"></i>
                                &nbsp;Voltar&nbsp;&nbsp;
                        </a>
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/registro-compromisso" className="float-start">
                                <i class="bi bi-plus-circle-fill"></i>
                                &nbsp;Agendar Novo Compromisso&nbsp;&nbsp;
                        </a>
                    </h5>
                </footer>
            </div>
        </div>
    )
}
export default Conteudo;