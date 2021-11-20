import React from 'react';
import './App.css'
import Video from './Video';

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
        <Video 
        url="https://v16m.tiktokcdn.com/ff46963e1839e60e0b8635f3f49c77ef/61995b3c/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/33d12aeafb5644c8b5e3f8e4bdf45a86/?a=1233&br=2774&bt=1387&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZmdpFOMkag3-I&l=2021112014314601024524500309E91E97&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajdmdGk6Zmk7OTMzZjczM0ApNzdmOWhmZGU1N2c8aTlmaGcxYmZfcjRfZV9gLS1kMWNzczQvMy8tNmIvMC1fYGMxL2E6Yw%3D%3D&vl=&vr="
        likes={111} messages={222} shares={70}
        channel="Affan" description="Guys,follow me" song="What a pain😂"
        />
        <Video 
        url="https://v16m.tiktokcdn.com/98ec5655d5f8853ec97680b439922d29/6199941f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/57e8a0a1388f4b999bd4251caca8f20d/?a=1233&br=1204&bt=602&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZmdpFOMkag3-I&l=2021112018342801025100318926123AA0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRpZmk6Zml2OTMzZjczM0ApZzozMzUzZWQ7Nzo0OWVlNWczb2gtcjQwZjBgLS1kMWNzczVfYDE0Xl8yX2EtXy42Mi86Yw%3D%3D&vl=&vr="
        likes={111} messages={222} shares={70}
        channel="AffanBhola" description="Guys,follow me" song="PZ MEER😂"
        />
      </div>

    </div>
  );
}

export default App;
