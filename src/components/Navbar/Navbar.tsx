import React from 'react';
import {
  AppBar,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/styles';
import logo from '@images/logo.png';

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
    width: '100%',
    margin: '0 auto',
  },
  logo: {
    width: 23,
    height: 23,
  },
  mainButton: {
    textTransform: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
  },
  navInner: {
    paddingRight: 50,
  },
});

export const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar color='secondary' position='static'>
      <Toolbar className={classes.container}>
        <Grid
          container
          className={classes.navInner}
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid item>
            <Button className={classes.mainButton}>
              <Grid container alignItems='center' spacing={1}>
                <Grid item>
                  <CardMedia className={classes.logo} image={logo} />
                </Grid>
                <Grid item>
                  <Typography
                    variant='subtitle2'
                    className={classes.mainButton}
                  >
                    YesNoGame
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Grid container alignItems='center' spacing={1}>
              <Grid item>
                <Button className={classes.button}>Об игре</Button>
              </Grid>
              <Grid item>
                <Button className={classes.button}>Правила</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <SearchIcon className={classes.button} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
