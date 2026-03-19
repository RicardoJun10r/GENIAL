import './criar-armazem.css';
import React from 'react';
import { useParams } from 'react-router';
import { addProduct } from '../../services/api';

export const CriarProduto = ({ storageId: propStorageId, onSuccess }) => {
  const params = useParams();
  const storageId = propStorageId || params.id;

  const [form, setForm] = React.useState({
    name: '',
    description: '',
    sector: '',
    value: '',
    quantidade: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  function handleChange(event) {
    const { id, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [id]: value,
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const product = await addProduct(
        storageId,
        form.name,
        form.description,
        form.sector,
        form.value,
        form.quantidade,
      );

      setForm({
        name: '',
        description: '',
        sector: '',
        value: '',
        quantidade: '',
      });

      setSuccessMessage('Produto criado com sucesso.');

      if (onSuccess) {
        onSuccess(product);
      }
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível criar o produto.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="criar-armazem-container">
      <div className="criar-armazem-header">
        <h1>Criar Produto</h1>
      </div>
      <div>
        <form className="criar-armazem-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome do Produto</label>
            <input className="form-input" id="name" onChange={handleChange} required value={form.name} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição do Produto</label>
            <textarea
              className="form-textarea"
              id="description"
              onChange={handleChange}
              required
              value={form.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sector">Setor do Produto</label>
            <input className="form-input" id="sector" onChange={handleChange} required value={form.sector} />
          </div>
          <div className="form-group">
            <label htmlFor="value">Valor do Produto</label>
            <input
              className="form-input"
              id="value"
              min="0"
              onChange={handleChange}
              required
              step="0.01"
              type="number"
              value={form.value}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantidade">Quantidade do Produto</label>
            <input
              className="form-input"
              id="quantidade"
              min="0"
              onChange={handleChange}
              required
              step="1"
              type="number"
              value={form.quantidade}
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
