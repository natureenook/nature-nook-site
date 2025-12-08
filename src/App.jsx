import Header from './Header'
import VideoPlayer from './Video'

function App() {
  const BASE = import.meta.env.BASE_URL; // Vite-ի base path

  return (
    <div>
      <Header />
      <VideoPlayer src={`${BASE}nature-nook-sitevideosmyVideo.mp4`} />
    </div>
  )
}

export default App
