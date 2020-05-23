import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ( {data : { confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return "Loading...";
    }
    console.log(confirmed)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infacted)}>
                    <CardContent>
                        <Typography className={styles.blue}><strong>Infacted</strong></Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Number of Active cases in COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.green}><strong>Recovered</strong></Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">Last Update</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.red}><strong>Deaths</strong></Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;