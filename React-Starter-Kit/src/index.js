// Creating a Component to produce some HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import Navbar from './components/navbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from '../config/config.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    };
    this.videoSearch('');
  }

  componentDidMount() {
    this.refs.mainLayout.setAttribute('uk-grid','');
  }

  videoSearch(term) {
    YTSearch({key : API_KEY, term : term}, videos => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]});
    })
  }

  render(){
    return (
      <div>
        <Navbar onSearchtermChange ={term => this.videoSearch(term)} />
        <div className="uk-child-width-expand@s uk-grid-small uk-padding-large" ref="mainLayout">
          <div className="uk-width-3-4@m">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="uk-width-1-4@m">
            <VideoList
              onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
              videos = {this.state.videos} />
          </div>
        </div>
      </div>
      );
    }
}

//Take this component's generated HTML and pout in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));
