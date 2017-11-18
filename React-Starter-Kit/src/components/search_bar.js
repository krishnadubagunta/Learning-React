//This component generates a input HTML DOM element and does the activity as specified.

import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state  = {
      term : 'Starting Value' ,
      onSearchtermChange : props.onSearchtermChange
    };
    this.attr = {attribute : ''};
  }

  componentDidMount() {
    this.refs.search.setAttribute('uk-icon','icon : search ; ratio : 1;');
  }

  render() {
    return (
      <div className="uk-flex uk-border-rounded uk-width-1-2@s uk-align-center">
        <span ref = "search" className="uk-margin-small-top uk-margin-small-left"></span>
        <input
          placeholder = "Search Topic"
          className = "uk-input uk-border-rounded uk-margin-small-left uk-margin-small-right "
          onChange={ event => this.state.onSearchtermChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
