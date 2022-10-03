import React from 'react';
import Card from '../card';
import { CatalogPresentProps } from './contracts';

export default ({ movies }: CatalogPresentProps) => {
  return (
    <div className="container">
      <div className="catalog">
        {movies?.length > 0 ? (
          movies?.map((movie) => (
            <Card
              key={movie.Title + movie.Poster}
              title={movie.Title}
              description={movie.Year}
              image={movie.Poster}
              id={movie.imdbID}
            />
          ))
        ) : (
          <h1 className="error__title">Nothing found</h1>
        )}
      </div>
    </div>
  );
};
