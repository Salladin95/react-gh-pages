export type MethodOption = 'GET' | 'POST' | 'DELETE' | 'PUT';

export interface IMovieShortDescreption {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

export type IMovie = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Plot: string;
  Poster: string;
  Rating: { Source: string; Value: string }[];
  Released: string;
  Title: string;
  imdbRating: string;
  imdbID: string;
  Runtime: string;
  Year: string;
  Response?: string;
};

export type FetchOption = {
  headers?: Record<string, string>;
  method?: MethodOption;
  limit?: number;
};
