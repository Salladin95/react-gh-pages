import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="about-us">
      <div className="container">
        <p className="about-us__text">
          <strong>Movie Land</strong> is an online database of information related to films,
          television series, home videos, video games, and streaming content online – including
          cast, production crew and personal biographies, plot summaries, trivia and ratings.
        </p>
        <Button variant="contained" className="about-us__btn">
          <Link to={'/'}>Retunr to catalog</Link>
        </Button>
      </div>
    </div>
  );
};
