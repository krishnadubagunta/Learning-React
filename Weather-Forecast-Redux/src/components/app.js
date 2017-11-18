import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4" >5-day Weather Forecast</h1>
          <SearchBar />
        </div>
        <WeatherList />
      </div>
    );
  }
}
