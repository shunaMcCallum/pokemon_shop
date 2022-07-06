import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = ({pokemon}) => {

    const { id } = useParams();

    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="pokemon" />
            <h3>{pokemon.name}</h3>
            <p><b>ID: </b>{pokemon.id}</p>
            <p><b>Height: </b>{pokemon.height}</p>
        </div>
    )
}

export default PokemonDetail;