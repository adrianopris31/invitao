"use client";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 px-4 text-center bg-[#3d3429] relative overflow-hidden">
            {/* Decorative elements */}
            <div
                className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                    transform: "translate(-30%, -30%)",
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                    transform: "translate(30%, 30%)",
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Heart className="w-8 h-8 text-[#c9a96e] fill-[#c9a96e] mx-auto mb-6" />
                <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Gata să începi?</h2>
                <p className="text-[#a89070] text-sm sm:text-base max-w-xs mx-auto mb-10 leading-relaxed">
                    Haide să discutăm toate detaliile!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://ig.me/m/adiopris31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#c9a96e] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#b8986a] transition-colors duration-300 shadow-xl"
                    >
                        Discută cu noi pe Instagram
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
