import React from 'react';
import { DescrItemProps } from './contracts';

export default ({ title, text }: DescrItemProps) => {
  return (
    <div className="p-18 movie__descreption-item">
      <span className="movie__descreption-title">{title}</span>
      <span className="movie__descreption-item-text">{text}</span>
    </div>
  );
};
