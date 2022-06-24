import React from 'react';
//  THIS IS THE DROP-DOWN MENU FOR FILTERING POKEMON BY TYPE

const TypeSelect = ({pokemonTypeList, onTypeSelect, getPokemon}) => {

    const typeOptions = pokemonTypeList.map((type, index) => {
        return <option key={index} value={index}>{type.name}</option>
    });

    // function allows the drop-down menu to include an option to view all pokemon - this is not an option when we filter by type because
    // we are using the type API, which doesn't include an "all" option
    // if "View All" is chosen we simply need to run getPokemon again to re-render the data that is shown as default when the app loads
    const handleChange = (event) => {
        if (event.target.value === "View All") {
            getPokemon()
        } else {
            const chosenType = pokemonTypeList[event.target.value]
            onTypeSelect(chosenType.url);
        }
    }

    return (
        <select onChange={handleChange} defaultValue="">
            <option disabled value="">Filter Pokemon by Type</option>
            <option value="View All">View all Pokemon</option>
            {typeOptions}
        </select>
    );

}

export default TypeSelect;