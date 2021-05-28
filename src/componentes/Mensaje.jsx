import PropTypes from 'prop-types';

const Mensaje = ({msj}) =>  ( 
    <p className="alert alert-danger error">{msj}</p>
);

Mensaje.propTypes = {
    msj: PropTypes.string.isRequired,
}
 
export default Mensaje;