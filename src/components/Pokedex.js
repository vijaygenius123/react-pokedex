import React from 'react';

import { AppBar, Toolbar, Grid, Card, CardContent } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    pokedexContainer: {
        padding: "20px 50px"
    }
})

const getPokemonCard = (id) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    Pokemon {id}
                </CardContent>
            </Card>
        </Grid>
    )
}

const Pokedex = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='static'>
                <Toolbar />
            </AppBar>
            <Grid container spacing={2} className={classes.pokedexContainer}>
                {getPokemonCard(1)}
                {getPokemonCard(2)}
                {getPokemonCard(3)}
                {getPokemonCard(4)}
            </Grid>
        </>
    )
}


export default Pokedex