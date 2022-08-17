import { useState } from 'react';
import './style.css';

const initialValues = {
    email: '',
    senha: '',
}

function Login() {

    const[values, setValues] = useState(initialValues);
    const[cont, setCont] = useState(0);

    function handleChange(e){
        const { name, value } = e.target;
        setValues({
            ...values, [name]: value
        });
    }
    function onSubmit(e)
    {
        e.preventDefault();

        setCont(cont+1);
        console.log(cont);
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
                            type="email"
                            id='email'
                            onChange={handleChange}
                            />
                            <br />
                            <br />
                            <label className='senha-label'>SENHA</label>
                            <br />
                            <input 
                            className='senha-input' 
                            type="password" 
                            id='senha'
                            autoComplete='off'
                            onChange={handleChange}
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