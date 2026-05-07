"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Elena & Andrei",
        date: "Căsătoriți în Aprilie 2026",
        quote: "Invitațiile noastre au fost chiar mai frumoase decât ne-am imaginat. Fiecare invitat a remarcat cât de elegante au fost. A meritat fiecare bănuț!",
        avatar: "EA",
    },
    {
        name: "Andreea & Ionuț",
        date: "Căsătoriți în Octombrie 2025",
        quote: "Echipa a avut atât de multă răbdare cu numeroasele noastre modificări. Rezultatul final a surprins perfect povestea noastră. Recomandăm cu drag pachetul Luxury!",
        avatar: "AI",
    },
    {
        name: "Maria & Ștefan",
        date: "Căsătoriți în Iunie 2025",
        quote: "Am ales invitațiile digitale, iar sistemul de confirmări (RSVP) ne-a ușurat enorm viața. Modern, frumos și fără stres.",
        avatar: "MȘ",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">Love Stories</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Ce spun cuplurile</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white border border-[#ece4d8] rounded-2xl p-6"
                    >
                        <div className="flex gap-0.5 mb-4">
                            {[...Array(5)].map((_, j) => (
                                <Star key={j} className="w-3.5 h-3.5 text-[#c9a96e] fill-[#c9a96e]" />
                            ))}
                        </div>
                        <p className="text-sm text-[#5a504a] leading-relaxed mb-5 italic">"{t.quote}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#f0e6d2] flex items-center justify-center">
                                <span className="text-xs font-medium text-[#c9a96e]">{t.avatar}</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#3d3429]">{t.name}</p>
                                <p className="text-xs text-[#a09382]">{t.date}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
