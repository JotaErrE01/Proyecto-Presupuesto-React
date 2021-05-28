import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Mensaje from './Mensaje';

const Formulario = ({setGasto, setExisteGasto}) => {

    const [obj, setObj] = useState({
        nombre: '',
        cantidad: 0
    });

    const [alerta, setAlerta] = useState(false);

    //cuando el usuario agrega un gasto 
    const agregarGasto = (e) => {
        e.preventDefault();

        //transfomar a entero
        obj.cantidad = parseInt(obj.cantidad);

        const {nombre, cantidad} = obj; 

        //validar
        if(!nombre.trim() || isNaN(cantidad) || cantidad < 1){
            setAlerta(true);
            return;
        }

        setAlerta(false);

        //construir el gasto
        const gasto = {nombre, cantidad, id: nanoid()};
        setGasto(gasto);
        setExisteGasto(true);

        //resetear el form
        obj.nombre = '';
        obj.cantidad = 0;
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gasto Aquí</h2>
            {alerta ? <Mensaje msj={'Ambos campos son obligatorios'}/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={obj.nombre}
                    onChange={e => setObj({...obj, nombre: e.target.value})}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Ej. 400"
                    value={obj.cantidad}
                    onChange={e => setObj({...obj, cantidad: e.target.value})}
                />
            </div>
            <input 
                type="submit" 
                className="button-primary u-full-width"    
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setExisteGasto: PropTypes.func.isRequired
}
 
export default Formulario;
