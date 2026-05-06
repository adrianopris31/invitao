"use client";
import { motion } from "framer-motion";
import { Mail, Play } from "lucide-react";
const samples = [
    {
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=700&fit=crop",
        label: "Botanical Garden",
    },
    {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=700&fit=crop",
        label: "Classic Romance",
    },
    {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
        label: "Modern Minimal",
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 px-4 bg-[#faf5ed]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">Inspirație</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Design demo</h2>
                <p className="text-sm text-[#a09382] mt-3">Apasă pe invitația de mai jos pentru un mic demo!</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:gap-5 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="group relative overflow-hidden rounded-xl"
                >
                    <a
                        href="https://www.invitao.xyz/andrei-ioana-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center cursor-pointer p-10 bg-[#231f1c] rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-[#3d3429] max-w-sm mx-auto min-h-162.5"
                    >
                        <div className="w-16 h-16 rounded-full border-2 border-[#c9a96e]/30 flex items-center justify-center mb-5 bg-white/5 group-hover:border-[#c9a96e]/70 group-hover:scale-110 transition-all duration-500">
                            <Mail className="w-6 h-6 text-[#c9a96e]" strokeWidth={1.5} />
                        </div>

                        <div className="font-[cursive] text-3xl md:text-4xl text-[#c9a96e] mb-2 tracking-wide">
                            Andrei & Ioana
                        </div>

                        <div className="font-serif text-xs text-white/50 uppercase tracking-[0.2em] mb-7">
                            Invitație de Nuntă
                        </div>

                        <div className="flex items-center gap-2 px-7 py-3 bg-[#c9a96e] text-white text-sm rounded-full font-medium transition-all duration-300 group-hover:bg-[#b8986a] group-hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                            <Play className="w-4 h-4 fill-current" />
                            <span>Deschide invitația</span>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
