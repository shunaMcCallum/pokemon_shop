import React from 'react';
import ListItem from './ListItem';
import './ListItem.css'
import { Link } from "react-router-dom";

const PokemonList = ({pokemonList, onPokemonClick}) => {

    const pokemonNodes = pokemonList.map((pokemon, index) => {
        return (
            // this links to the route set up in App.js to show the individual Pokemon items within the Pokemon route
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