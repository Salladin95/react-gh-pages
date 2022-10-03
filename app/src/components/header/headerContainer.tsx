import React from 'react';
import withRouter from '../highOrderComponents/withRouter';
import { HeaderContainerProps, HeaderProps } from './headerContracts';
import HeaderPresent from './headerPresent';

const generatePath = (location: string): string[] => {
  const path = [];
  if (location === '/') {
    path.push('catalog');
  } else if (location === '/about-us') {
    path.push('about us');
  } else if (/\/movie\/[a-z]+[0-9]+/) {
    path.push('catalog', 'movie');
  }
  return path;
};

const Header = ({ router }: HeaderContainerProps & HeaderProps) => {
  const location = router.location.pathname;
  const path = generatePath(location);
  return <HeaderPresent path={path} />;
};

export default withRouter<HeaderProps>(Header);
