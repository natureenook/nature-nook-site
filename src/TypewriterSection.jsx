import { useState } from "react";
import { motion } from "framer-motion";

const BASE = "/nature-nook-site/";

const faqData = [
    {
        question: "Ինչ է Nature Nook-ը",
        answer:
            "Nature Nook-ը մասնագիտացված խանութ է...",
    },
    {
        question: "Մեր նպատակը",
        answer:
            "Մեր նպատակը մարդկանց տանը բերել բնության տարրերը...",
    },
    {
        question: "Ապրանքներն ու ծառայությունները",
        answer:
            "• Շների և կատուների պրեմիում կերեր\n• Ձկների խնամքի պարագաներ\n• Բույսերի խնամք\n• Խորհրդատվություն",
    },
];

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b py-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-xl text-green-600 font-bold">
                    ❓
                </motion.span>
                <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-700 whitespace-pre-line ml-8"
                >
                    {answer}
                </motion.div>
            )}
        </div>
    );
}

function Tagline() {
    return (
        <div className="mt-10 flex justify-center">
            <img
                src={`${BASE}Artboard 1_1@4x-1000.png`}
                alt="Nature Nook Logo"
                className="w-50 h-auto"
            />
        </div>
    );
}

export default function TypewriterSection() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
                    Nature Nook<br />Հարց ու Պատասխան
                </h1>

                {faqData.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>

            <Tagline />
        </div>
    );
}
