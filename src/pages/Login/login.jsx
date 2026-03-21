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
      <h2 className="auth-brand">
        <img alt="Logo Genial" src={armazenLogo} />
        GENIAL
      </h2>

      <div className="login-wrapper glass-panel">
        <div className="auth-hero">
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

        <div className="login-form">
          <h1>Log in</h1>

          <form onSubmit={onSubmit}>
            <div className="login-form-fields">
              <label htmlFor="email">E-mail</label>
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
              <label htmlFor="password">Senha</label>
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

            <button
              className="login-button-submit glass-button"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Não tem uma conta?{' '}
              <Link className="link-to-sign-up" to="/cadastrar">
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
