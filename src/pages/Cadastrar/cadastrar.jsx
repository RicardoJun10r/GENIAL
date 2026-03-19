import './cadastrar.css';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import armazenLogo from '../../assets/warehouse.png';
import { registrar } from '../../services/api';

const Cadastrar = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    setError('');

    if (password !== confirmarSenha) {
      setError('As senhas precisam ser iguais.');
      return;
    }

    setIsSubmitting(true);

    try {
      await registrar(nome, email, password);
      navigate('/login', { replace: true });
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível concluir o cadastro.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="sign-up-container">
      <div>
        <h2 style={{ color: 'white', fontSize: '2em' }}>
          <img alt="Logo Genial" src={armazenLogo} />
          GENIAL
        </h2>
      </div>
      <div className="sign-up-wrapper">
        <div className="sign-up-form">
          <h1>Cadastre-se</h1>
          <form onSubmit={onSubmit}>
            <div className="sign-up-form-fields">
              <label className="floating-label-cadastro" htmlFor="username">
                <p>Nome</p>
              </label>
              <input
                autoFocus
                id="username"
                onChange={(event) => setNome(event.target.value)}
                required
                type="text"
                value={nome}
              />
            </div>
            <div className="sign-up-form-fields">
              <label className="floating-label-cadastro" htmlFor="email">
                <p>E-mail</p>
              </label>
              <input
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                value={email}
              />
            </div>
            <div className="sign-up-form-fields">
              <label className="floating-label-cadastro" htmlFor="password">
                <p>Senha</p>
              </label>
              <input
                autoComplete="new-password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
            </div>
            <div className="sign-up-form-fields">
              <label className="floating-label-cadastro" htmlFor="confirm-password">
                <p>Confirmar Senha</p>
              </label>
              <input
                autoComplete="new-password"
                id="confirm-password"
                onChange={(event) => setConfirmarSenha(event.target.value)}
                required
                type="password"
                value={confirmarSenha}
              />
            </div>

            {error && (
              <p aria-live="polite" className="form-error-message" role="alert">
                {error}
              </p>
            )}

            <button className="sign-up-submit" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Cadastrando...' : 'CADASTRAR'}
            </button>
          </form>
          <div className="sign-up-footer">
            <p>
              Ja possui conta ? <Link style={{ textDecoration: 'none' }} to="/login">Voltar</Link>
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#32726e' }}>
          <h1 style={{ marginLeft: '55px', fontWeight: '350', color: 'white', fontSize: '45px' }}>
            Armazenar é
            <br />
            Bom,
            <br />
            Organizar é
            <br />
            <strong>
              <em>Genial</em>
            </strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cadastrar;
