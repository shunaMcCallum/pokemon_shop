import React from 'react';
import ListItem from './ListItem';
import './ListItem.css'
import { Link } from "react-router-dom";

const PokemonList = ({pokemonList, onPokemonClick}) => {

    const pokemonNodes = pokemonList.map((pokemon, index) => {
        return (
            <Link to={`/pokemon/${pokemon.id}`}>
                <ListItem key={index} pokemon={pokemon} onPokemonClick={onPokemonClick} />
            </Link>
        )
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