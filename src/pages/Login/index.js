import { useState } from 'react';
import './style.css';

function Login() {

    const[cont, setCont] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function onSubmit(e)
    {
        e.preventDefault();

        setCont(cont+1);
        console.log(cont);
        console.log(email);
        console.log(senha);
        setEmail('');
        setSenha('');
    }

    return(
        <div>
           <div className='container'>
                <div className='container_inner'>
                    <div className='sloga'>
                        {/*Lado esquerdo*/}
                        <h1>Armazenar é bom, organizar é genial</h1>
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
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Login;