import Header from "./Header.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import VideoCarousel from "./VideoCarousel.jsx";
import SocialLinks from "./SocialLinks.jsx";
import TypewriterSection from "./TypewriterSection.jsx";
import Footer from "./Footer.jsx";

const BASE_PATH = "/nature-nook-site/"; // GitHub repo-ի անունը

const mainVideo = `${BASE_PATH}hello.mp4`;

const videos = [
  { src: `${BASE_PATH}video1.mp4`, title: "Sia Photostudio" },
  { src: `${BASE_PATH}video2.mp4`, title: "BeeOnCode" },
  { src: `${BASE_PATH}video3.mp4`, title: "Saint-Hov" },
];

export default function App() {
  return (
    <>
      <Header />

      <VideoPlayer src={mainVideo} autoPlay loop muted />

      <div className="flex flex-col gap-10 mt-10">
        <SocialLinks />
        <VideoCarousel videos={videos} />
        <TypewriterSection />
        <Footer />
      </div>
    </>
  );
}
