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
      <h2 className="auth-brand">
        <img alt="Logo Genial" src={armazenLogo} />
        GENIAL
      </h2>

      <div className="sign-up-wrapper glass-panel">
        <div className="sign-up-form">
          <h1>Cadastre-se</h1>
          <form onSubmit={onSubmit}>
            <div className="sign-up-form-fields">
              <label htmlFor="username">Nome</label>
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
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                value={email}
              />
            </div>
            <div className="sign-up-form-fields">
              <label htmlFor="password">Senha</label>
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
              <label htmlFor="confirm-password">Confirmar Senha</label>
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

            <button className="sign-up-submit glass-button" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          <div className="sign-up-footer">
            <p>
              Já possui conta? <Link to="/login">Voltar</Link>
            </p>
          </div>
        </div>

        <div className="auth-hero auth-hero-reverse">
          <h1>
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
