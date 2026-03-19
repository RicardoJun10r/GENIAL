import './criar-armazem.css';
import React from 'react';
import { UserContext } from '../../hooks/user-hook';
import { addStorageOnUser } from '../../services/api';

const STORAGE_UPDATED_EVENT = 'genial:storage-updated';

export const CriarArmazem = ({ onSuccess }) => {
  const { user } = React.useContext(UserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const storage = await addStorageOnUser(user?.id, name, description);
      setName('');
      setDescription('');
      setSuccessMessage('Armazém criado com sucesso.');

      window.dispatchEvent(new CustomEvent(STORAGE_UPDATED_EVENT));

      if (onSuccess) {
        onSuccess(storage);
      }
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível criar o armazém.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="criar-armazem-container">
      <div className="criar-armazem-header">
        <h1>Criar Armazém</h1>
      </div>
      <div>
        <form className="criar-armazem-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="armazem-nome">Nome do Armazém</label>
            <input
              className="form-input"
              id="armazem-nome"
              onChange={(event) => setName(event.target.value)}
              required
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="armazem-descricao">Descrição do Armazém (Opcional)</label>
            <textarea
              className="form-textarea"
              id="armazem-descricao"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </div>

          {error && (
            <p aria-live="polite" className="error-message" role="alert">
              {error}
            </p>
          )}

          {successMessage && (
            <p aria-live="polite" className="success-message" role="status">
              {successMessage}
            </p>
          )}

          <div className="form-actions">
            <button className="button-criar" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Criando...' : 'Criar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
