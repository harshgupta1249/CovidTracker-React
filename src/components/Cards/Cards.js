import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.modules.css';

const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate }} ) => {
    console.log(props);
    if(!confirmed){
        return 'Loading...';
    }
// using material ui
    return ( 
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">{confirmed.value}</Typography>
                    <Typography color="textSecondary">REAL DATA</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">{recovered.value}</Typography>
                    <Typography color="textSecondary">REAL DATA</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">{deaths.value}</Typography>
                    <Typography color="textSecondary">REAL DATA</Typography>
                    <Typography variant="body2">Deaths caused by COVID-19</Typography>
                </CardContent>
                </Grid> 
            </Grid>
        </div>
     );
}
 
export default Cards;
