import React from 'react';
import './cadastrar.css';
import armazenLogo from "../../assets/warehouse.png";
import { useNavigate } from 'react-router-dom';
import { registrar } from "../../services/api";

const Cadastrar = () => {

    const nomeRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const confirmarRef = React.useRef();

    const navigate = useNavigate();

    const validate = (pass, confirm) => {
        if (pass === confirm) return true;
        else return false;
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log({
            nome: nomeRef.current.value,
            email: emailRef.current.value,
            senha: passwordRef.current.value,
            SenhaConfirmada: confirmarRef.current.value
        })

        if (validate(passwordRef.current.value, confirmarRef.current.value)) {
            registrar(
                nomeRef.current.value,
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate('/');
        }

    }

    return (
        <div className="container-cadastro-all">
            <h2 style={{ color: 'white', fontSize: '2em' }}><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogoCad' />GENIAL</h2>
            <div className='containerCadastro'>
                <div className='container_innerCadastro'>
                    <div className='formulario-cad'>
                        <h1>Cadastre-se</h1>
                        <form onSubmit={onSubmit}>

                            <div className="floating-label-group-cadastro">
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control-cadastro"
                                    ref={nomeRef}
                                    autoFocus required />
                                <label className="floating-label-cadastro">Nome</label>
                            </div>

                            <div className="floating-label-group-cadastro">
                                <input
                                    type="email"
                                    id="username"
                                    className="form-control-cadastro"
                                    ref={emailRef}
                                    autoFocus required />
                                <label className="floating-label-cadastro">Email</label>
                            </div>

                            <div className="floating-label-group-cadastro">
                                <input
                                    type="password"
                                    id="username"
                                    className="form-control-cadastro"
                                    ref={passwordRef}
                                    autoFocus required />
                                <label className="floating-label-cadastro">Senha</label>
                            </div>

                            <div className="floating-label-group-cadastro">
                                <input
                                    type="password"
                                    id="username"
                                    className="form-control-cadastro"
                                    ref={confirmarRef}
                                    autoFocus required />
                                <label className="floating-label-cadastro">Confirmar Senha</label>
                            </div>

                            <button className='entrar-button-cadastro' type='submit'>CADASTRAR</button>

                        </form>
                        <div className='footer-cadastro'>
                            <button className='button-voltar' type='submit' onClick={() => { navigate('/') }}>Voltar</button>
                        </div>
                    </div>
                    <div className='direita'>
                        <h1 className='main_title' style={{ paddingLeft: '55px', fontWeight: "350", color: 'white', fontSize: '45px' }}>Armazenar é <br></br> Bom,<br></br> Organizar é <br></br> <strong><em>Genial</em></strong></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastrar;
