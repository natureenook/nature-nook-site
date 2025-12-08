import React from 'react'
import Header from './Header'
import VideoPlayer from './Video'


function App() {
  return (
    <div>
      <Header />
      <VideoPlayer src=" public/nature-nook-sitevideosmyVideo.mp4"  />
    </div>
  )
}

export default App