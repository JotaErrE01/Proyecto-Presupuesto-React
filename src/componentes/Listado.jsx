import Gasto from "./Gasto";
import PropTypes from 'prop-types';

const Listado = ({gastos, eliminarGasto}) =>  ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        <div className={gastos.length > 3 ? "overlay" : null }>
        {gastos.map( gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                eliminarGasto={eliminarGasto}
            />
        ))}
        </div>
    </div>
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;