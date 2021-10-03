import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import l1 from '@images/logos/1.svg';
import l2 from '@images/logos/2.svg';
import l3 from '@images/logos/3.svg';
import l4 from '@images/logos/4.svg';
import l5 from '@images/logos/5.svg';
import l6 from '@images/logos/6.svg';
import l7 from '@images/logos/7.svg';
import l8 from '@images/logos/8.svg';
import l9 from '@images/logos/9.svg';
import l10 from '@images/logos/10.svg';
import l11 from '@images/logos/11.svg';
import l12 from '@images/logos/12.svg';

type GameItemProps = {
  title: string;
  text: string;
  difficult: string;
  time: string;
  color: string;
  id: number;
};

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(to bottom, rgba(240,240,240,0.9), rgba(245,245,245,0.9))',
    maxWidth: 300,
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
    width: 110,
    height: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '55%',
    margin: '0 auto',
  },
  button: {
    textTransform: 'none',
    textAlign: 'left',
    margin: 5,
  },
  info: {
    marginTop: '1px !important',
  },
});

export const GameItem: React.FunctionComponent<GameItemProps> = ({
  title,
  text,
  difficult,
  time,
  color,
  id,
}) => {
  const classes = useStyles();

  const logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12];

  return (
    <Button className={classes.button}>
      <Grid container className={classes.root} spacing={1}>
        <Grid
          item
          className={classes.imageDiv}
          style={{ backgroundColor: color }}
        >
          <CardMedia
            component='svg'
            className={classes.image}
            image={logos[id - 1]}
          />
        </Grid>
        <Grid item xs>
          <Typography variant='subtitle1'>{title}</Typography>
          <Typography
            variant='caption'
            className={classes.text}
            color='text.secondary'
          >
            {text}
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
                <Typography variant='subtitle2'>{`${time} мин.`}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <LocalFireDepartmentIcon fontSize='small' />
                <Typography variant='subtitle2'>{`${difficult} / 10`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
};
