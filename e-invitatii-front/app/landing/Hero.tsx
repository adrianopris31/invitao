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
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8a080] mb-6">Bespoke Wedding Stationery</p>
                <h1 className="font-serif text-5xl sm:text-6xl text-[#3d3429] leading-tight mb-6">
                    Invitations as
                    <br />
                    <span className="italic text-[#c9a96e]">beautiful</span> as your love
                </h1>
                <p className="text-[#7a6e63] text-base sm:text-lg max-w-sm mx-auto mb-10 leading-relaxed">
                    Handcrafted digital and printed wedding invitations designed to set the perfect tone for your
                    special day.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-[#3d3429] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#c9a96e] transition-colors duration-300 shadow-lg">
                        See Our Packages
                    </button>
                    <button className="border border-[#d4c4a8] text-[#3d3429] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#f5ece0] transition-colors duration-300">
                        View Samples
                    </button>
                </div>
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
