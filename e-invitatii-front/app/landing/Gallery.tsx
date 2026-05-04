"use client";
import { motion } from "framer-motion";

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
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">Inspiration</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Sample Designs</h2>
                <p className="text-sm text-[#a09382] mt-3">A glimpse of what we can create for you</p>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto">
                {samples.map((sample, i) => (
                    <motion.div
                        key={sample.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className="group relative overflow-hidden rounded-xl"
                    >
                        <img
                            src={sample.src}
                            alt={sample.label}
                            className="w-full h-40 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3d3429]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                            <span className="text-white text-xs font-medium">{sample.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
