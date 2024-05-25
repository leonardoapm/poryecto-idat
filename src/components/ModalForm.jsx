import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './ModalForm.css';

Modal.setAppElement('#root');

function ModalForm({ agregarArticulo, isOpen, onRequestClose }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    agregarArticulo(data);
    reset();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Añadir Nuevo Artículo"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Añadir Nuevo Artículo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            {...register('nombre', { required: true })} 
          />
          {errors.nombre && <span>Este campo es requerido</span>}
        </div>
        <div>
          <label>Descripción:</label>
          <input 
            type="text" 
            {...register('descripcion', { required: true })} 
          />
          {errors.descripcion && <span>Este campo es requerido</span>}
        </div>
        <div>
          <label>Precio:</label>
          <input 
            type="number" 
            {...register('precio', { required: true })} 
          />
          {errors.precio && <span>Este campo es requerido</span>}
        </div>
        <div>
          <label>Imagen URL:</label>
          <input 
            type="text" 
            {...register('imagen', { 
              required: true, 
              pattern: {
                value: /^(https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*)$/,
                message: 'URL no válida'
              }
            })} 
          />
          {errors.imagen && <span>{errors.imagen.message}</span>}
        </div>
        <div>
          <label>Categoría:</label>
          <select {...register('categoria', { required: true })}>
            <option value="sala">Sala</option>
            <option value="cocina">Cocina</option>
            <option value="bano">Baño</option>
            <option value="dormitorio">Dormitorio</option>
          </select>
          {errors.categoria && <span>Este campo es requerido</span>}
        </div>
        <div className="button-container">
          <button type="submit">Añadir Artículo</button>
          <button type="button" onClick={onRequestClose}>Cancelar</button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalForm;

