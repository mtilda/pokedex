import React from 'react';
import PokemonData from '../PokemonData/PokemonData'
import'./CaughtPokemon.css'
const CaughtPokemon = ({caughtPokemon, releasePokemon}) => {
    return (
        <div className='caught-pokemon-container'>
            {caughtPokemon.map( (pokemon, index) => {
                return (
                    <PokemonData key={index} pokemon={pokemon} />
                )
            })}
        </div>
    )
}

export default CaughtPokemon;