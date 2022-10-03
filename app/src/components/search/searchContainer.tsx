import React from 'react';
import { SearchContainerProps } from './contracts';
import Search from './searchPresentation';

export default class SearchContainer extends React.Component<SearchContainerProps> {
  constructor(props: SearchContainerProps) {
    super(props);
  }

  updateValue = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = (e.target as HTMLInputElement).value;
    this.props.onChange(newValue);
  };

  render(): React.ReactNode {
    return <Search value={this.props.value} onChange={this.updateValue} />;
  }
}
