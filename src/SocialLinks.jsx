export default function SocialLinks() {
    const links = [
        { name: "Instagram", icon: "📸", url: "https://www.instagram.com/natureenook/", color: "#E4405F" },
        { name: "Facebook", icon: "📘", url: "https://www.facebook.com/profile.php?id=61560420995181", color: "#1877F2" },
        { name: "Telegram", icon: "✈️", url: "https://t.me/natureenook", color: "#229ED9" },
        { name: "TikTok", icon: "🎵", url: "https://www.tiktok.com/@naturee.nook", color: "#000000" },
        { name: "Patreon", icon: "❤️", url: "https://www.patreon.com/c/NatureNook", color: "#FF424D" },
        { name: "Call Us", icon: "📞", url: "tel:+37495449414", color: "#5d8c73" }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#5d8c73] drop-shadow animate-fadeIn">
                Follow Nature Nook 🌿
            </h1>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-md mx-auto">
                {links.map((link, i) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target={link.name === "Call Us" ? "_self" : "_blank"}
                        className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md bg-white w-full h-36 
                                   hover:scale-105 hover:rotate-1 active:scale-95 
                                   transition-transform duration-300"
                        style={{ color: link.color }}
                    >
                        <div className="text-4xl animate-bounce-slow">
                            {link.icon}
                        </div>
                        <p className="text-base mt-2 font-medium">{link.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
