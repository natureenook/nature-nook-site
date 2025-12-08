import React from 'react'
import Header from './Components/Header'
import VideoPlayer from './Components/Video'


function App() {
  return (
    <div>
      <Header />
      <VideoPlayer src=" public/nature-nook-sitevideosmyVideo.mp4"  />
    </div>
  )
}

export default App