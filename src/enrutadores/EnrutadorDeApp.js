import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../componentes/Header';
import AgregaLibro from '../componentes/AgregaLibro';
import ListaDeLibros from '../componentes/ListaDeLibros';
import usaAlmacenamientoLocal from '../hooks/usaAlmacenamientoLocal';


const EnrutadorDeApp = () => {
  const [libros, setLibros] = usaAlmacenamientoLocal('libros', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={ListaDeLibros} path="/" exact={true} />
            <Route
              render={(props) => (
                <AgregaLibro {...props} libros={libros} setLibros={setLibros} />
              )}
              path="/add"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;