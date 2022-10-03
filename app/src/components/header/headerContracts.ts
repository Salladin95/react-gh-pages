import { WithRouterProps } from 'router/routerContracts';

export type HeaderPresentProps = {
  path: string[];
  title?: string | null;
};

export type HeaderProps = {
  title?: string;
};

export type HeaderContainerProps = {
  router: WithRouterProps;
};
