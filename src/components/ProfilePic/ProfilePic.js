import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Sasuke from '../../pics/Sasuke.jpg';
import Rem from '../../pics/Rem.jpg';
import Kaisen from '../../pics/Kaisen.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Kaisen" src= {Kaisen} className={classes.large} />
      <Avatar alt="Rem" src= {Rem} className={classes.large} />
      <Avatar alt="Sasuke" src= {Sasuke} className={classes.large} />
    </div>
  );
}