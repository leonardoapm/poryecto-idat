import React, { useState } from 'react';

function FormularioArticulo({ agregarArticulo }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevoArticulo = {
      nombre,
      descripcion,
      precio: parseFloat(precio),
      imagen
    };
    agregarArticulo(nuevoArticulo);
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setImagen('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input 
          type="text" 
          value={descripcion} 
          onChange={(e) => setDescripcion(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Precio:</label>
        <input 
          type="number" 
          value={precio} 
          onChange={(e) => setPrecio(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Imagen URL:</label>
        <input 
          type="text" 
          value={imagen} 
          onChange={(e) => setImagen(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Añadir Artículo</button>
    </form>
  );
}

export default FormularioArticulo;
