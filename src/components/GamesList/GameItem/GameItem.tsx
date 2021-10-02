import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '@images/1.svg';
import { Button } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(to bottom, rgba(240,240,240,0.9), rgba(245,245,245,0.9))',
    maxWidth: 303,
    margin: '0 auto',
  },
  text: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    height: 80,
  },
  imageDiv: {
    backgroundColor: 'rgb(165, 145, 198)',
    width: 110,
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    textTransform: 'none',
    textAlign: 'left',
  },
  info: {
    marginTop: '1px !important',
  },
});

export const GameItem: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Button className={classes.button}>
      <Grid container className={classes.root} spacing={1}>
        <Grid item className={classes.imageDiv}>
          <CardMedia component='svg' className={classes.image} image={image} />
        </Grid>
        <Grid item xs>
          <Typography variant='subtitle1'>Случай в баре</Typography>
          <Typography
            variant='caption'
            className={classes.text}
            color='text.secondary'
          >
            Мужчина заходит в бар и просит стакан воды, бармен внезапно достает
            ружье и направляет на мужчину. Мужчина говорит «спасибо» и уходит.
          </Typography>
          <Grid
            container
            spacing={1}
            alignItems='center'
            className={classes.info}
          >
            <Grid item>
              <Grid container>
                <AccessTimeIcon fontSize='small' />
                <Typography variant='subtitle2'>10 мин.</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <LocalFireDepartmentIcon fontSize='small' />
                <Typography variant='subtitle2'>5 / 10</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
};
