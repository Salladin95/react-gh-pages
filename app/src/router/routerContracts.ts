import { NavigateFunction, Params } from 'react-router-dom';
import LocalStore from '../localStorage';

export type RouterProps = {
  localStore: LocalStore;
};

export type WithRouterProps = {
  location: Location;
  navigate: NavigateFunction;
  params: Readonly<Params<string>>;
};
