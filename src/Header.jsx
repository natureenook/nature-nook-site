// Header.jsx
export default function Header() {
    return (
        <header className="w-full h-[105px] fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="flex items-center gap-3">
                    <img
                        src="Artboard 5_15@4x-1000.png"
                        alt="Nature Nook Logo"
                        className="w-20 h-15j rounded-full shadow-lg object-cover"
                    />
                    <div>
                        <h1 className="text-white text-xl font-bold tracking-wide">
                            Nature Nook
                        </h1>
                        <p className="text-green-300 text-sm -mt-1">
                           Քո Սրտի Փոքրիկ Անկյունը
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="text-white hover:text-green-300 text-xl">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white hover:text-green-300 text-xl">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="#" className="text-white hover:text-green-300 text-xl">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>

            </div>
        </header>
    );
}
