import './login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router';
import armazenLogo from '../../assets/warehouse.png';
import { UserContext } from '../../hooks/user-hook';
import { login } from '../../services/api';

function Login() {
  const { isAuthenticated, setAuthSession } = React.useContext(UserContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const auth = await login(email, password);
      setAuthSession(auth);
      navigate('/', { replace: true });
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível realizar o login.');
    } finally {
      setIsSubmitting(false);
    }
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-container">
      <div>
        <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: '2em' }}>
          <img alt="Logo Genial" src={armazenLogo} />
          GENIAL
        </h2>
      </div>
      <div className="login-wrapper">
        <div style={{ backgroundColor: '#32726e' }}>
          <h1 style={{ fontWeight: '350', paddingLeft: '55px', fontSize: '45px', color: 'white' }}>
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
        <div className="login-form">
          <h1>Log in</h1>
          <br />
          <form onSubmit={onSubmit}>
            <div className="login-form-fields">
              <label htmlFor="email">
                <p>E-mail</p>
              </label>
              <input
                autoComplete="email"
                autoFocus
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                value={email}
              />
            </div>
            <div className="login-form-fields">
              <label htmlFor="password">
                <p>Senha</p>
              </label>
              <input
                autoComplete="current-password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
            </div>

            {error && (
              <p aria-live="polite" className="form-error-message" role="alert">
                {error}
              </p>
            )}

            <button className="login-button-submit" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
          <br />
          <div className="login-footer">
            <p>
              Não tem uma conta?{' '}
              <Link className="link-to-sign-up" style={{ textDecoration: 'none' }} to="/cadastrar">
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
