import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../componentes/Header';
import AgregaLibro from '../componentes/AgregaLibro';
import ListaDeLibros from '../componentes/ListaDeLibros';

const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={ListaDeLibros} path="/" exact={true} />
            <Route component={AgregaLibro} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;