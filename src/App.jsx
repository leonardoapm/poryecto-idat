import React, { useState } from 'react';
import Header from './Header';
import ModalForm from './components/ModalForm';
import EditForm from './components/EditForm';
import Articulo from './components/Articulo';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [articulos, setArticulos] = useState([
    {
      id: uuidv4(),
      nombre: 'Sofá',
      descripcion: 'Un cómodo sofá de tres plazas.',
      precio: 200,
      imagen: 'https://www.rosen.com.pe/media/catalog/product/1/3/13018215-1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
      categoria: 'sala'
    },
    {
      id: uuidv4(),
      nombre: 'Inodoro',
      descripcion: 'Hecho de porcelana.',
      precio: 100,
      imagen: 'https://www.decorcenter.pe/medias/11031489-2-202303151745-Media-dcr800Wx800H?context=bWFzdGVyfHByb2R1Y3RzfDI2MzY2fGltYWdlL2pwZWd8cHJvZHVjdHMvaDNhL2gxOS9oMDAvOTYyMDQwODEwNzAzOC5qcGd8YjRkNjcwZWQ0MmI1ZGY1Y2U3NTJkOTE1OTQ5NzVhNzVhYTk2OGFlODAyMTc3ZGRiZTA4MGJkMWI2YzlkODNlOA',
      categoria: 'baño'
    },
    {
      id: uuidv4(),
      nombre: 'Lámpara de pie',
      descripcion: 'Una lámpara de pie moderna.',
      precio: 80,
      imagen: 'https://promart.vteximg.com.br/arquivos/ids/7350704-1000-1000/110388.jpg?v=638255829911100000',
      categoria: 'sala'
    },
    {
      id: uuidv4(),
      nombre: 'Cama',
      descripcion: '2 plazas',
      precio: 187,
      imagen: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_121223567_2955845_1?wid=800&hei=800&qlt=70',
      categoria: 'dormitorio'
    },
    {
      id: uuidv4(),
      nombre: 'Utencilios de cocina',
      descripcion: 'Un juego de 12 piezas',
      precio: 50,
      imagen: 'https://oechsle.vteximg.com.br/arquivos/ids/5475818-1000-1000/image-bdd783340eaa4970b41059d600bc224c.jpg?v=637701909617070000',
      categoria: 'cocina'
    }
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [articuloEdit, setArticuloEdit] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const agregarArticulo = (articulo) => {
    setArticulos([...articulos, { ...articulo, id: uuidv4() }]);
    setModalIsOpen(false);
  };

  const actualizarArticulo = (articuloActualizado) => {
    setArticulos(
      articulos.map((articulo) =>
        articulo.id === articuloActualizado.id ? articuloActualizado : articulo
      )
    );
    setEditModalIsOpen(false);
  };

  const eliminarArticulo = (id) => {
    setArticulos(articulos.filter(articulo => articulo.id !== id));
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openEditModal = (articulo) => {
    setArticuloEdit(articulo);
    setEditModalIsOpen(true);
  };
  const closeEditModal = () => setEditModalIsOpen(false);

  return (
    <div className="App">
      
      <Header 
        onSearch={handleSearch} 
        onAddArticle={openModal} 
        onSelectCategory={handleCategorySelect}
      />
      <div className="lista-articulos">
        {articulos
          .filter(articulo =>
            articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === '' || articulo.categoria === selectedCategory)
          )
          .map((articulo) => (
            <Articulo 
              key={articulo.id} 
              {...articulo} 
              onEdit={() => openEditModal(articulo)} 
              onDelete={() => eliminarArticulo(articulo.id)}
            />
          ))}
      </div>
      <ModalForm 
        agregarArticulo={agregarArticulo} 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
      />
      {articuloEdit && (
        <EditForm 
          articulo={articuloEdit}
          isOpen={editModalIsOpen} 
          onRequestClose={closeEditModal} 
          onUpdate={actualizarArticulo} 
        />
      )}
    </div>
  );
}

export default App;
