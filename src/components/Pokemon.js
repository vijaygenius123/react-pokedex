import React from 'react';

const Pokemon = (props) => {
    const { pokemonId } = props.match.params;
    return (
        <div> Pokemon - { pokemonId} </div>
    )
}

export default Pokemon