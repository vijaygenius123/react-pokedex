import React, { useState } from 'react';

import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, CircularProgress, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import mockData from '../mockData'

const useStyles = makeStyles({
    pokedexContainer: {
        padding: "20px 50px"
    },
    cardMedia: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center'
    }
})

const Pokedex = () => {
    const [pokemons, setPokemons] = useState(mockData)
    const classes = useStyles()

    const getPokemonCard = (pokemon) => {
        const { id, name } = pokemons[`${pokemon}`]
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <Grid item xs={12} sm={4} key={id}>
                <Card>
                    <CardMedia
                        className={classes.cardMedia} image={sprite} style={{ width: '130px', height: '130px' }} />
                    <CardContent className={classes.cardContent}>
                        <Typography>{name.toUpperCase()}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <>
            <AppBar position='static'>
                <Toolbar />
            </AppBar>

            {pokemons ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemons).map(pokemon => getPokemonCard(pokemon))}
                </Grid>
            ) : <CircularProgress />}

        </>
    )
}


export default Pokedex