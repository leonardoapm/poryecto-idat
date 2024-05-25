import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header({ onSearch, onAddArticle, onSelectCategory }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <header className="Header">
      <h1 className="Title">Almacen de Tienda</h1>
      <div className="HeaderControls">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={handleSearch}
          className="SearchInput"
        />
        <button onClick={() => onSelectCategory('')}>Todos</button>
        <button onClick={() => onSelectCategory('sala')}>Sala</button>
        <button onClick={() => onSelectCategory('cocina')}>Cocina</button>
        <button onClick={() => onSelectCategory('bano')}>Baño</button>
        <button onClick={() => onSelectCategory('dormitorio')}>Dormitorio</button>
        <button className="icon-button" onClick={onAddArticle}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </header>
  );
}

export default Header;
