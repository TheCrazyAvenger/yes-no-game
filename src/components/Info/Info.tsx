import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f44336',
    padding: 40,
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'justify',
    maxWidth: 600,
    margin: '0 auto',
  },
});

export const Info: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction='column' justifyContent='center' spacing={2}>
        <Grid item>
          <Typography variant='h5' className={classes.title}>
            Польза данеток
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' className={classes.text}>
            Мощная прокачка мозга – так в трех словах можно описать пользу
            данеток. Приходится перебирать варианты, искать неочевидные связи,
            выстраивать цепочки. Включать воображение и думать на один шаг
            вперед. На 100% работают оба полушария, мозг просыпается – данетки
            недаром называют будильником для интеллекта. Они развивают интуицию
            и аналитические способности, умение задавать точные вопросы и
            логически мыслить. А еще данетки помогают видеть мир, людей, события
            такими, какие они есть – разными, сложными, уникальными.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' className={classes.text}>
            Играйте между делом, во время прогулки или в поездке. Вовлекайте
            детей и взрослых. Интеллектуальная игра, для которой не требуется
            даже бумаги и ручки, захватит вас полностью.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
