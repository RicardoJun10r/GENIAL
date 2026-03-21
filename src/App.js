import { User } from './hooks/user-hook';
import Rotas from './routes/routes';

function App() {
  return (
    <main className="app-shell">
      <div aria-hidden className="liquid-background">
        <span className="liquid-blob blob-one" />
        <span className="liquid-blob blob-two" />
        <span className="liquid-blob blob-three" />
      </div>
      <div className="app-content">
        <User>
          <Rotas />
        </User>
      </div>
    </main>
  );
}

export default App;
