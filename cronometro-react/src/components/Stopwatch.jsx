import { useState, useEffect } from "react";

function Stopwatch({ goHome }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Efecto para actualizar cada segundo
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup para evitar intervalos múltiples
    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePause = () => setIsRunning(false);
  const handleResume = () => setIsRunning(true);
  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // Formato mm:ss
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h2>{formatTime(seconds)}</h2>
      <div className="controls">
        {isRunning ? (
          <button className="btn pause" onClick={handlePause}>
            Pausar
          </button>
        ) : (
          <button className="btn resume" onClick={handleResume}>
            Reanudar
          </button>
        )}
        <button className="btn reset" onClick={handleReset}>
          Reiniciar
        </button>
        <button className="btn home" onClick={goHome}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
