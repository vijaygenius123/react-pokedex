import React, { useState } from 'react';

import { Typography } from '@material-ui/core'

import mockData from '../mockData'

const Pokemon = (props) => {

    const { pokemonId } = props.match.params;
    const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])
    const generatedPokemon = () => {
        const { id, name, species, height, weight, types, sprites } = pokemon;
        const spriteUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;
        return (
            <>
                <Typography variant="h1">{id}. {name.toUpperCase()}</Typography>
                <img src={spriteUrl} />
            </>
        )
    }

    return (
        <div> {generatedPokemon()} </div>
    )
}

export default Pokemon