import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((Video) => {
    return (
      <VideoListItem
       onVideoSelect={props.onVideoSelect}
       key={Video.etag}
       video={Video} />
    );
  });

  return (
    <div className="uk-container uk-container-small uk-box-shadow-small">
      <ul className="uk-list" >
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;
