import './home.css';
import React from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../../components/Card/card';
import { UserContext } from '../../hooks/user-hook';
import { getUserStorages } from '../../services/api';

const STORAGE_UPDATED_EVENT = 'genial:storage-updated';

function formatStorageDate(storage) {
  const dateValue = storage?.updatedAt || storage?.createdAt;

  if (!dateValue) {
    return 'Sem data de atualização';
  }

  try {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(dateValue));
  } catch {
    return 'Data inválida';
  }
}

function Home() {
  const { user } = React.useContext(UserContext);
  const [storages, setStorages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const loadStorages = React.useCallback(async () => {
    if (!user?.id) {
      setError('Sessão inválida: não foi possível identificar o usuário. Faça login novamente.');
      setStorages([]);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await getUserStorages(user.id);
      setStorages(Array.isArray(response) ? response : []);
    } catch (requestError) {
      setError(requestError.message || 'Não foi possível buscar os armazéns.');
      setStorages([]);
    } finally {
      setIsLoading(false);
    }
  }, [user?.id]);

  React.useEffect(() => {
    loadStorages();
  }, [loadStorages]);

  React.useEffect(() => {
    function handleStorageRefresh() {
      loadStorages();
    }

    window.addEventListener(STORAGE_UPDATED_EVENT, handleStorageRefresh);

    return () => {
      window.removeEventListener(STORAGE_UPDATED_EVENT, handleStorageRefresh);
    };
  }, [loadStorages]);

  return (
    <div className="home-container">
      <h1 className="home-title">Seus Armazéns</h1>

      {isLoading && <p className="home-hint">Carregando armazéns...</p>}

      {error && (
        <p aria-live="polite" className="form-error-message" role="alert">
          {error}
        </p>
      )}

      <div className="painel">
        {!isLoading && !error && storages.length > 0
          ? storages.map((inventario) => (
              <Card
                content={inventario.description}
                foot={formatStorageDate(inventario)}
                handleFunction={() => navigate(`/produtos/${inventario.id}`)}
                key={inventario.id}
                titulo={inventario.name}
              />
            ))
          : null}

        {!isLoading && !error && storages.length === 0 ? (
          <p className="home-empty">Você ainda não tem nenhum armazém cadastrado.</p>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
