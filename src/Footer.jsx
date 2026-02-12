import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const BASE = "/nature-nook-site/";

function Tagline() {
    return (
        <div className="mt-16 flex flex-col items-center gap-4 opacity-80 text-center px-4">
            <img
                src={`${BASE}Artboard 1_1@4x-1000.png`}
                alt="Nature Nook Logo"
                className="w-44 mx-auto"
            />
        </div>
    );
}

function Footer() {
    return (
        <footer className="text-white py-14 flex flex-col items-center">
            <Tagline />

            <div className="max-w-4xl w-full px-4 mt-12 flex flex-col items-center text-center space-y-8">

                <p className="text-gray-300 font-extrabold max-w-xl">
                    Մեր նպատակն է ձեր տունը վերածել բնական միջավայրի՝ առողջ ու հարմարավետ։
                </p>

                <div className="flex items-center justify-center gap-6 text-xl">
                    <a href="https://www.facebook.com/profile.php?id=61560420995181" className="hover:text-green-400 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/natureenook/" className="hover:text-green-400 transition">
                        <FaInstagram />
                    </a>  <img
                        src={`${BASE}Artboard 1_1@4x-1000.png`}
                        alt="Nature Nook Logo"
                        className="w-12 h-auto opacity-90"
                    />
                </div>

                <div className="space-y-2">
                    <p className="text-gray-300 font-extrabold">
                        📞 Հեռախոս:{" "}
                        <a
                            href="tel:+37495559514"
                            className="text-green-400 hover:underline hover:text-green-300 transition"
                        >
                            +374 95 559514
                        </a>
                    </p>

                    <p className="text-gray-300 font-extrabold">
                        ✉ Էլ. փոստ:{" "}
                        <a
                            href="mailto:natures.nook@mail.ru"
                            className="text-green-400 hover:underline hover:text-green-300 transition"
                        >
                            natures.nook@mail.ru
                        </a>
                    </p>
                </div>

                <div className="w-full border-t border-gray-700 pt-4 text-sm font-extrabold">
                    © {new Date().getFullYear()} Nature Nook. Բոլոր իրավունքները պաշտպանված են։
                </div>
            </div>
        </footer>
    );
}

export default Footer;
