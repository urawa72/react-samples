import React from 'react';
import MyCard from './MyCard';
import Typography from '@material-ui/core/Typography';

const MyTypography: React.FC = () => {
  return (
    <MyCard>
      <Typography variant="subtitle1">Typography</Typography>
      <Typography variant="h1">h1 Text</Typography>
      <Typography variant="h2">h2 Text</Typography>
      <Typography variant="h3">h3 Text</Typography>
      <Typography variant="h4">h4 Text</Typography>
      <Typography variant="h5">h5 Text</Typography>
      <Typography variant="h6">h6 Text</Typography>
      <Typography variant="subtitle1">Sub Title Text</Typography>
      <Typography variant="subtitle2">Sub Title Text</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="body1" color="primary">
        Primary Color
      </Typography>
      <Typography variant="body1" color="secondary">
        Secondary Color
      </Typography>
      <Typography variant="body1" color="textPrimary">
        Text Primary Color
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Text Secondary Color
      </Typography>
      <Typography variant="body1" color="error">
        Error Color
      </Typography>
    </MyCard>
  );
};

export default MyTypography;
