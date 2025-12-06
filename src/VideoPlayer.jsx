// src/components/VideoPlayer.jsx
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function VideoPlayer({ src, autoPlay = false, loop = false, muted = false }) {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: autoPlay,
                loop: loop,
                muted: muted,
                fluid: true,
                preload: "auto",
                playbackRates: [0.5, 1, 1.5, 2],
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [autoPlay, loop, muted]);

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden">
            <video
                ref={videoRef}
                className="video-js vjs-default-skin w-full h-full object-cover"
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}
