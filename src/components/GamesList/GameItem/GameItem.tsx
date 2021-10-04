import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { logos } from '@utilities/constants';
import { NavLink } from 'react-router-dom';

type GameItemProps = {
  title: string;
  text: string;
  difficult: number;
  time: number;
  color: string;
  id: number;
};

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(to bottom, rgba(240,240,240,0.9), rgba(245,245,245,0.9))',
    maxWidth: 315,
    position: 'relative',
  },
  diff: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 85,
    height: 50,
    overflow: 'hidden',
    pointerEvents: 'none',
  },

  diffLine: {
    display: 'block',
    position: 'absolute',
    left: '40%',
    top: '40%',
    height: 6,
    width: '300%',
    font: 'normal 700 0.7em/20px "Raleway"',
    textAlign: 'center',
    transform: 'translateX(-65%) translateY(-45%) rotate(-40deg)',
    textTransform: 'uppercase',
  },
  orange: {
    background: '#ffbf22',
  },
  green: {
    background: '#a0cf6a',
  },
  red: {
    background: '#e82b3c',
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
  },
  image: {
    width: '100%',
    height: '55%',
    margin: '0 auto',
  },
  navLink: {
    textDecoration: 'none',
  },
  button: {
    textTransform: 'none',
    textAlign: 'left',
    borderRadius: 0,
    padding: '8px 3px 4px 6px',
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

  const diffLineCls = [classes.diffLine];

  if (difficult < 4) diffLineCls.push(classes.green);
  if (difficult >= 4) diffLineCls.push(classes.orange);
  if (difficult >= 8) diffLineCls.push(classes.red);

  return (
    <Grid item>
      <NavLink className={classes.navLink} to={`/story/${id}`}>
        <Button className={classes.button}>
          <Grid container className={classes.root} spacing={1}>
            <Grid item className={classes.diff}>
              <Typography className={diffLineCls.join(' ')} component='span' />
            </Grid>
            <Grid
              item
              className={classes.imageDiv}
              alignItems='center'
              justifyContent='center'
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
      </NavLink>
    </Grid>
  );
};
