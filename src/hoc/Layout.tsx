import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Navbar } from '@components/Navbar/Navbar';

const useStyles = makeStyles({
  root: { minHeight: '100vh', margin: '0 auto' },
});

const Layout: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Navbar />
      <Grid>{props.children}</Grid>
    </Grid>
  );
};

export default Layout;
