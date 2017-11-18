import React, { Component } from 'react';
import YouTube from 'react-youtube';
class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPresent : false,
      onNext : props.onNext
    }
    this.style = {
      height : '100%',
      weight : '100%'
    }
  }

  componentDidMount(){
    if (this.state.isPresent) {
      this.refs.video.setAttribute('uk-responsive');
      this.refs.video.setAttribute('frameborder','0');
      this.refs.video.setAttribute('uk-video','automute : true;');
    }
  }

  componentWillReceiveProps({video}){
    if (!video) {
      this.setState({
          isPresent : false
      });
      return false;
    }
    else{
      this.setState({
        isPresent : true,
        video : video,
        title : video.snippet.title,
        description : video.snippet.description,
        channelImage : video.channelInfo.snippet.thumbnails.default.url
      });
      return true;
    }
  }




  render() {
    const opts = {
      height : '100%',
      width : '100%',
      playerVars : {
        autoplay : 1
      }
    };
    return (
      <div className="uk-margin-small-top">
      {
        this.state.isPresent ? (
          <div>
            <div className="video-item uk-width-1-1">
              <div style={this.style}>
                <YouTube videoId={this.state.video.id.videoId} opts={opts} onEnd= {this.state.onNext()}/>
              </div>
            </div>
            <div className="uk-margin-small-bottom"></div>
            <div className="uk-padding-small uk-card-container uk-box-shadow-medium">
              <div className="video-description uk-flex-inline">
                <div>
                  <img src={this.state.channelImage} alt = "channelImage" className="uk-preserve-width"  />
                </div>
                <div className="uk-margin-small-left">
                  <div className="lead">{this.state.title}</div>
                  <div className="meta uk-width-1-3">{this.state.description}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="uk-position-relative video-item">
            <div className="uk-position-center uk-container-small">
              <span>Loading ... </span>
            </div>
          </div>
        )
      }
      </div>
    );
  }

}

export default VideoDetail;
