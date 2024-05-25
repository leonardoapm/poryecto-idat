import React from 'react';
import Articulo from './Articulo.jsx';

function ListaArticulos({ articulos }) {
  return (
    <div className="lista-articulos">
      {articulos.map((articulo, index) => (
        <Articulo key={index} {...articulo} />
      ))}
    </div>
  );
}

export default ListaArticulos;
