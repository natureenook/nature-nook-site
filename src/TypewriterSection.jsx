import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BASE = "/nature-nook-site/";

const faqData = [
    {
        icon: "🌿",
        question: "Ինչի՞ց ծնվեց Nature Nook գաղափարը",
        answer:
            "Nature Nook-ը ծնվեց պարզ մի մտքից՝ վերադարձնել բնության հանգստությունը մեր տները։ Մենք ուզում էինք ստեղծել մի անկյուն, որտեղ կենդանիները, բույսերը և մարդիկ իրենց ապահով ու ներդաշնակ կզգան։",
    },
    {
        icon: "🐾",
        question: "Ինչու՞ ենք կարևորում կենդանիների ճիշտ խնամքը",
        answer:
            "Կենդանիները պարզապես կենդանիներ չեն․ նրանք ընտանիքի անդամներ են։ Ճիշտ սնունդը, խնամքը և միջավայրը նրանց առողջ կյանքի հիմքն են։ Մենք ընտրում ենք միայն վստահելի և անվտանգ լուծումներ։",
    },
    {
        icon: "🐠",
        question: "Ակվարիումի աշխարհը՝ սկսնակների համար",
        answer:
            "Ձկների խնամքը կարող է լինել պարզ և հաճելի, եթե ճիշտ ես սկսում։ Մենք օգնում ենք ընտրել ճիշտ ակվարիում, ջերմաստիճան, ֆիլտր և կեր՝ առանց բարդությունների։",
    },
    {
        icon: "🌱",
        question: "Տնային բույսեր՝ ավելի կենդանի միջավայրի համար",
        answer:
            "Բույսերը մաքրում են օդը, հանգստացնում միտքը և կենդանացնում տարածքը։ Մենք առաջարկում ենք ոչ միայն բույսեր, այլ նաև խնամքի ճիշտ խորհուրդներ՝ երկար կյանք ապահովելու համար։",
    },
    {
        icon: "♻️",
        question: "Ինչու՞ ենք ընտրում էկոլոգիական մոտեցումը",
        answer:
            "Բնությանը հոգ տանելը սկսվում է փոքր քայլերից։ Մենք նախընտրում ենք էկո նյութեր, անվտանգ փաթեթավորում և ապրանքներ, որոնք վնաս չեն տալիս միջավայրին։",
    },
    {
        icon: "💬",
        question: "Ինչ աջակցություն եք ստանում մեզնից",
        answer:
            "Մենք պարզապես վաճառող չենք։ Դուք ստանում եք խորհրդատվություն, օգնություն ընտրության հարցում և մշտական աջակցություն նույնիսկ գնումից հետո։",
    },
];

function FaqCard({ icon, question, answer, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-green-900/30 to-black/30 border border-green-700/30 p-6 hover:shadow-xl transition"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-4 text-left"
            >
                <div className="text-3xl">{icon}</div>

                <h3 className="text-lg font-semibold text-white flex-1">
                    {question}
                </h3>

                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    className="text-green-400 text-xl"
                >
                    ⌄
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-white/80 leading-relaxed whitespace-pre-line"
                    >
                        {answer}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
}


export default function FaqSection() {
    return (
        <section className="min-h-screen px-6 py-24 flex justify-center">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-green-500">
                        Nature Nook
                    </h1>
                </div>

                <div className="grid gap-6">
                    {faqData.map((item, i) => (
                        <FaqCard key={i} {...item} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
