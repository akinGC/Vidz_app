import React from 'react';
import './Video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item columnssee'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
                <div className='description'>"{video.snippet.description}"</div>
            </div>
        </div>
    )
};
export default VideoItem;