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
    <div className="">
      <ul className="uk-list uk-list-large" >
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;
