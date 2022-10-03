import React from 'react';
import { CardProps } from './contracts';
import { Link } from 'react-router-dom';

export default ({ title, description, image, id }: CardProps) => {
  return (
    <div data-testid="card" className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__title">{title}</div>
      <div className="card__descrep">{description}</div>
      <Link to={`/movie/${id}`} className="card__link">
        Read more
      </Link>
    </div>
  );
};
