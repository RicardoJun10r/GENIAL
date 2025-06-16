import './cadastrar.css';
import React from 'react';
import armazenLogo from "../../assets/warehouse.png";
import { Link, useNavigate } from 'react-router';
import { registrar } from "../../services/api";

const Cadastrar = () => {

    const nomeRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const confirmarRef = React.useRef();

    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        registrar(
            nomeRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            confirmarRef.current.value
        )
        navigate('/login');
    }

    return (
        <div className="sign-up-container">
            <div>
                <h2 style={{ color: 'white', fontSize: '2em' }}><img src={armazenLogo} alt='ArmazenLogo' />GENIAL</h2>
            </div>
            <div className='sign-up-wrapper'>
                <div className='sign-up-form'>
                    <h1>Cadastre-se</h1>
                    <form onSubmit={onSubmit}>
                        <div className="sign-up-form-fields">
                            <label htmlFor='username' className="floating-label-cadastro">
                                <p>Nome</p>
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={nomeRef}
                                autoFocus required />
                        </div>
                        <div className="sign-up-form-fields">
                            <label htmlFor='email' className="floating-label-cadastro">
                                <p>E-mail</p>
                            </label>
                            <input
                                type="email"
                                id="email"
                                ref={emailRef}
                                autoFocus required />
                        </div>
                        <div className="sign-up-form-fields">
                            <label htmlFor='password' className="floating-label-cadastro">
                                <p>Senha</p>
                            </label>
                            <input
                                type="password"
                                id="password"
                                ref={passwordRef}
                                autoFocus required />
                        </div>
                        <div className="sign-up-form-fields">
                            <label htmlFor='password' className="floating-label-cadastro">
                                <p>Confirmar Senha</p>
                            </label>
                            <input
                                type="password"
                                id="password"
                                ref={confirmarRef}
                                autoFocus required />
                        </div>
                        <button className='sign-up-submit' type='submit'>CADASTRAR</button>
                    </form>
                    <div className='sign-up-footer'>
                        <p>Ja possui conta ? <Link style={{ textDecoration: 'none' }} to={'/'}>Voltar</Link></p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#32726e' }}>
                    <h1 style={{ marginLeft: '55px', fontWeight: "350", color: 'white', fontSize: '45px' }}>Armazenar é <br></br> Bom,<br></br> Organizar é <br></br> <strong><em>Genial</em></strong></h1>
                </div>
            </div>
        </div>
    )
}

export default Cadastrar;
