import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { IYesNo } from '@store/types/game';

import React from 'react';
import { GameItem } from './GameItem/GameItem';

const useStyles = makeStyles({
  root: {},
});

type GamesListProps = {
  yesno: [IYesNo] | null;
};

export const GamesList: React.FunctionComponent<GamesListProps> = ({
  yesno,
}) => {
  const classes = useStyles();

  const addYesNo = () => {
    if (yesno) {
      return yesno.map((item) => {
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
    } else {
      return <Typography>Пусто</Typography>;
    }
  };

  return (
    <Grid className={classes.root} container spacing={1}>
      {addYesNo()}
    </Grid>
  );
};
