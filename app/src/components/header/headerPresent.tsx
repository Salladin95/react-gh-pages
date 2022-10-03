import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderPresentProps } from './headerContracts';

export default ({ path }: HeaderPresentProps) => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div>
            <Button>
              <Link to="/">Catalog</Link>
            </Button>
            <Button>
              <Link to="/about-us">About us</Link>
            </Button>
          </div>
          <ul className="current-path">
            {path.map((el, ind) => (
              <li className="path" key={ind}>
                {el}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
