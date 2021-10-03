import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { yesno } from '@utilities/constants';
import React from 'react';
import { GameItem } from './GameItem/GameItem';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0 auto',
  },
});

const addYesNo = () => {
  return yesno.map((item, i) => {
    const { title, text, difficult, time, color, id } = item;

    return (
      <GameItem
        key={id}
        title={title}
        text={text}
        difficult={difficult}
        time={time}
        color={color}
        id={id}
      />
    );
  });
};

export const GamesList: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={1}>
      {addYesNo()}
    </Grid>
  );
};
