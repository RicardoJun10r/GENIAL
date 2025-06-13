import React from 'react';
import './login.css';
import armazenLogo from "../../assets/warehouse.png";
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';

function Login() {

    const [user, setUser] = React.useState(null);
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
        if (user) return navigate('/home');
    }, [user])

    return (
        <div className='container'>
            <div>
                <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: '2em' }}><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogo' />GENIAL</h2>
            </div>
            <div className='container_inner'>
                <div className='slogan'>
                    <h1 style={{ fontWeight: "350", paddingLeft: '55px', fontSize: '45px', color: 'white' }}>
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
                        <Link to={'/cadastrar'}>Registre-se</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
