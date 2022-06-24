import React, {useState, useEffect} from 'react';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';
import TypeSelect from '../components/TypeSelect';

const PokemonContainer = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const [pokemonTypeList, setPokemonTypeList] = useState([]);
  
    // page renders with full list of pokemon and drop-down menu which allows user to filter by Pokemon type
    useEffect(() => {
        getPokemon();
        getPokemonTypes();
    }, []);

    // function returns a list of Pokemon objects - these contain a Pokemon NAME and URL which contains the detailed data on each Pokemon
    // getPokemonObject is run instead of setPokemonList here so that we can grab the detailed data and set THAT as pokemonList
    const getPokemon = (() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=300')
            .then(res => res.json())
            .then(data => {
                getPokemonObject(data.results)
            })
    });

    // function goes takes in the results of getPokemon (which is a list of objects) as argument
    // it then maps through this list and fetches the detailed Pokemon data from each object's url property
    // it stops at the point where a list of promises is returned by .json
    // Promise.all is then used - this returns individual objects which contain each Pokemon's full data
    // these objects are finally put into an array and set as the data stored in pokemonList
    const getPokemonObject = ((results) => {
        const pokemonPromises = results.map((pokemon) => {
            return fetch(pokemon.url)
                .then(res => res.json())
        })
        let array = [];
        Promise.all(pokemonPromises)
            .then(data => {
                array = data;
                setPokemonList(array);
            })
    });

    // function uses a separate endpoint to grab an object which contains a list of objects containing the name and a url for each type
    // this list is stored under .results within the returned object
    // the pokemonTypeList is set to the results here as this data is only used to populate the drop-down menu which shows the name of each type
    // pokemonTypeList is passed through to the TypeSelect drop-down, which then grabs the name property of each object in the list
    const getPokemonTypes = (() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(res => res.json())
            .then(data => setPokemonTypeList(data.results));
    });

    // function determines what happens when a type is selected from the drop-down menu (again this links with TypeSelect component)
    // when type is selected, that object's url property is passed in here and returns an object containing detailed data on that type
    // the type object contains a .pokemon property - this is a list of objects containing the name and url for each pokemon (same as the data
    // returned by the full pokemon list API)
    // getPokemonTypeObejct is run with the pokemon property of the list in order to access each pokemon's detailed data using its url
    const onTypeSelect = ((url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                getPokemonTypeObject(data.pokemon)
            });
    });

    // function takes in the pokemon property of the data returnd above as an argument - this is a list of objects containing name and url for each pokemon
    // it then maps through the list and fecthes the detailed pokemon data from each object's url property
    // it stops at the point where a list of promises is return by .json
    // Promise.all is used to return individual objects which contain each Pokemon's full data
    // these objects are finally put into an array and set as the data stored in pokemonList - this will updated the pokemon rendered on the
    // web page, but now showing only those of the type selected in the drop-down menu
    const getPokemonTypeObject = ((results) => {
        const pokemonPromises = results.map((pokemon) => {
            // each item in the list of objects contains a further "pokemon" key, under which the name and url are stored - this is why .pokemon
            // is used again inside the fetch function
            return fetch(pokemon.pokemon.url)
                .then(res => res.json())
        })
        let array = [];
        Promise.all(pokemonPromises)
            .then(data => {
                array = data;
                setPokemonList(array);
            })
    });

    // ***** PICK UP HERE NEXT TIME - NEED TO FLESH OUT WHAT HAPPENS WHEN INDIVIDUAL POKEMON ARE SELECTED
    const onPokemonClick = ((url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedPokemon(data));
    });


    return (
        <>
            <TypeSelect pokemonTypeList={pokemonTypeList} onTypeSelect={onTypeSelect} getPokemon={getPokemon} />
            <PokemonList pokemonList={pokemonList} onPokemonClick={onPokemonClick} />
            {/* { selectedPokemon ? <PokemonDetail pokemon={selectedPokemon} /> : null } */}
        </>
    );

}

export default PokemonContainer;