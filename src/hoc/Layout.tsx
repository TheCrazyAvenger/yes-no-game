import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: { minHeight: '100vh', margin: '0 auto' },
});

const Layout: React.FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>{props.children}</Grid>
    </Grid>
  );
};

export default Layout;
