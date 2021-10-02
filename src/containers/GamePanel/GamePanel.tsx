import { GamesList } from '@components/GamesList/GamesList';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  paper: {
    borderRadius: 0,
  },
  root: {
    width: '100%',
    margin: '0 auto',
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    margin: '40px 0 20px 0',
    paddingTop: '25px !important',
  },
});

const GamePanel: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid className={classes.root} container direction='column' spacing={3}>
        <Grid item>
          <Typography className={classes.title} variant='h3' color='secondary'>
            Все данетки
          </Typography>
          <Typography>В каталоге 12 данеток</Typography>
        </Grid>
        <Grid item>
          <GamesList />
        </Grid>
        <Grid item className={classes.info}>
          <Typography variant='h6'>Об игре</Typography>

          <Typography variant='subtitle2'>
            {`Данетки - разновидность игры в загадки. В классическом варианте
          водящий описывает странную ситуацию, а угадывающие должны, задавая
          уточняющие вопросы, выяснить её. При угадывании можно задавать
          вопросы, но ответом на них могут быть только слова «да» и «нет» (а
          также «не имеет значения» или «не корректно»).`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GamePanel;
