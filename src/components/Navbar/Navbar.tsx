import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/styles';

import { Logo } from '@components/Logo/Logo';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginBottom: 30,
  },
  container: {
    maxWidth: 1070,
    width: '100%',
    margin: '0 auto',
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

export const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar color='secondary' position='static' className={classes.root}>
      <Toolbar className={classes.container}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Logo />
          <Grid item>
            <Grid container alignItems='center' spacing={1}>
              <Grid item>
                <NavLink className={classes.navLink} to='/info'>
                  <Button className={classes.button}>Об игре</Button>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink className={classes.navLink} to='/rules'>
                  <Button className={classes.button}>Правила</Button>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button className={`${classes.button} ${classes.text}`}>
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
