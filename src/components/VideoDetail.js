import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div className='noserch'>
            <h1 className='nosrch_h1'>Today's select</h1>
            <div className='nosrch_vidz'>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/EHTWMpD6S_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/hQAHSlTtcmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div className='embedwhole'>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;