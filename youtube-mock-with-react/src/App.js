// Creating a Component to produce some HTML
import React, { Component } from 'react';
import YoutubeSearch from './config/youtube-search';
import YoutubeComments from './config/youtube-comments';
import YoutubeChannel from './config/youtube-channels';
import Navbar from './components/navbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Comments from './components/comments';
import API_KEY from './config/config';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null,
      comments : []
    };
    this.opts = {
      key : API_KEY,
      maxResults : 21
    };
    this.videoSearch('');
  }

  componentDidMount() {
    this.refs.mainLayout.setAttribute('uk-grid','');
  }

  videoSearch(props) {
    let changeCurrentVideo = null;

    if (props.source === "clicks" ) {
      this.opts.relatedToVideoId = props.selectedVideo.id.videoId;
      let selectedVideo = props.selectedVideo;
      this._getChannelInfo(selectedVideo, modifiedVideo => {
        selectedVideo = modifiedVideo;
        this.setState({selectedVideo});
      });
      changeCurrentVideo = false;
    }
    else if (props.source === 'next') {
      this.opts.relatedToVideoId = props.relatedToVideo;
      changeCurrentVideo = true;
    }
    else {
      this.opts.term = props.term;
      changeCurrentVideo = true;
    }

    YoutubeSearch(this.opts, videos => {
      if (changeCurrentVideo) {
        let selectedVideo = videos[0];
        videos.splice(0,1);
        this._getChannelInfo(selectedVideo, modifiedVideo => {
          selectedVideo = modifiedVideo;
          this.setState({videos,
                        selectedVideo},() => {
                          this._getComments();
                        });
        });
        }
      else {
        videos.splice(0,1)
          this.setState({
            videos
          }, () => {
            this._getComments();
          });
        }
      })
  }


  _getComments = () => {
    this.opts.videoId = this.state.selectedVideo.id.videoId;
    YoutubeComments(this.opts,comments => {
      this.setState({comments});
    });
  }

  _getChannelInfo = (selectedVideo,callback) => {
    YoutubeChannel({key: API_KEY, channelId : selectedVideo.snippet.channelId}, info => {
      selectedVideo.channelInfo = info[0];
      if (callback) {
        callback(selectedVideo);
      }
    });
  }

  _onNext = () => {
    this.videoSearch({source : "next", relatedToVideo : this.state.selectedVideo.id.videoId});
  }


  render(){
    return (
      <div>
        <Navbar onSearchtermChange = {(term) => {this.videoSearch({ term , source : "navbar"})}} onTermChange = {(term) => this._listAutoComplete(term) }/>
        <div className="uk-child-width-expand@s uk-grid-small uk-padding-large uk-card-container" ref="mainLayout">
        <div className="uk-width-2-3@m uk-child-width-1-1" >
          <div>
            <VideoDetail
              video={this.state.selectedVideo}
              onNext={ check => this._onNext } />
            </div>
            <div className="uk-margin-small-top uk-card">
              <div className="uk-text-lead uk-margin-medium-top uk-margin-small-bottom">Comments</div>
              <Comments className="uk-card uk-box-shadow-medium uk-list uk-height-match uk-list-large uk-list-divider uk-card-container uk-box-shadow-small uk-card-default " comments = {this.state.comments}/>
            </div>
        </div>
          <div className="uk-width-1-3@m">
            <VideoList
              onVideoSelect={selectedVideo => this.videoSearch({ selectedVideo , source : "clicks"})}
              videos = {this.state.videos} />
          </div>
        </div>
      </div>
      );
    }
}

//Take this component's generated HTML and pout in the DOM
export default App;
