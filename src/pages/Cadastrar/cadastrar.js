import React from "react";
import { useRef } from 'react';
import './cadastrar.css';
import armazenLogo from "../../assets/warehouse.png";
import { useNavigate } from 'react-router-dom';

const Cadastrar = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmarRef = useRef();

    const navigate = useNavigate();

    function onSubmit(e)
    {
        e.preventDefault();

        console.log({
            email: emailRef.current.value,
            senha: passwordRef.current.value,
            SenhaConfirmada: confirmarRef.current.value 
        })
        navigate('/'); 
    }
    return(
            <div className="container-cadastro-all">
                <h2 style={{color:'white', fontSize:'2em'}}><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogoCad'/>GENIAL</h2>
                <div className='containerCadastro'>
                    <div className='container_innerCadastro'>
                        <div className='formulario-cad'>
                            <h1>Cadastre-se</h1>
                            <form onSubmit={onSubmit}>
                                <label className='email-label-cadastro'>
                                    <p style={{fontWeight: 'bolder'}}>Usuáro</p>
                                    <input 
                                        className='email-input-cadastro' 
                                        type='email'
                                        ref={emailRef}
                                    />
                                </label>
                                <label className='senha-label-cadastro'>
                                    <p style={{fontWeight: 'bolder'}}>Senha</p>
                                    <input 
                                        className='senha-input-cadastro' 
                                        type='password'
                                        autoComplete='off'
                                        ref={passwordRef}
                                    />
                                </label>
                                <label className='senha-label-cadastro'>
                                    <p style={{fontWeight: 'bolder'}}>Confirmar senha</p>
                                    <input 
                                        className='senha-input-cadastro' 
                                        type='password' 
                                        autoComplete='off'
                                        ref={confirmarRef}
                                    />
                                </label>
                                <br />
                                <br />
                                <button className='entrar-button-cadastro' type='submit'>CADASTRAR</button>
                            </form> 
                            <div className='footer-cadastro'>
                                <button className='button-voltar' type='submit' onClick={() => {navigate('/')}}>Voltar</button>
                            </div>
                        </div>
                        
                        <div className='direita'> 
                            <h1 className='main_title' style={{paddingLeft: '55px', fontWeight:"350", color: 'white', fontSize:'45px'}}>Armazenar é <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong></h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Cadastrar;