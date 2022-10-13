import { useState } from 'react';
import './login.css';
import armazenLogo from "../../assets/warehouse.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div className='containerAll'>
            <h2 style={{color: 'white', fontWeight:'bolder', fontSize:'2em'}}><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogo' /> GENIAL</h2>
                <div className='containerLogin'>
                    <div className='container_inner'>
                        <div className='sloga'>
                            {/*Lado esquerdo*/}
                            <h1 className='main_title' style={{fontWeight:"350", fontFamily:"'Fira Sans', sans-serif"}}>
                                Armazenar é 
                                <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong>
                            </h1>
                        </div>

                        <div className='container-form-login'>
                            {/*Lado direito*/}
                            <h1>Log in</h1>
                            <br />
                                <form onSubmit={onSubmit}>
                                    <label className='email-label-login'>
                                        <p style={{fontWeight:'bolder'}}>Usuário</p>
                                        <input 
                                            className='email-input-login' 
                                            type='email'
                                            id='email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        </label>
                                        <br />
                                        <br />
                                        <label className='senha-label-login'>
                                        <p style={{fontWeight:'bolder'}}>Senha</p>
                                        <input 
                                            className='senha-input-login' 
                                            type='password' 
                                            id='senha'
                                            autoComplete='off'
                                            value={senha}
                                            onChange={e => setSenha(e.target.value)}
                                        />
                                        </label>
                                        <br />
                                        <br />                    
                                    <button className='entrar-button-login' type='submit'>ENTRAR</button>
                                </form>
                                <br />
                                <div>
                                    <p>Não tem uma conta?     
                                    <Link to="/cadastrar" className='linkLogin' style={{color: '#165551', fontWeight: 'bolder'}}>
                                        Registre-se
                                    </Link></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;