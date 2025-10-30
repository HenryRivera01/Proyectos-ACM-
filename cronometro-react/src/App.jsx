import { useState } from "react";
import Stopwatch from "./components/Stopwatch";
import "./index.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-container">
      {page === "home" ? (
        <div className="home">
          <h1>Cronómetro React ⏱️</h1>
          <button className="btn" onClick={() => setPage("cronometro")}>
            Iniciar
          </button>
          <p>Henry Rivera - 20202020092</p>
        </div>
      ) : (
        <Stopwatch goHome={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
