import PropTypes from 'prop-types';

const Gasto = ({gasto, eliminarGasto}) => ( 
    <li className="gastos">
        <div className="gastos-listados">
            <p>
                {gasto.nombre} <span>${gasto.cantidad}</span>
            </p>
            <button 
                onClick={() => {eliminarGasto(gasto)}}
                className="eliminar-gasto"
            >X</button>
        </div>
    </li>
)

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;