import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Navbar } from '@components/Navbar/Navbar';
import { Logo } from '@components/Logo/Logo';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    margin: '0 auto',
    marginBottom: 30,
  },
  child: {
    maxWidth: 1024,
    width: '100%',
    margin: '0 auto',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 0,
    textTransform: 'none',
    height: 65,
    '&:hover': {
      boxShadow: 'inset 0 -4px 0 rgb(255 255 255 / 50%)',
    },
  },
  footer: {
    backgroundColor: '#484848',
    padding: '0 20px',
  },
});

const Layout: React.FunctionComponent = (props) => {
  const classes = useStyles();

  const openOrigin = () => {
    window.open('https://yesnogame.net/');
  };

  return (
    <Grid className={classes.root}>
      <Navbar />
      <Grid className={classes.child}>{props.children}</Grid>
      <Grid
        container
        className={`${classes.child} ${classes.footer}`}
        justifyContent='space-between'
      >
        <Logo />
        <Button className={classes.button} onClick={openOrigin}>
          Ссылка на источник
        </Button>
      </Grid>
    </Grid>
  );
};

export default Layout;
