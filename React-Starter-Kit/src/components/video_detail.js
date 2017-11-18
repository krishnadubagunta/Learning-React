import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor({video}) {
    super(video);
    this.state = {
      isPresent : false
    }
    this.style = {
      height : '100%',
      weight : '100%'
    }
  }

  componentDidMount(){
    if (this.state.isPresent) {
      this.refs.video.setAttribute('allowfullscreen');
      this.refs.video.setAttribute('uk-responsive');
      this.refs.video.setAttribute('frameborder','0');
      this.refs.video.setAttribute('uk-video','automute : true; autoplay : true;');
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
      const videoId = video.id.videoId;
      this.setState({
        isPresent : true,
        url : `https://www.youtube.com/embed/${videoId}/autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1`,
        title : video.snippet.title,
        description : video.snippet.description
      });
      return true;
    }
  }


  shouldComponentUpdate(){
    return true;
  }

  render() {
    if (this.state.isPresent) {
      return(
        <div className="uk-padding-small uk-box-shadow-medium" >
          <div className="uk-height-large uk-width-1-1">
            <div className=" uk-padding-small" style={this.style}>
              <iframe ref="video" src={this.state.url} width = "100%" height = "100%" />
            </div>
          </div>
          <div className="uk-margin-medium-top">
            <div className="uk-text-lead">{this.state.title}</div>
            <div className="uk-text-meta">{this.state.description}</div>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="uk-position-center uk-container uk-container-small">
          <span>Loading ...</span>
        </div>
      );
    }
  }

}

export default VideoDetail;
