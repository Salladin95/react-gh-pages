import React from 'react';
import Search from 'components/search/';
import Catalog from 'components/catalog/';
import { getMoviesList } from '../../api/api';
import { debounce } from '../../helpers';
import { HomeProps, HomeState } from './contracts';
import LocalStore from '../../localStorage';

export default class Home extends React.Component<HomeProps, HomeState> {
  localStore: LocalStore;

  constructor(props: HomeProps) {
    super(props);
    this.localStore = this.props.localStore;

    let title = this.localStore.getValue;

    if (!title) {
      title = 'Star wars';
    }

    this.state = { movies: [], title };
  }

  componentDidMount(): void {
    this.updateMoviesList(this.state.title);
  }

  componentWillUnmount(): void {
    this.localStore.updateValue = this.state.title;
  }

  updateMoviesList = (title: string) => {
    getMoviesList(title)
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((err) => {
        throw new Error(err);
      });
    this.setState({ movies: this.state.movies, title });
  };

  updateMovieListLazy = debounce(this.updateMoviesList, 600);

  updatePage = (title: string) => {
    this.updateMovieListLazy(title);
  };

  render() {
    return (
      <main>
        <h1 className="home__title">Movie Land</h1>
        <Search onChange={this.updatePage} value={this.state.title} />
        <Catalog movies={this.state.movies} />
      </main>
    );
  }
}
