"use client";
import { motion } from "framer-motion";

const stats = [
    { value: "99+", label: "Comenzi onorate" },
    { value: "100%", label: "Mulțumire" },
    { value: "48h", label: "Termen livrare" },
];

export default function Stats() {
    return (
        <section className="py-12 px-4 bg-[#3d3429]">
            <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <p className="font-serif text-3xl text-[#c9a96e] mb-1">{stat.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#b8a88a]">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
