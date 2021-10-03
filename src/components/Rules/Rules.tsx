import {
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { colors, rulesIcons, rulesInfo } from '@utilities/constants';

const useStyles = makeStyles({
  root: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    maxWidth: 600,
    margin: '0 auto',
  },
  rule: {
    position: 'relative',
    padding: 50,
    maxWidth: 1024,
    margin: '0 auto',
  },
  ruleCounter: {
    position: 'absolute',
    font: `900 italic 300px/300px 'Clear Sans', Arial, sans-serif`,
    height: 300,
    opacity: '0.075',
    zIndex: 1,
    top: '45%',
    marginTop: '-150px',
    width: 200,
    textAlign: 'center',
    marginLeft: '-100px',
    left: '25%',
  },
  leftCounter: {
    left: '75%',
  },
});

export const Rules: React.FunctionComponent = () => {
  const classes = useStyles();

  const addRules = () => {
    return rulesInfo.map((item, i) => {
      const cls = [classes.ruleCounter];
      if (i % 2 === 1) cls.push(classes.leftCounter);

      return (
        <Grid
          key={item.title}
          container
          style={{ backgroundColor: colors[i] }}
          direction='column'
          className={classes.rule}
          justifyContent='center'
          spacing={2}
        >
          <Grid className={cls.join(' ')}>{i + 1}</Grid>
          <Grid item>
            <CardMedia
              style={{ margin: '0 auto', width: 100, height: 100 }}
              component='svg'
              image={rulesIcons[i]}
            />
          </Grid>
          <Grid item>
            <Typography variant='h5' className={classes.title}>
              {item.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2' className={classes.text}>
              {item.text}
            </Typography>
          </Grid>
        </Grid>
      );
    });
  };

  return <Paper className={classes.root}>{addRules()}</Paper>;
};
