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
                <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Ready to begin?</h2>
                <p className="text-[#a89070] text-sm sm:text-base max-w-xs mx-auto mb-10 leading-relaxed">
                    Start with a free consultation. We'll bring your dream wedding stationery to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="flex items-center justify-center gap-2 bg-[#c9a96e] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#b8986a] transition-colors duration-300 shadow-xl">
                        Book Free Consultation
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border border-[#6a5a4a] text-[#c9a96e] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#4a3f35] transition-colors duration-300">
                        See Pricing
                    </button>
                </div>

                <p className="text-[#6a5a4a] text-xs mt-8">No commitment required · Response within 24 hours</p>
            </motion.div>
        </section>
    );
}
