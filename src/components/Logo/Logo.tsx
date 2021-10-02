import { Button, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@images/logo.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  logo: {
    width: 23,
    height: 23,
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 0,
    height: 65,
    '&:hover': {
      boxShadow: 'inset 0 -4px 0 rgb(255 255 255 / 50%)',
    },
  },
  text: {
    textTransform: 'none',
    fontWeight: 'bold',
  },
  navLink: {
    textDecoration: 'none',
  },
});

export const Logo: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <NavLink className={classes.navLink} to='/'>
        <Button className={`${classes.button} ${classes.text}`}>
          <Grid container alignItems='center' spacing={1}>
            <Grid item>
              <CardMedia className={classes.logo} image={logo} />
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' className={classes.text}>
                YesNoGame
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </NavLink>
    </Grid>
  );
};
