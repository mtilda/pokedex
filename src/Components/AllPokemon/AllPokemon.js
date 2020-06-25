import React, { useState } from 'react';
import PokemonData from '../PokemonData/PokemonData'
import './AllPokemon.css'

const AllPokemon = ({allList, fetchPokemonData, catchPokemon}) => {
    const [selectedPokemon, updateSelectedPokemon] = useState({});

    return (
        <div className='pokedex-all'>
            <div className='pokedex-all-list'>
                {allList.map( (pokemon, index) => {
                    return (
                        <button key={index} className='pokedex-all-list-item' onClick={ async ()=>updateSelectedPokemon(await fetchPokemonData(pokemon.name))}>
                            {pokemon.name}
                        </button>
                    )
                })}
            </div>
            {selectedPokemon.name?<div className='pokedex-all-data'>
                <PokemonData pokemon={selectedPokemon} />
                <button onClick={() => catchPokemon(selectedPokemon)}>CATCH</button>
            </div>:<></>}
        </div>
    )
}

export default AllPokemon;