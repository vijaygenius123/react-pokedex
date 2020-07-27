import React from 'react';

import { AppBar, Toolbar, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    pokedexContainer: {
        padding: "20px 50px"
    }
})

const Pokedex = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='static'>
                <Toolbar />
            </AppBar>
            <Grid container spacing={2} className={classes.pokedexContainer}>
                <Grid item xs={4}>
                    Item 1
                </Grid>
                <Grid item xs={4}>
                    Item 2
                </Grid>
            </Grid>
        </>
    )
}


export default Pokedex