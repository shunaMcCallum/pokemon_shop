import React from 'react';
import ListItem from './ListItem';
import './ListItem.css'

const PokemonList = ({pokemonList, onPokemonClick}) => {

    const pokemonNodes = pokemonList.map((pokemon, index) => {
        return <ListItem key={index} pokemon={pokemon} onPokemonClick={onPokemonClick} />
    });

    return (
        <div>
            <h2>All Pokemon for Sale</h2>
            <div className="list-items">
                {pokemonNodes}
            </div>
        </div>
    );

}

export default PokemonList;