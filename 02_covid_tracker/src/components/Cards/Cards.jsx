import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  const cards = [
    {
      title: 'Infected',
      description: 'Number of active case of COVID-19',
      value: confirmed.value,
      className: cx(styles.card, styles.infected),
    },
    {
      title: 'Recovered',
      description: 'Number of recoveries from COVID-19',
      value: recovered.value,
      className: cx(styles.card, styles.recovered),
    },
    {
      title: 'Deaths',
      description: 'Number of deaths caused by COVID-19',
      value: deaths.value,
      className: cx(styles.card, styles.deaths),
    },
  ]

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent='center'>
        {
          cards.map((card, i) => (
            <Grid key={i} item component={Card} xs={12} md={3} className={card.className}>
              <CardContent>
                <Typography color='textSecondary' gutterBottom>{card.title}</Typography>
                <Typography variant='h5'>
                  <CountUp start={0} end={card.value} duration={2.5} separator=',' />
                </Typography>
                <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant='body2'>{card.description}</Typography>
              </CardContent>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default Cards;