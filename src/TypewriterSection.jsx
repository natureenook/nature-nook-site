import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "Ինչ է Nature Nook-ը",
        answer:
            "Nature Nook-ը մասնագիտացված խանութ է, որտեղ ներկայացվում են առողջ կենդանիներ, աշխույժ թռչուններ, հետաքրքիր ձկներ և գեղեցիկ սենյակային բույսեր։",
    },
    {
        question: "Մեր նպատակը",
        answer:
            "Մեր նպատակը մարդկանց տանը բերել բնության տարրերը և ապահովել կենդանիների ու բույսերի ճիշտ խնամք՝ յուրաքանչյուր հաճախորդի համար հստակ, պրոֆեսիոնալ ուղեցույց տրամադրելով։",
    },
    {
        question: "Ապրանքներն ու ծառայությունները Nature Nook-ում",
        answer:
            "• Շների և կատուների պրեմիում և սուպեր պրեմիում դասի կերեր\n" +
            "• Ձկների և ակվարիումների խնամքի պարագաներ՝ Tetra, Barbus, Aqualife ֆիրմայի\n" +
            "• Բույսերի խնամքի պարարտանյութեր՝ տեղական և արտերկրյա\n" +
            "• Անհատական խորհրդատվություն՝ հաճախորդին ուղղորդելով կենդանիների, թռչունների, ձկների և բույսերի ճիշտ խնամքի հարցերում",
    },
];

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b py-4">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    className="inline-block mr-2 text-xl text-green-600 font-bold"
                >
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
                src="public/Artboard 1_1@4x-1000.png"     
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
                    Nature Nook -<br /> Հարց ու պատասխան
                </h1>
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
            <Tagline />
        </div>
    );
}
