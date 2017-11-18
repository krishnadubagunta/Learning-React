//This component generates a input HTML DOM element and does the activity as specified.
import React, { Component } from 'react';
import YoutubeAutocomplete from '../config/youtube-autocomplete';
import API_KEY from '../config/config';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state  = {
      term : '' ,
      onSearchtermChange : props.onSearchtermChange,
      onTermChange : props.onTermChange
    };
    this.attr = {attribute : ''};
  }

  _handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      console.log(e.target.value);
      this.state.onSearchtermChange(e.target.value);
    }
  }

  _handleResults = (e) => {
    const term = e.target.value;
    YoutubeAutocomplete({term, key:API_KEY},list=>{
      console.log(list);
    })
  }

  render() {
    return (
      <div className="uk-flex uk-border-rounded uk-align-center uk-position-relative searchBar">
        <input
          placeholder = "Search on Youtube"
          className = "uk-input uk-border-rounded uk-margin-small-left uk-margin-small-right uk-width-1-1"
          onKeyPress = {this._handleKeyPress} onChange= {this._handleResults} />
      </div>

    );
  }
}

export default SearchBar;
