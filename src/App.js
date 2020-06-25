import React, {useState, useEffect} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import AllPokemon from './Components/AllPokemon/AllPokemon';
import CaughtPokemon from './Components/CaughtPokemon/CaughtPokemon'


import './App.css';

function App() {
  const [allPokemonList, updateAllPokemonList] = useState([]);
  const [caughtPokemon, updateCaughtPokemon] = useState([]);

  const fetchPokemonData = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name?name:'?offset=0&limit=100/'}`);
    const json = await res.json();
    if(!name) updateAllPokemonList(json.results);
    else return json;
  }

  const catchPokemon = (pokemon) => {
    const newCaughtPokemon = [pokemon, ...caughtPokemon];
    updateCaughtPokemon(newCaughtPokemon);
  }

  const releasePokemon = (index) => {
    const newCaughtPokemon = [...caughtPokemon.slice(0,index), ...caughtPokemon.slice(index+1)];
    updateCaughtPokemon(newCaughtPokemon);
  }

  useEffect(() => {
    fetchPokemonData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/all'>ALL</Link>
          <Link to='/caught'>CAUGHT</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/all' render={() => <AllPokemon allPokemonList={allPokemonList} fetchPokemonData={fetchPokemonData} catchPokemon={catchPokemon} />} />
        <Route path='/caught' render={() => <CaughtPokemon caughtPokemon={caughtPokemon} releasePokemon={releasePokemon} />} />
        <Route path='*' render={() => <Redirect to='/all' />} />
      </Switch>
    </div>
  );
}

export default App;
