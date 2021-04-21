import React from 'react';
import { Link } from 'react-router-dom';

const Top: React.FC = () => {
  return (
    <div>
      <h2>Top Page</h2>
      <div>
        <Link to="/books?hoge=1111&fuga=aiueo">move Books page</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Top;
