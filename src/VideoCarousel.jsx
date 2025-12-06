import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoCarousel({ videos }) {
    const [current, setCurrent] = useState(0);

    const nextVideo = () => setCurrent((prev) => (prev + 1) % videos.length);
    const prevVideo = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

    return (
        <div className="w-[100dvw] h-[100vh] relative overflow-hidden bg-black flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.video
                    key={current}
                    src={videos[current].src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            <motion.div
                key={`title-${current}`}
                className="absolute bottom-20 w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-white text-xl sm:text-2xl font-semibold">
                    {videos[current].title}
                </p>
            </motion.div>

            <button
                onClick={prevVideo}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            >
                &#10094;
            </button>

            <button
                onClick={nextVideo}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
}
