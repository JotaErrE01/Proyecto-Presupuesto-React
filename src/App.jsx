import { useState, useEffect } from 'react'
import ControlPresupuesto from './componentes/ControlPresupuesto';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Pregunta from "./componentes/Pregunta";

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [existeGasto, setExisteGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if(existeGasto){
      //agregar el nuevo presupuesto
      setGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //resetear a false
      setExisteGasto(false);
    }
  }, [gasto, existeGasto, gastos, restante])

  //Eliminar gastos
  const eliminarGasto = ({id, cantidad}) => {
    setGastos(gastos.filter(gasto => gasto.id !== id));

    const presupuestoRestante = restante + parseInt(cantidad);
    setRestante(presupuestoRestante);
  }

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
                <Formulario 
                  setGasto={setGasto}
                  setExisteGasto={setExisteGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                  eliminarGasto={eliminarGasto}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
