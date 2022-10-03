import { IMovie } from 'api/contracts';

export type DescrItemProps = {
  title: string;
  text: string;
};

export type PageProps = Record<string, string>;

export type PageState = { movie: Partial<IMovie> | null };
