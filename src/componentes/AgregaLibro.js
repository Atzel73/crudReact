import React from 'react';
import FormularioDeLibro from './FormularioDeLibro.js';

const AgregaLibro = ({ history, libros, setLibros }) => {
  const handleOnSubmit = (libro) => {
    setLibros([libro, ...libros]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <FormularioDeLibro handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AgregaLibro;