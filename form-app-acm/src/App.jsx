import "./index.css";
import FormularioValidado from "./components/FormularioValidado";
import FormularioExp from "./components/FormularioExp";
import FormularioVarios from "./components/FormularioVarios";

function App() {
  return (
    <>
      <div className="app">
        <h1>Formularios con useState y validación</h1>
        <h2>Henry Alberto Rivera Ochoa - 20202020092</h2>
        <section>
          <h2>1. Formulario simple (validado)</h2>
          <FormularioValidado />
        </section>
        <section>
          <h2>2. Formulario ejemplo (nombre + email)</h2>
          <FormularioExp />
        </section>
        <section>
          <h2>3. Formulario varios campos</h2>
          <FormularioVarios />
        </section>
      </div>
    </>
  );
}

export default App;
