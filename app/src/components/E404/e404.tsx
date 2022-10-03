import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="container">
      <div className="e404">
        <h1 className="error__title">Page not found</h1>
        <Button variant="contained">
          <Link to="/">Return to main page</Link>
        </Button>
      </div>
    </div>
  );
};
