import './criar-armazem.css';
import React from 'react';
import { deleteProduct, updateProduct } from '../../services/api';

const EMPTY_PRODUCT = {
  id: '',
  name: '',
  description: '',
  sector: '',
  value: '',
  quantidade: '',
};

function mapProduct(product) {
  if (!product) return EMPTY_PRODUCT;

  return {
    id: product.id || '',
    name: product.name || '',
    description: product.description || '',
    sector: product.sector || '',
    value: product.value ?? '',
    quantidade: product.quantidade ?? '',
  };
}

export const VerProduto = ({ produto, onUpdated, onDeleted }) => {
  const [produtoSelecionado, setProdutoSelecionado] = React.useState(mapProduct(produto));
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  React.useEffect(() => {
    setProdutoSelecionado(mapProduct(produto));
    setError('');
    setSuccessMessage('');
  }, [produto]);

  function handleChange(event) {
    const { id, value } = event.target;

    setProdutoSelecionado((previous) => ({
      ...previous,
      [id]: value,
    }));
  }

  async function handleUpdate(event) {
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const updatedProduct = await updateProduct(produtoSelecionado);
      setSuccessMessage('Produto atualizado com sucesso.');

      if (onUpdated) {
        await onUpdated(updatedProduct);
      }
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível atualizar o produto.');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!produtoSelecionado?.id) {
      setError('Produto inválido para exclusão.');
      return;
    }

    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      await deleteProduct(produtoSelecionado.id);
      setSuccessMessage('Produto excluído com sucesso.');

      if (onDeleted) {
        await onDeleted(produtoSelecionado.id);
      }
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível excluir o produto.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!produto) {
    return <p className="product-view-empty">Nenhum produto selecionado.</p>;
  }

  return (
    <section className="criar-armazem-container">
      <div className="criar-armazem-header">
        <h1>Detalhes do Produto</h1>
      </div>
      <form className="criar-armazem-form" onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Nome do Produto</label>
          <input
            className="form-input"
            id="name"
            onChange={handleChange}
            required
            type="text"
            value={produtoSelecionado.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição do Produto</label>
          <input
            className="form-input"
            id="description"
            onChange={handleChange}
            required
            type="text"
            value={produtoSelecionado.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Setor do Produto</label>
          <input
            className="form-input"
            id="sector"
            onChange={handleChange}
            required
            type="text"
            value={produtoSelecionado.sector}
          />
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
            value={produtoSelecionado.value}
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
            value={produtoSelecionado.quantidade}
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
          <button className="button-editar" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Salvando...' : 'Editar'}
          </button>
          <button
            className="button-excluir"
            disabled={isSubmitting}
            onClick={handleDelete}
            type="button"
          >
            Excluir
          </button>
        </div>
      </form>
    </section>
  );
};
