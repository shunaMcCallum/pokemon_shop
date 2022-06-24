import React from 'react';
import './ListItem.css'

const ListItem = ({ pokemon, onPokemonClick }) => {

    const handleClick = () => {
      onPokemonClick(pokemon.url)
    }

  return (
    <div >
      <div onClick={handleClick}><img src={pokemon.sprites.front_default}></img>
        <p></p>
        {pokemon.name}
      </div>
    </div>
    );

}

export default ListItem;