import React, {Component} from 'react';

class VideoListItem extends Component{
  constructor({video , onVideoSelect}) {
    super({video,onVideoSelect});
    this.state = {
      imageUrl : video.snippet.thumbnails.default.url,
      title : video.snippet.title,
      video : video,
      onVideoSelect : onVideoSelect
    }
    this.imagestyle = {
      height : `${video.snippet.thumbnails.default.height}`,
      width : `${video.snippet.thumbnails.default.width}`,
      backgroundImage : 'url('+this.state.imageUrl+')'
    };
  }

  componentDidMount() {
    this.refs.image.setAttribute('uk-parallax','bgy : -9; viewport:1;');
  }

  render() {
    return(
      <li onClick = {() => this.state.onVideoSelect(this.state.video)} className=" uk-margin-small-top uk-margin-small-bottom video-list-item">
        <div className=" uk-flex-inline uk-width-1-1">
          <div className="uk-preserve-width" style={this.imagestyle} ref="image">
          </div>
          <div className=" uk-padding-small uk-text-small uk-width-small">
            <div className="">{this.state.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
