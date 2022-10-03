import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './headerPresent';

test('renders catalog of movies', () => {
  const path = ['home', 'movie'];
  render(
    <BrowserRouter>
      <Header path={path} />
    </BrowserRouter>
  );
  const listItems = screen.getAllByRole('listitem');
  const toMain = screen.getByText('Catalog');
  const toAboutUs = screen.getByText('About us');

  expect(toMain).toHaveAttribute('href', '/');
  expect(toAboutUs).toHaveAttribute('href', '/about-us');
  expect(listItems).toHaveLength(path.length);
  listItems.forEach((el, ind) => {
    expect(el.textContent).toBe(path[ind]);
  });
});
