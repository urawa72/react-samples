import React from 'react';
import MyCard from './MyCard';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const MyButton = () => {
  const classes = useStyles();

  return (
    <MyCard>
      <div className={classes.buttons}>
        <Typography variant="subtitle1">Contained Buttons</Typography>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        <Typography variant="subtitle1">Outlined Buttons</Typography>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </div>
    </MyCard>
  );
};

export default MyButton;
