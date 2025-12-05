export default function Footer() {
    return (
        <footer className=" text-white mt-12 p-6 rounded-t-xl shadow-inner w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-center md:text-left text-sm md:text-base">
                    © {new Date().getFullYear()} Nature Nook. Բոլոր իրավունքները պաշտպանված են.
                </p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a
                        href="https://www.facebook.com/profile.php?id=61560420995181"
                        className="hover:text-green-300 transition-colors duration-200 text-sm"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/natureenook/"
                        className="hover:text-green-300 transition-colors duration-200 text-sm"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://t.me/natureenook"
                        className="hover:text-green-300 transition-colors duration-200 text-sm"
                    >
                        Telegram
                    </a>
                </div>
            </div>
        </footer>
    );
}
