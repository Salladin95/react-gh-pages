import React from 'react';
import { SearchPresentationProps } from './contracts';
import SearchSvg from './svgIcon';

export default class Search extends React.Component<SearchPresentationProps> {
  render(): React.ReactNode {
    return (
      <div className="container">
        <form className="search">
          <input
            defaultValue={this.props.value}
            onChange={this.props.onChange}
            className="search-input"
            placeholder="Type a title of any movie..."
            type="text"
          />
          <div className="search__btn">
            <SearchSvg />
          </div>
        </form>
      </div>
    );
  }
}
