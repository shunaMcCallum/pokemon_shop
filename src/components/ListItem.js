import React from 'react';
import './ListItem.css';

const ListItem = ({ pokemon, onPokemonClick }) => {

    const handleClick = () => {
      onPokemonClick(pokemon)
    }

  return (
    <div >
      <div><img onClick={handleClick} src={pokemon.sprites.front_default} alt="pokemon" />
        <p>{pokemon.name}</p>
      </div>
    </div>
    );

}

export default ListItem;