import React from "react";
import { useState } from "react";
import './cadastrar.css';
import armazenLogo from "../../assets/warehouse.png";

const Cadastrar = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');

    console.log("alo")

    function onSubmit(e)
    {
        e.preventDefault();

        setEmail('');
        setSenha('');
        setConfirmar('');
    }

    return(
            <div className="container-cadastro-all">
                <h2 style={{color:'white', fontSize:'2em'}}><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogoCad'/> GENIAL</h2>
                <div className='containerCadastro'>
                    <div className='container_innerCadastro'>
                        <div className='esquerda'>
                            <h1>Cadastre-se</h1>
                            <br />
                            <form onSubmit={onSubmit}>
                                <label className='email-label-cadastro'>
                                    <p style={{fontWeight: 'bolder'}}>Usuáro</p>
                                    <input 
                                        className='email-input-cadastro' 
                                        type='email'
                                        defaultValue={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <br />
                                <label className='senha-label-cadastro'>
                                    <p style={{fontWeight: 'bolder'}}>Senha</p>
                                    <input 
                                        className='senha-input-cadastro' 
                                        type='password'
                                        defaultValue={senha} 
                                        autoComplete='off'
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                    </label>
                                <br />

                                <label className='senha-label-cadastro'>
                                    <p style={{fontWeight: 'bolder'}}>Confirmar senha</p>
                                    <input 
                                        className='senha-input-cadastro' 
                                        type='password' 
                                        defaultValue={confirmar}
                                        autoComplete='off'
                                        onChange={(e) => setConfirmar(e.target.value)}
                                    />
                                </label>
                                <br />
                                <br />
                                <button className='entrar-button-cadastro' type='submit'>CADASTRAR</button>
                            </form> 
                        </div>
                        
                        <div className='direita'> 
                            <h1 className='main_title' style={{fontWeight:"350"}}>Armazenar é <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong></h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Cadastrar;