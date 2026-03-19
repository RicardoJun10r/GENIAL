import './produtos.css';
import React from 'react';
import { Link, useParams } from 'react-router';
import Forms from '../../components/Formularios/forms';
import { Modal } from '../../components/Modal/modal';
import { getStorageById } from '../../services/api';

function currencyBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value || 0));
}

const Produtos = () => {
  const { id } = useParams();

  const [storage, setStorage] = React.useState({ products: [] });
  const [produto, setProduto] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [verProduto, setVerProduto] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetchProducts = React.useCallback(async () => {
    if (!id) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await getStorageById(id);
      setStorage({
        ...response,
        products: Array.isArray(response?.products) ? response.products : [],
      });
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível carregar os produtos.');
      setStorage({ products: [] });
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const closeVerProduto = () => {
    setProduto(null);
    setVerProduto(false);
  };

  const openVerProduto = (selectedProduct) => {
    setProduto(selectedProduct);
    setVerProduto(true);
  };

  const handleStorageUpdated = async () => {
    await fetchProducts();
    setModal(false);
    setVerProduto(false);
  };

  return (
    <div className="produtos-container">
      <div className="produtos-header">
        <h1>Produtos</h1>
        <div>
          <button onClick={() => setModal(true)} type="button">
            Adicionar produto
          </button>
          <Link
            style={{
              backgroundColor: 'white',
              padding: '8px 4px 8px 4px',
              borderRadius: '5px',
              textDecoration: 'none',
              color: 'black',
            }}
            to="/"
          >
            Voltar
          </Link>
        </div>
      </div>

      <div className="produtos-content">
        <div>
          <h2>{storage.name || 'Armazém'}</h2>
          <p>{storage.description}</p>
        </div>

        {isLoading && <p>Carregando produtos...</p>}

        {error && (
          <p aria-live="polite" className="form-error-message" role="alert">
            {error}
          </p>
        )}

        <Modal open={modal} close={() => setModal(false)}>
          <Forms.AdicionarProduto onSuccess={handleStorageUpdated} storageId={id} />
        </Modal>

        <Modal open={verProduto} close={() => closeVerProduto()}>
          <Forms.VisualizarProduto
            onDeleted={handleStorageUpdated}
            onUpdated={handleStorageUpdated}
            produto={produto}
          />
        </Modal>

        {!isLoading && storage.products.length === 0 ? (
          <p>Nenhum produto cadastrado neste armazém.</p>
        ) : null}

        {!isLoading && storage.products.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>SETOR</th>
                <th>VALOR</th>
                <th>QUANTIDADE</th>
                <th>AÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {storage.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.sector}</td>
                  <td>{currencyBRL(product.value)}</td>
                  <td>{product.quantidade}</td>
                  <td>
                    <button onClick={() => openVerProduto(product)} type="button">
                      Visualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Produtos;
