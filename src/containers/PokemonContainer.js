import React, {useState, useEffect} from 'react';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';
import TypeSelect from '../components/TypeSelect';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PokemonContainer = ({pokemonList, pokemonTypeList, onTypeSelect, getPokemon, setSelectedPokemon}) => {

    const onPokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon)
    };

    return (
        <div>
            <TypeSelect pokemonTypeList={pokemonTypeList} onTypeSelect={onTypeSelect} getPokemon={getPokemon} />
            <PokemonList pokemonList={pokemonList} onPokemonClick={onPokemonClick} />
        </div>
    );

}

export default PokemonContainer;