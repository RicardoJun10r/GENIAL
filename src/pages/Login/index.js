import { useState } from 'react';
import './style.css';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

    <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet"/>

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    function goToHome(e){
        navigate('/home');  // Tela despesas
    } 

    function onSubmit(e)
    {
        e.preventDefault();

        //--APAGAR--
        console.log(email);
        console.log(senha);
        //--APAGAR--

        setEmail('');
        setSenha('');
        goToHome();
    }

    return(
        <Container>
            <div>
                <div className='ArmazenLogo'>
                    <h2>
                        <img src={armazenLogo} alt='ArmazenLogo' className='img-logo'/>
                        Genial
                    </h2>
                </div>
                <div className='container'>
                    <div className='container_inner'>
                        <div className='sloga'>
                            {/*Lado esquerdo*/}
                            <h1 className='main_title' style={{fontWeight:"350", fontFamily:"'Fira Sans', sans-serif"}}>
                                Armazenar é 
                                <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong>
                            </h1>
                        </div>

                        <div className='container-form'>
                            {/*Lado direito*/}
                            <h1>Log in</h1>
                            <br />
                                <form onSubmit={onSubmit}>
                                    <label className='email-label'>
                                        <p>Usuário</p>
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
                                    <button className='entrar-button' type='submit'>ENTRAR</button>
                                </form>
                                <br />
                                <div>
                                    <p>Não tem uma conta?      
                                    <Link exact to="/cadastrar" className='link'>
                                        <strong> Registre-se</strong>
                                    </Link></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;