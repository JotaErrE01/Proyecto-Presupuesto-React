import {useState} from 'react';
import Mensaje from './Mensaje';

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {

    //definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //función que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value));
    }

    //Submit para prevenir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(isNaN(cantidad) || cantidad < 1){
            setError(true);
            return;
        }

        //si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }

    return ( 
        <>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Mensaje msj={'El presupuesto es incorrecto'}/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    min="0"
                    onChange={definirPresupuesto}
                />
                
                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    );
}
 
export default Pregunta;