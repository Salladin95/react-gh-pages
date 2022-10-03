import React from 'react';
import CatalogPresent from './catalogPresentation';
import { CatalogContainerProps } from './contracts';

export default ({ movies }: CatalogContainerProps) => {
  return <CatalogPresent movies={movies} />;
};
