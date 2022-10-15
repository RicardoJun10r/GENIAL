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
                                <br></br> Bom,<br></br> Organizar é <br></br> <strong><em>Genial</em></strong>
                            </h1>
                        </div>

                        <div className='container-form-login'>
                            <h1>Log in</h1>
                            <br />
                            <form onSubmit={onSubmit}>
                                <div className="floating-label-group-login">
                                    <input 
                                        type="text" 
                                        id="username" 
                                        className="form-control-login" 
                                        ref={emailRef}
                                        autoFocus required />
                                    <label className="floating-label-login">Email</label>
                                </div>
                                <div className="floating-label-group-login">
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="form-control-login" 
                                        ref={passwordRef}
                                        autoComplete="off" 
                                        required />
                                    <label className="floating-label-login">Password</label>
                                </div>
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