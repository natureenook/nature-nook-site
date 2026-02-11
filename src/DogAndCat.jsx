import { motion } from "framer-motion";

export default function SocialExperimentSection() {
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
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                        width: "100%",
                        aspectRatio: "4 / 3",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        background: "#000",
                    }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}dog.jpg`}
                        alt="Dog feeding"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    <img
                        src={`${import.meta.env.BASE_URL}cat.jpg`}
                        alt="Cat feeding"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </motion.div>

                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontSize: "clamp(24px, 5vw, 34px)",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "16px",
                        }}
                    >
                        Սոցիալական փորձ՝ հանուն դրսի կենդանիների 🐾
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            fontSize: "15px",
                            lineHeight: "1.8",
                            color: "white",
                            marginBottom: "20px",
                        }}
                    >
                        Շուտով Nature Nook-ը սկսում է սոցիալական փորձ, որի ընթացքում
                        կկերակրենք դրսում ապրող շներին և կատուներին։
                        Սա պարզապես սնունդ տալու մասին չէ —
                        սա հոգատարության, ուշադրության և իրական փոփոխության մասին է։
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
                            "🐶 Դրսի շների կերակրում",
                            "🐱 Դրսի կատուների կերակրում",
                            "📸 Իրական նկարահանումներ",
                            "❤️ Առանց բեմադրության",
                            "🌿 Բաց և ազնիվ սոցիալական փորձ",
                        ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: "10px",
                                    fontSize: "14px",
                                    color: "white",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        style={{
                            display: "inline-block",
                            padding: "10px 18px",
                            borderRadius: "999px",
                            background: "#e6f3ed",
                            color: "#2f5d50",
                            fontWeight: "600",
                            fontSize: "14px",
                        }}
                    >
                        🚧 Շուտով մեկնարկում է
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
