import React, { useRef } from "react";

const cardsData = [
    { id: "january", title: "Հունվար", image: "public/dog and cat.png", info: "Փոքր Կտոր՝ Մեծ կյանք" },
    { id: "february", title: "Փետրվար", image: "public/aqualife.jpg", info: "Aqualife" },
    { id: "march", title: "Մարտ", image: "public/photo_2025-12-23_00-12-20.jpg", info: "Քայլ Առ Քայլ" },
];

function FlipCarousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-7xl mx-auto py-12 px-2">
            <h1
                className="text-3xl md:text-4xl font-extrabold text-center mb-10"
                style={{
                    color: "green",
                    WebkitTextStroke: "1px white",
                    textStroke: "1px black ",
                }}
            >
                Շուտով ! ! !
            </h1>
            <div className="flex items-center relative">


                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto gap-6 px-2 py-2 scroll-smooth no-scrollbar"
                >
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="relative w-80 sm:w-96 md:w-[400px] h-44 sm:h-48 md:h-52 perspective"
                        >
                            <div className="relative w-full h-full transition-transform duration-600 transform-style preserve-3d hover:rotate-y-180 group cursor-pointer">

                                <div className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-3 text-2xl font-semibold ">
                                        {card.title}
                                    </div>
                                </div>

                                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br  to-gray-700 text-white rounded-3xl flex items-center justify-center p-6 text-center text-3xl font-medium shadow-inner">
                                    {card.info}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective { perspective: 1200px; }
        .transform-style { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
        </div>
    );
}

export default FlipCarousel;
