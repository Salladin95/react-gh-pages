import makeReauest from './makeReauest';
import { IMovie, IMovieShortDescreption } from './contracts';

const BASE_URL = 'http://www.omdbapi.com/?apikey=1933b6a0';

export const getMoviesList = async (selector: string): Promise<IMovieShortDescreption[]> => {
  const response: { Search: IMovieShortDescreption[] } = await makeReauest(
    `${BASE_URL}&s=${selector}`
  );
  return response?.Search;
};

export const getMovie = async (selector: string): Promise<IMovie> => {
  const response = await makeReauest(`${BASE_URL}&i=${selector}`);
  return response;
};
