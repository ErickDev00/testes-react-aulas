import Condicional from "./components/Condicional";
import OutraLista from "./components/OutraLista";
import "./styles.css";

export default function App() {
  const meusItens = ["React", "Vue", "Angular"];

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
      <OutraLista itens={meusItens} />
    </div>
  );
}
