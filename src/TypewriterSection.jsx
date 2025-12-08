import { useState } from "react";

const BASE = "/nature-nook-site/";

const faqData = [
    {
        question: "Ինչ է Nature Nook-ը",
        answer: "Nature Nook-ը մասնագիտացված խանութ է...",
    },
    {
        question: "Մեր նպատակը",
        answer: "Մեր նպատակը մարդկանց տանը բերել բնության տարրերը...",
    },
    {
        question: "Ապրանքներն ու ծառայությունները",
        answer: "• Շների և կատուների պրեմիում կերեր\n• Ձկների խնամքի պարագաներ\n• Բույսերի խնամք\n• Խորհրդատվություն",
    },
];

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b py-4">
            <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className={`text-xl text-green-600 font-bold transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
                        }`}
                >
                    ❓
                </span>

                <h3 className="text-lg font-semibold text-gray-800">
                    {question}
                </h3>
            </div>

            <div
                className={`
                    overflow-hidden transition-all duration-300 ml-8
                    ${isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}
                `}
            >
                <p className="text-gray-700 whitespace-pre-line">
                    {answer}
                </p>
            </div>
        </div>
    );
}

function Tagline() {
    return (
        <div className="mt-10 flex justify-center">
            <img
                src={`${BASE}Artboard 1_1@4x-1000.png`}
                alt="Nature Nook Logo"
                className="w-52 h-auto"
            />
        </div>
    );
}

export default function TypewriterSection() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-green-700 mb-6 text-center leading-tight">
                    Nature Nook<br />Հարց ու Պատասխան
                </h1>

                {faqData.map((item, i) => (
                    <FaqItem key={i} question={item.question} answer={item.answer} />
                ))}
            </div>

            <Tagline />
        </div>
    );
}
