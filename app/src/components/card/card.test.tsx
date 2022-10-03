import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Card from './index';

test('Renders card component', () => {
  const title = 'Test title';
  const descreption = 'test descreption';
  const image = 'test/image';
  const id = 'test01';

  render(
    <BrowserRouter>
      <Card title={title} description={descreption} image={image} id={id} />
    </BrowserRouter>
  );

  const imgElement = screen.getByRole('img');
  const titleElement = screen.getByText(descreption);
  const descreptionElement = screen.getByText(descreption);
  const linkElement = screen.getByRole('link');

  expect(titleElement.textContent).toBe(descreption);
  expect(imgElement).toHaveAttribute('src', image);
  expect(imgElement).toHaveAttribute('alt', title);
  expect(descreptionElement.textContent).toBe(descreption);
  expect(linkElement).toHaveAttribute('href', `/movie/${id}`);
});
