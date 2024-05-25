import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono de papelera
import './Articulo.css';

function Articulo({ id, nombre, descripcion, precio, imagen, onEdit, onDelete }) {
  return (
    <div className="Articulo">
      <img src={imagen} alt={nombre} className="ArticuloImagen" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <div className="botones">
        <button className="edit-button" onClick={() => onEdit(id)}>
          <FontAwesomeIcon icon={faPenSquare} />
        </button>
        <button className="delete-button" onClick={() => onDelete(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default Articulo;
