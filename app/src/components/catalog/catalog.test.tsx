import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Catalog from './index';
import { IMovieShortDescreption } from 'api/contracts';

test('renders catalog of movies', () => {
  const movies = [
    {
      Title: 'Green Book',
      Year: '2013',
      Poster: 'some/path1',
      imdbID: 'randomId1',
    },
    {
      Title: 'Shantaram',
      Year: '2022',
      Poster: 'some/path2',
      imdbID: 'randomId2',
    },
    {
      Title: 'Batman',
      Year: '2013',
      Poster: 'some/path3',
      imdbID: 'randomId3',
    },
  ];

  render(
    <BrowserRouter>
      <Catalog movies={movies} />
    </BrowserRouter>
  );

  const cardElement = screen.getAllByTestId('card');
  expect(cardElement).toHaveLength(movies.length);
});

test('renders catalog of movies', () => {
  const movies: IMovieShortDescreption[] = [];

  render(
    <BrowserRouter>
      <Catalog movies={movies} />
    </BrowserRouter>
  );

  const titleElement = screen.getByRole('heading');
  expect(titleElement.textContent).toBe('Nothing found');
});
