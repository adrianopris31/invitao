"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 px-4 text-center">
            {/* Background texture */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: "linear-gradient(160deg, #fdf8f2 0%, #f5ece0 50%, #fdf8f2 100%)",
                }}
            />
            {/* Decorative blobs */}
            <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full -z-10 opacity-20"
                style={{
                    background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full -z-10 opacity-20"
                style={{
                    background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                    transform: "translate(-30%, 30%)",
                }}
            />

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8a080] mb-6">
                    Perfecte pentru orice eveniment
                </p>
                <h1 className="font-serif text-5xl sm:text-6xl text-[#3d3429] leading-tight mb-6">
                    Invitații
                    <br />
                    <span className="italic text-[#c9a96e]"> deosebite</span> pentru voi
                </h1>
                <p className="text-[#7a6e63] text-base sm:text-lg max-w-sm mx-auto mb-10 leading-relaxed">
                    Digitale si personalizabile ca să se potrivească cu ziua ta specială.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-16"
            >
                <ArrowDown className="w-5 h-5 text-[#c9a96e] mx-auto animate-bounce" />
            </motion.div>
        </section>
    );
}
