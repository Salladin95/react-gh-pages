import React from 'react';
import { IMovie } from 'api/contracts';
import { getMovie } from 'api/api';
import { PageProps, PageState } from './contracts';
import E404 from 'components/E404';
import PagePresent from './pagePresentation';

export default class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
    this.state = { movie: {} };
  }

  componentDidMount(): void {
    this.updateMovie();
  }

  updateMovie(): void {
    const params = document.location.href.split('/');
    const id = params[params.length - 1];

    getMovie(id)
      .then((movie) => {
        const newState = movie?.Response === 'False' ? null : movie;
        this.setState({ movie: newState });
      })
      .catch(() => {
        this.setState({ movie: null });
      });
  }

  render() {
    return !this.state.movie ? (
      <E404 />
    ) : (
      <PagePresent movie={this.state.movie as Required<IMovie>} />
    );
  }
}
