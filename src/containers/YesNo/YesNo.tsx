import React, { useState } from 'react';
import { logos, yesno } from '@utilities/constants';
import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type YesNoProps = {
  match: object;
};

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  inner: {
    padding: '30px 60px',
  },
  title: {
    fontWeight: 'bold',
  },
  navLink: {
    textDecoration: 'none',
    display: 'inline-flex',
    color: '#202020',
  },
  imageDiv: {
    width: 200,
    height: 200,
    marginRight: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    width: '100%',
    background: 'white',
    padding: '40px 20px',
    margin: '20px 0 30px 0',
    boxShadow: '6px 6px 0 rgb(0 0 0 / 10%)',
    transition: 'background .15s, max-height 5s',
  },
  button: {
    borderColor: '#202020',
    borderRadius: 50,
    padding: '15px 130px',
    textTransform: 'none',
    fontWeight: 'bold',
  },
  details: {
    background: 'white',
    padding: '40px',
    textAlign: 'center',
  },
});

const YesNo: React.FunctionComponent<YesNoProps> = ({ match }) => {
  const [showSolution, setsolution] = useState<Boolean>(false);

  const classes = useStyles();
  const currentId = Object.values(match)[3].id;

  const yesnoInfo = yesno[currentId - 1];
  const { title, text, solution, difficult, time, color, id } = yesnoInfo;

  const solutionHandler = () => {
    setsolution((prev) => !prev);
  };

  const updateInfo = () => {
    if (showSolution) {
      return <Typography variant='subtitle2'>{solution}</Typography>;
    } else {
      return <Typography variant='subtitle2'>{text}</Typography>;
    }
  };

  const infoStyle = () => {
    if (showSolution) {
      return {
        background: '#202020',
        color: 'white',
      };
    } else {
      return {
        background: 'white',
        color: '#202020',
      };
    }
  };

  return (
    <>
      <Paper className={classes.root} style={{ backgroundColor: color }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <NavLink className={classes.navLink} to='/'>
              <ArrowBackIosNewIcon />
              <Typography className={classes.title} variant='subtitle2'>
                Назад к списку
              </Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink className={classes.navLink} to={`${id + 1}`}>
              <Typography className={classes.title} variant='subtitle2'>
                К следующей данетке
              </Typography>
              <ArrowForwardIosIcon />
            </NavLink>
          </Grid>
        </Grid>
        <Grid container className={classes.inner} alignItems='center'>
          <Grid item className={classes.imageDiv}>
            <CardMedia className={classes.image} image={logos[id - 1]} />
          </Grid>
          <Grid item xs>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='subtitle1'>Данетка</Typography>
                <Typography variant='h4' className={classes.title}>
                  {title}
                </Typography>
              </Grid>
              <Grid item className={classes.info} style={infoStyle()}>
                {updateInfo()}
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  onClick={solutionHandler}
                  className={classes.button}
                >
                  Показать ответ
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        className={classes.details}
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item xs>
          <Typography className={classes.title} color='secondary' variant='h6'>
            {`Время: ${time} мин.`}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={classes.title} color='secondary' variant='h6'>
            {`Сложность: ${difficult} / 10`}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography className={classes.title} color='secondary' variant='h6'>
            {`Номер данетки: ${id}`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default YesNo;
