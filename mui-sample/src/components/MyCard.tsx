import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const MyCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Card className={classes.root}>
        <CardContent>{children}</CardContent>
        {/* <CardActions></CardActions> */}
      </Card>
    </Box>
  );
};

export default MyCard;
