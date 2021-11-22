import React from 'react';
import './App.css'
import Video from './Video';

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
        <Video 
        url="https://v16m.tiktokcdn.com/2e6910fbe66594e54927efd849bdffcf/619c247c/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/72ccfbe0da594c86be4591fc2aaec35b/?a=1233&br=5180&bt=2590&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZmdpFOMkag3-I&l=202111221714480102510042020C777248&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3A7M2c6Znl0OTMzZjczM0ApO2k4Nmg5aGU7NzgzaDg5Z2dgL2cycjRnXmFgLS1kMWNzczUyLi1iMjFgMi01LjEwMWI6Yw%3D%3D&vl=&vr="
        likes={111} messages={222} shares={70}
        channel="Affan" description="Guys,follow me" song="What a pain😂"
        />
        <Video 
        url="https://v16m.tiktokcdn.com/8b30dca2eda7011c01541ac1f656eac8/619c2473/video/tos/useast2a/tos-useast2a-pve-0037-aiso/72344fa213df42ed80460fb42793f300/?a=1233&br=2374&bt=1187&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZmdpFOMkag3-I&l=202111221714480102510042020C777248&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajY6cmg6ZjM5ODMzZjczM0ApNTs5ZjQ4ZGQ8Nzs7NDNpZmcxZTMycjRfX2xgLS1kMWNzc2IvXjBgMWIvNC4tYy1iNS46Yw%3D%3D&vl=&vr="
        likes={111} messages={222} shares={70}
        channel="AffanBhola" description="Guys,follow me" song=" MEER😂"
        />
      </div>

    </div>
  );
}

export default App;
