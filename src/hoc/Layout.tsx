import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
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
  footer: {
    backgroundColor: '#484848',
  },
});

const Layout: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Navbar />
      <Grid className={classes.child}>{props.children}</Grid>
      <Grid
        container
        className={`${classes.child} ${classes.footer}`}
        justifyContent='center'
      >
        <Logo />
      </Grid>
    </Grid>
  );
};

export default Layout;
