import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const SampleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Typography variant="h4">Sample Modal Id: {id}</Typography>
      <Typography gutterBottom>
        {[...Array(50)].map(() => `This is a sample modal ${id}!`)}
      </Typography>
    </>
  );
};

export default SampleView;
