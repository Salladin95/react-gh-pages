import { IMovieShortDescreption } from 'api/contracts';
import LocalStorage from '../../localStorage';

export type HomeProps = { localStore: LocalStorage };

export type HomeState = { movies: IMovieShortDescreption[]; title: string };
