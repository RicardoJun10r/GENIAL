import { useState } from 'react';
import './style.css';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function onSubmit(e)
    {
        e.preventDefault();

        //--APAGAR--
        console.log(email);
        console.log(senha);
        //--APAGAR--

        setEmail('');
        setSenha('');
    }

    return(
        <Container>
            <div>
                <div>
                    <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmazenLogo' /> Genial</h2>
                </div>
                <div className='container'>
                    <div className='container_inner'>
                        <div className='sloga'>
                            {/*Lado esquerdo*/}
                            <h1 className='main_title'>Armazenar é <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong></h1>
                        </div>

                        <div className='container-form'>
                            {/*Lado direito*/}
                            <h1>Log in</h1>
                                <form>
                                    <label className='email-label'>USUÁRIO</label>
                                        <br />
                                        <input 
                                            className='email-input' 
                                            type='email'
                                            id='email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                        <label className='senha-label'>SENHA</label>
                                        <br />
                                        
                                        <input 
                                            className='senha-input' 
                                            type='password' 
                                            id='senha'
                                            autoComplete='off'
                                            value={senha}
                                            onChange={e => setSenha(e.target.value)}
                                        />
                                        <br />
                                        <br />
                                    <button className='entrar-button' type='submit' onClick={onSubmit}>ENTRAR</button>
                                </form>
                                <br />
                                <div className='link'>
                                    <b>Não tem uma conta?      
                                    <Link exact to="/cadastrar" className='link'>
                                        <strong> Registre-se</strong>
                                    </Link></b>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;