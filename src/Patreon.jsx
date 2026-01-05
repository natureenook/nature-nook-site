import { motion } from "framer-motion";
import { FaPatreon } from "react-icons/fa";

export default function PatreonSection() {
    return (
        <section style={{ padding: "80px 20px" }}>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "40px",
                    alignItems: "center",
                }}
            >
                {/* ICON BOX */}
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        borderRadius: "20px",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#FF424D",
                        height: "clamp(180px, 40vw, 250px)",
                    }}
                >
                    <FaPatreon size={70} color="white" />
                </motion.div>

                {/* TEXT */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontSize: "clamp(24px, 5vw, 32px)",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "14px",
                        }}
                    >
                        Patreon – Հատուկ գիտելիքներ 🌿
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            fontSize: "clamp(14px, 3.8vw, 16px)",
                            lineHeight: "1.8",
                            color: "white",
                            marginBottom: "20px",
                        }}
                    >
                        Patreon-ում դուք կստանաք առանց սահմանափակման և մանրակրկիտ ուսուցում
                        կենդանիների և բույսերի խնամքի վերաբերյալ։ Սա նախատեսված է նրանց համար,
                        ովքեր ուզում են հասնել իրական և երկարատև արդյունքների։
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
                            "🐶 Շների խնամքի ուղեցույցներ",
                            "🐱 Կատուների առողջ սնունդ",
                            "🐠 Ձկների խնամքի պրակտիկա",
                            "🌱 Տնային բույսերի առողջ աճ",
                            "♻️ Էկոլոգիական լուծումներ",
                        ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "8px",
                                    fontSize: "clamp(14px, 3.5vw, 15px)",
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
                        whileHover={{ scale: 1.05 }}
                        style={{
                            display: "block",
                            width: "100%",
                            maxWidth: "280px",
                            padding: "14px 24px",
                            borderRadius: "999px",
                            background: "#FF424D",
                            color: "white",
                            fontWeight: "600",
                            fontSize: "15px",
                            textDecoration: "none",
                            textAlign: "center",
                        }}
                    >
                        Ստանալ էքսկլյուզիվ նյութեր
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
