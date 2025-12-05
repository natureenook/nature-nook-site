import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaTiktok, FaPatreon, FaPhoneAlt } from "react-icons/fa";

export default function SocialLinks() {
    const links = [
        { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/natureenook/", color: "#E4405F" },
        { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61560420995181", color: "#1877F2" },
        { name: "Telegram", icon: <FaTelegramPlane />, url: "https://t.me/natureenook", color: "#229ED9" },
        { name: "TikTok", icon: <FaTiktok />, url: "https://www.tiktok.com/@naturee.nook", color: "#000000" },
        { name: "Patreon", icon: <FaPatreon />, url: "https://www.patreon.com/c/NatureNook", color: "#FF424D" },
        { name: "Call Us", icon: <FaPhoneAlt />, url: "tel:+37495449414", color: "#5d8c73" }
    ];

    return (
        <div className="min-h-screen 
 flex flex-col items-center justify-center gap-10 p-6 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-semibold text-[#5d8c73] drop-shadow"
            >
                Follow Nature Nook 🌿
            </motion.h1>

            <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-md mx-auto">
                {links.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target={link.name === "Call Us" ? "_self" : "_blank"}
                        className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md bg-white w-full h-36"
                        style={{ color: link.color }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.3 }}
                            className="text-4xl"
                        >
                            {link.icon}
                        </motion.div>
                        <p className="text-base mt-2 font-medium">{link.name}</p>
                    </motion.a>
                ))}
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-[#5d8c73] text-sm opacity-70 font-semibold 
               drop-shadow-[0_2px_6px_rgba(93,140,115,0.45)] 
               tracking-wide"
            >
                Մենք ստեղծում ենք խաղաղ աշխարհ յուրաքանչյուր արարածի համար🌱
            </motion.p>

        </div>
    );
}
