import Header from "./Header";
import VideoPlayer from "./VideoPlayer";
import VideoCarousel from "./VideoCarousel";
import SocialLinks from "./SocialLinks";
import TypewriterSection from "./TypewriterSection";
import Footer from "./Footer";

export default function App() {
  const mainVideo = "/հելլօ.mp4";

  return (
    <>
      <Header />

      <VideoPlayer src={mainVideo} autoPlay />

      <div className="flex flex-col gap-10 mt-10">

        <SocialLinks />
        <VideoCarousel
          videos={[
            { src: "public/video (1).mp4", title: "Sia Photostudio" },
            { src: "public/video (2).mp4", title: "BeeOnCode" },
            { src: "public/video (3).mp4", title: "Saint-Hov" },
          ]}
        />
        <TypewriterSection />
        <Footer />
      </div>
    </>
  );
}
