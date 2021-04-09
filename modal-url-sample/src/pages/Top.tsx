import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const BooksPage: React.FC = () => {
  return (
    <>
      <Typography variant="h4">Top Page</Typography>
      <Link to="samples">Modal Samples</Link>
    </>
  );
};

export default BooksPage;
