import { useEffect } from "react";
import { motion } from "framer-motion";

const BASE_PATH = "/nature-nook-site/";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-[#5d8c73]">

      <video
        src={`${BASE_PATH}video_2025-11-17_22-23-50.mp4`}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />

      <motion.div
        className="absolute text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Բարի Գալուստ</h1>
        <p className="text-white/90 text-sm sm:text-base">Nature Nook 🌿</p>

        <motion.div className="flex gap-2 mt-5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-white"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
