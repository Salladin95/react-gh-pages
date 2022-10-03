import React from 'react';
import { IMovie } from 'api/contracts';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DescItem from './descreptionItem';

export default ({ movie }: { movie: IMovie }) => {
  return (
    <>
      <div className="container movie__wrapper">
        <h1 className="movie__title title">{movie.Title}</h1>
        <div className="movie">
          <div className="movie__image">
            <img className="movie-img" src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie__descreption">
            <p className="movie__plot">{movie.Plot}</p>
            <DescItem title="Stars are: " text={movie.Actors} />
            <DescItem title="Director: " text={movie.Director} />
            <DescItem title="Awards: " text={movie.Awards} />
            <DescItem title="Genre: " text={movie.Genre} />
            <DescItem title="IMDB Rating: " text={movie.imdbRating} />
            <DescItem title="Box-Office: " text={movie.BoxOffice} />
            <DescItem title="Released: " text={movie.Released} />
            <DescItem title="Country: " text={movie.Country} />
            <DescItem title="Runtime: " text={movie.Runtime} />
          </div>
        </div>
        <Button className="movie__btn" variant="outlined">
          <RouterLink to="/">Return to catalog</RouterLink>
        </Button>
      </div>
    </>
  );
};
