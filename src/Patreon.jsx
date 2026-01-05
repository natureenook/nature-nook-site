import { motion } from "framer-motion";
import { FaPatreon } from "react-icons/fa";

export default function PatreonSection() {
    return (
        <section
            style={{
                padding: "80px 20px",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    alignItems: "center",
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#FF424D",
                        height: "250px",
                    }}
                >
                    <FaPatreon size={80} color="white" />
                </motion.div>

                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "16px",
                        }}
                    >
                        Patreon–Հատուկ գիտելիքներ🌿
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "white",
                            marginBottom: "20px",
                        }}
                    >
                        Patreon-ում դուք կստանաք առանց որևէ սահմանափակման ու մանրակրկիտ ուսուցում
                        կենդանիների և բույսերի խնամքի վերաբերյալ։ Սա նախատեսված է այն մարդկանց համար, ովքեր ցանկանում են իրականում հասնել առողջ և երկար կյանք ունեցող կենդանիների ու բույսերի։
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        style={{
                            listStyle: "none",
                            padding: 0,
                            marginBottom: "24px",
                        }}
                    >
                        {[
                            "🐶 Շների խնամքի մանրակրկիտ ուղեցույցներ",
                            "🐱 Կատուների առողջապահություն և սնունդ",
                            "🐠 Ձկների խնամքի փորձառական հնարքներ",
                            "🌱 Տնային բույսերի երկար կյանք ապահովող խորհուրդներ",
                            "♻️ Էկոլոգիական և անվտանգ լուծումներ տան համար",
                        ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "10px",
                                    fontSize: "15px",
                                    color: "white",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.a
                        href="https://www.patreon.com/c/NatureNook"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        style={{
                            display: "inline-block",
                            padding: "12px 24px",
                            borderRadius: "999px",
                            background: "#FF424D",
                            color: "white",
                            fontWeight: "600",
                            fontSize: "16px",
                            textDecoration: "none",
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Ստանալ էքսկլյուզիվ նյութեր
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
