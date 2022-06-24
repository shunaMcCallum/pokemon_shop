import React from 'react';

const PokemonDetail = ({pokemon}) => {

    return (
        <div>
            <h3>{pokemon.name}</h3>
            <p><b>ID: </b>{pokemon.id}</p>
            <p><b>Height: </b>{pokemon.height}</p>
        </div>
    )
}

export default PokemonDetail;