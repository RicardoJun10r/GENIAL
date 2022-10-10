import React from "react";
import { useState } from "react";
import './cadastrar.css';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


const Cadastrar = () => {

    <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet"/>

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [cont, setCont] = useState(0);

    function validarSenha(senha, confirmar)
    {
        if(senha === confirmar)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function onSubmit(e)
    {
        e.preventDefault();

        //--APAGAR--
        console.log(email);
        console.log(senha);
        console.log(confirmar);
        //--APAGAR--

        if(validarSenha(senha, confirmar))
        {
            setCont(cont+1);
            console.log(cont);
        }

        setEmail('');
        setSenha('');
        setConfirmar('');
    }

    return(
        <Container>
            <div>
            {/* pulando linhas com br para texto com icone genial poder aparecer na tela */}
            <br></br>
            <br></br>
            <br></br>
                <Row>
                    <Col xs={12} md={8}>
                        <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogoCad' /> Genial</h2>
                    </Col>
                </Row>
              
                <div className='container'>
                    <div className='container_innerCadastro'>
                        <div className='esquerda'>
                            {/*Lado esquerdo*/}
                            <h1>Cadastre-se</h1>
                            <br />
                            <form onSubmit={onSubmit}>
                                <label className='email-label'>
                                <p>Usuáro</p>
                                <input 
                                    className='email-input' 
                                    type='email'
                                    id='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                </label>
                                <br />
                                <br />
                                <label className='senha-label'>
                                <p>Senha</p>
                                <input 
                                    className='senha-input' 
                                    type='password' 
                                    id='senha'
                                    autoComplete='off'
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
                                </label>
                                <br />
                                <br />

                                <label className='senha-label'>
                                <p>Confirmar senha</p>
                                <input 
                                    className='senha-input' 
                                    type='password' 
                                    id='senha'
                                    autoComplete='off'
                                    value={confirmar}
                                    onChange={e => setConfirmar(e.target.value)}
                                />
                                </label>
                                <br />
                                <br />
                                <button className='entrar-button' type='submit'>CADASTRAR</button>
                            </form> 
                            <div className="voltar">
                                    <b>      
                                    <Link exact to="/" className='link'>
                                        <strong> Voltar</strong>
                                    </Link></b>
                                </div>
                        </div>
                        
                        <div className='direita'> 
                            {/*Lado direito*/}
                            <h1 className='main_title' style={{fontWeight:"350"}}>Armazenar é <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Cadastrar;