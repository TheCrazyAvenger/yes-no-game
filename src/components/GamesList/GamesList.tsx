import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { GameItem } from './GameItem/GameItem';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0 auto',
  },
});

export const GamesList: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={1}>
      {Array.from(Array(12)).map((item, i) => {
        return (
          <Grid item key={i}>
            <GameItem />
          </Grid>
        );
      })}
    </Grid>
  );
};
