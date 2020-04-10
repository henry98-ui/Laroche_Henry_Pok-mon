import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllPokemons from './all_pokemons/AllPokemons';
import OnePokemon from './one_pokemon/OnePokemon';
import Error from './error/Error';
import Header from './header/Header'

function App() {
 
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">

          <Switch>
            <Route exact path="/" component={AllPokemons} />
            <Route exact path={"/pokemon/:name"} component={OnePokemon} />
            <Route path="/" component={Error} />
          </Switch>

        </div>
      </Router>



    </div>
  );
}

export default App;
