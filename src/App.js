import { User } from "./hooks/user-hook";
import Rotas from "./routes/routes";

function App() {
  return (
    <main>
      <User>
        <Rotas />
      </User>
    </main>
  );
}

export default App;
