import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'view/home';
import Movie from '../view/page';
import AboutUs from '../view/aboutUs';
import E404 from '../components/E404';
import { RouterProps } from './routerContracts';

export default ({ localStore }: RouterProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home localStore={localStore} />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  );
};
