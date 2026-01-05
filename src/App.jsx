import SocialExperimentSection from './DogAndCat';
import Footer from './Footer';
import Header from './Header'
import PatreonSection from './Patreon';
import SocialLinks from './SocialLinks';
import TypewriterSection from './TypewriterSection';
import VideoPlayer from './Video'
function App() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div>
      <Header />
      <VideoPlayer src={`${BASE}nature-nook-sitevideosmyVideo.mp4`} />
      <SocialLinks />
      <SocialExperimentSection />
      <PatreonSection/>
      <TypewriterSection />
      <Footer />
    </div>
  )
}
export default App
