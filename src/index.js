import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './routes/Home';
import Posicion from './routes/Posicion';
import Geocerca from './routes/Geocerca';
import Panico from './routes/Panico';
import Puerta from './routes/Puerta';
import Encendido from './routes/Encendido';
import Asignargeo from './routes/Asignargeo';
import Logins from './routes/Logins';
import User from './routes/User';
import createUsers from './routes/createUsers';
import AsignarDevice from './routes/AsignarDevice';

import createDevices from './routes/createDevices';
import editarUser from './routes/editarUser';
import editarDevice from './routes/editarDevice';

const app = document.getElementById('app')

// Render the main component into the dom
ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path="/home" component={Home} />
      <Route path="/posiciones" component={Posicion} />
        <Route path="/geocercas" component={Geocerca} />
          <Route path="/panicos" component={Panico} />
            <Route path="/puertas" component={Puerta} />
            <Route path="/powers" component={Encendido} />
            <Route path="/asignargeo" component={Asignargeo} />
            <Route path="/" component={Logins} />
            <Route path="users" component={User} />
            <Route path="createusers" component={createUsers} />
              <Route path="createdevices" component={createDevices} />
              <Route path="/editaruser/:id" component={editarUser} />
              <Route path="/asignardevice" component={AsignarDevice} />
              <Route path="/editdevice/:id" component={editarDevice} />
  </Router>
, app);
