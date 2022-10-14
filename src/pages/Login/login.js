import { useRef } from 'react';
import './login.css';
import armazenLogo from "../../assets/warehouse.png";
import { useNavigate } from 'react-router-dom';

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();


    function goToHome(e){
        navigate('/home'); 
    }

    function onSubmit(e)
    {
        e.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
        goToHome();
    }

    return(
        <div className='containerAll'>
            <h2 style={{color: 'white', fontWeight:'bolder', fontSize:'2em'}}><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogo' />GENIAL</h2>
                <div className='containerLogin'>
                    <div className='container_inner'>
                        <div className='sloga'>
                            <h1 className='main_title' style={{fontWeight:"350", paddingLeft: '55px', fontSize: '45px'}}>
                                Armazenar é 
                                <br></br> bom,<br></br> organizar é <br></br> <strong><em>genial</em></strong>
                            </h1>
                        </div>

                        <div className='container-form-login'>
                            <h1>Log in</h1>
                            <br />
                            <form onSubmit={onSubmit}>
                                <label className='email-label-login'>
                                    <p style={{fontWeight:'bolder'}}>Usuário</p>
                                    <input 
                                        className='email-input-login' 
                                        type='email'
                                        id='emailLogin'
                                        ref={emailRef}
                                    />
                                    </label>
                                    <br />
                                    <br />
                                    <label className='senha-label-login'>
                                    <p style={{fontWeight:'bolder'}}>Senha</p>
                                    <input 
                                        className='senha-input-login' 
                                        type='password' 
                                        id='senhaLogin'
                                        autoComplete='off'
                                        ref={passwordRef}
                                    />
                                    </label>
                                    <br />
                                    <br />                    
                                <button className='entrar-button-login' type='submit'>ENTRAR</button>
                            </form>
                            <br />
                            <div className='footer-login'>
                                <p>Não tem uma conta?</p>
                                <button className='button-registrar' type='submit' onClick={() => {navigate('/cadastrar')}}>Registre-se</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;