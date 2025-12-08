import Header from './Header'
import SocialLinks from './SocialLinks';
import TypewriterSection from './TypewriterSection';
import VideoPlayer from './Video'

function App() {
  const BASE = import.meta.env.BASE_URL; // Vite-ի base path

  return (
    <div>
      <Header />
      <VideoPlayer src={`${BASE}nature-nook-sitevideosmyVideo.mp4`} />
      <SocialLinks/>
       <TypewriterSection />
    </div>
  )
}

export default App
