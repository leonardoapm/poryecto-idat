// src/components/BurgerMenu.jsx
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.css';

function BurgerMenu() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/sala">
        Sala
      </a>
      <a className="menu-item" href="/cocina">
        Cocina
      </a>
      <a className="menu-item" href="/bano">
        Baño
      </a>
      <a className="menu-item" href="/dormitorio">
        Dormitorio
      </a>
    </Menu>
  );
}

export default BurgerMenu;
