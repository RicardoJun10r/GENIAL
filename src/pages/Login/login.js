import './login.css';
import React from 'react';
import armazenLogo from "../../assets/warehouse.png";
import { Link, useNavigate } from 'react-router';
import { login } from '../../services/api';
import { UserContext } from '../../hooks/user-hook';

function Login() {

    const { user, setUser } = React.useContext(UserContext);
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
        try {
            const res = await login(emailRef.current.value, passwordRef.current.value);
            setUser(res);
        } catch (err) {
            console.error("Erro no login:", err);
        }
    }

    React.useEffect(() => {
        if (user) {
            return navigate('/')
        };
    }, [user])

    return (
        <div className='login-container'>
            <div>
                <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: '2em' }}><img src={armazenLogo} alt='ArmazenLogo' />GENIAL</h2>
            </div>
            <div className='login-wrapper'>
                <div style={{ backgroundColor: '#32726e' }}>
                    <h1 style={{ fontWeight: "350", paddingLeft: '55px', fontSize: '45px', color: 'white' }}>
                        Armazenar é
                        <br></br> Bom,<br></br> Organizar é <br></br> <strong><em>Genial</em></strong>
                    </h1>
                </div>
                <div className='login-form'>
                    <h1>Log in</h1>
                    <br />
                    <form onSubmit={onSubmit}>
                        <div className="login-form-fields">
                            <label htmlFor='email'>
                                <p>E-mail</p>
                            </label>
                            <input
                                type="text"
                                id="email"
                                ref={emailRef}
                                autoFocus required />
                        </div>
                        <div className="login-form-fields">
                            <label htmlFor='password'>
                                <p>Password</p>
                            </label>
                            <input
                                type="password"
                                id="password"
                                ref={passwordRef}
                                autoComplete="off"
                                required />
                        </div>
                        <button className='login-button-submit' type='submit'>Entrar</button>
                    </form>
                    <br />
                    <div className='login-footer'>
                        <p>Não tem uma conta? <Link style={{ textDecoration: 'none' }} className='link-to-sign-up' to={'/cadastrar'}>Registre-se</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
