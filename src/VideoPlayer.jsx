import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function VideoPlayer({ src, autoPlay = false }) {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: autoPlay,
                fluid: true,   
                preload: "auto",
                playbackRates: [0.5, 1, 1.5, 2],
                controlBar: { volumePanel: { inline: false } },
            });
        }
    }, []);

    return (
        <div className="w-full h-[790px] rounded-xl overflow-hidden">
            <video
                ref={videoRef}
                className="video-js vjs-default-skin w-full h-full object-cover"
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}
