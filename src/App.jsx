import { useState } from 'react'
import Formulario from './componentes/Formulario';
import Pregunta from "./componentes/Pregunta";

function App() {

  const [persupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? 
            <Pregunta 
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            /> : 
            <div className="row">
              <div className="one-half column">
                <Formulario />
              </div>
              <div className="one-half column">
                2
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;