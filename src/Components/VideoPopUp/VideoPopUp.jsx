import React from 'react'
import './Style.css'
import ReactPlayer from 'react-player'

const VideoPopUp = (props) => {
    
  return (
     props?.trigger
  ) ? (
    <div className='popup'>
<div className="PopUpInner">
    {
        props.children
    }
    <ReactPlayer url={`https://www.youtube.com/watch?v=${props?.videoId}`}  controls  width="100%" height="100%" />
</div>
    </div>

  ) : ""
}

export default VideoPopUp