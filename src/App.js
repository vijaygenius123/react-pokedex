import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'

import './App.css';


function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route path="/:pokemonId" component={(props) => <Pokemon {...props} />} />
    </Switch>
  );
}

export default App;
