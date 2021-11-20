import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({likes,messages,shares,channel,description,song,url}) {
    const [playing,setPlaying]=useState(false);
    const videoRef= useRef(null);
    const onVideoPress =()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }
        else{
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className='video'>
            <video className='video_player' 
            loop
            ref={videoRef}
            onClick={onVideoPress}
            src={url}></video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
        
    )
}

export default Video
