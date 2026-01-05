import { motion } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaTelegramPlane,
    FaTiktok,
    FaYoutube,
    FaPhoneAlt,
} from "react-icons/fa";

export default function SocialLinks() {
    const links = [
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/natureenook/",
            color: "#E4405F",
        },
        {
            name: "Facebook",
            icon: FaFacebookF,
            url: "https://www.facebook.com/profile.php?id=61560420995181",
            color: "#1877F2",
        },
        {
            name: "Telegram",
            icon: FaTelegramPlane,
            url: "https://t.me/natureenook",
            color: "#229ED9",
        },
        {
            name: "TikTok",
            icon: FaTiktok,
            url: "https://www.tiktok.com/@naturee.nook",
            color: "#000000",
        },
        {
            name: "YouTube",
            icon: FaYoutube,
            url: "https://www.youtube.com/@Naturee_nook",
            color: "#FF0000",
        },

        {
            name: "Call Us",
            icon: FaPhoneAlt,
            url: "tel:+37495449414",
            color: "#5d8c73",
        },
    ];

    return (
        <section className="py-20 px-4">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-3xl font-semibold text-center text-[#5d8c73] mb-12"
            >
                Follow Nature Nook 🌿
            </motion.h2>

            <div className="max-w-[360px] mx-auto grid grid-cols-2 gap-5">
                {links.map((link, index) => {
                    const Icon = link.icon;

                    return (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target={link.name === "Call Us" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: false }}
                            whileHover={{ scale: 1.06, y: -6 }}
                            className="
                                h-28
                                bg-white
                                rounded-2xl
                                shadow-lg
                                flex flex-col items-center justify-center
                                text-center font-medium
                            "
                            style={{ color: link.color }}
                        >
                            <Icon size={32} className="mb-2" />
                            <span className="text-sm">{link.name}</span>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}
