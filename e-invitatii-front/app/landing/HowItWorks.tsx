"use client";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Trimite-ne detaliile",
        desc: "Poze, locații, dată, program - tot ce doresti să apară pe invitație.",
    },
    {
        number: "02",
        title: "Primesti invitația",
        desc: "În maximum 48h invitația e gata, personalizată cu tot ce ai trimis.",
    },
    {
        number: "03",
        title: "Revizuire",
        desc: "Revizuim impreună pentru a ne asigura ca totul este pe placul tău.",
    },
    {
        number: "04",
        title: "Trimite link-ul",
        desc: "Distribui link-ul invitaților.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-4 bg-[#faf5ed]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">Simplu și rapid</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Cum funcționează</h2>
            </motion.div>

            <div className="space-y-0 max-w-sm mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-7 top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#d4c4a8] via-[#c9a96e] to-[#d4c4a8]" />

                {steps.map((step, i) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                        className="flex gap-5 pb-10 last:pb-0 relative"
                    >
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border border-[#d4c4a8] flex items-center justify-center shadow-sm z-10">
                            <span className="font-serif text-lg text-[#c9a96e]">{step.number}</span>
                        </div>
                        <div className="pt-3">
                            <h3 className="font-serif text-lg text-[#3d3429] mb-1">{step.title}</h3>
                            <p className="text-sm text-[#7a6e63] leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
