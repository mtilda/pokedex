import React from 'react';
import './PokemonData.css';

const PokemonData = ({pokemon}) => {
    console.log('pokemon - ', pokemon)
    if(pokemon.name) {
        return (
            <div className='pokemon-data'>
                <img className='pokemon-data-sprite' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className='pokemon-data-name'>{pokemon.name}</div>
                <div className='pokemon-data-types'>
                    {pokemon.types.map( (slot, index) => {
                        return (
                            <div className={`pokemon-data-types-slot type-${slot.type.name}`} key={index}>{slot.type.name}</div>
                        );
                    })}
                </div>
                <div className='pokemon-data-height'>{'height: '+pokemon.height}</div>
                <div className='pokemon-data-weight'>{'weight: '+pokemon.weight}</div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default PokemonData;