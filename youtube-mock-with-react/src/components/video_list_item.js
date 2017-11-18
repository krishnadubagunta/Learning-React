import React, {Component} from 'react';

class VideoListItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      imageUrl : props.video.snippet.thumbnails.default.url,
      title : props.video.snippet.title,
      channel : props.video.snippet.channelTitle,
      video : props.video,
      onVideoSelect : props.onVideoSelect
    }
    this.imagestyle = {
      height : `${props.video.snippet.thumbnails.default.height}px`,
      width : `${props.video.snippet.thumbnails.default.width}px`,
      backgroundImage : 'url('+this.state.imageUrl+')'
    };
  }

  componentDidMount() {
    this.refs.image.setAttribute('uk-parallax','bgy : -10; viewport:1;');
  }

  render() {
    return(
      <li onClick = {() => this.state.onVideoSelect(this.state.video)} className=" uk-margin-small-top uk-margin-small-bottom video-list-item video-description uk-card uk-flex uk-card-container uk-box-shadow-small">
        <div className=" uk-flex-inline uk-width-1-1">
          <div className="uk-preserve-width" style={this.imagestyle} ref="image">
          </div>
          <div className="uk-margin-small-left uk-text-small uk-width-large uk-position-relative">
            <div className="uk-text-secondary title">{this.state.title}</div>
            <div className="uk-position-bottom uk-margin-small-bottom">{this.state.channel}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
