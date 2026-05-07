"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { forwardRef } from "react";

const plans = [
    {
        name: "Digital",
        price: "150 RON",
        period: "o singură dată",
        tagline: "Tot ce vă trebuie, simplu și elegant",
        highlight: false,
        features: [
            "O invitație digitală unică, a voastră",
            "Trimite oricui, oricând — link sau WhatsApp",
            "RSVP online — fără telefoane, fără haos",
            "Toate confirmările, într-un singur loc",
            "2 runde de ajustări incluse",
            "Gata în 48 de ore",
        ],
    },
    {
        name: "Classic",
        price: "300 RON",
        period: "pachet popular",
        tagline: "Invitație + amintiri, totul la un loc",
        highlight: true,
        features: [
            "Tot ce include Digital, plus:",
            "Album foto partajat cu invitații",
            "Cod QR elegant pentru acces rapid",
            "Stocare dedicată pentru amintirile voastre",
            "Design personalizat pe tema nunții",
            "Suport rapid pe WhatsApp",
        ],
    },
    {
        name: "Luxury",
        price: "600 RON",
        period: "experiență completă",
        tagline: "O experiență completă, pentru totdeauna",
        highlight: false,
        features: [
            "Tot ce include Classic, plus:",
            "Invitația și pozele, găzduite pe viață",
            "Arhivă digitală — amintiri fără expirare",
            "Modificări nelimitate până în ziua cea mare",
            "Designer dedicat, exclusiv pentru voi",
            "Timeline interactiv al evenimentului",
            "Suport VIP, oricând aveți nevoie",
        ],
    },
];

export default function Pricing({ innerRef }: { innerRef?: React.Ref<HTMLElement> }) {
    return (
        <section id="pricing" className="py-20 px-4" ref={innerRef}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">Prețuri clare, fără surprize</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Alege experiența potrivită pentru voi</h2>
                <p className="text-sm text-[#a09382] mt-3 max-w-xs mx-auto">
                    Fiecare pachet include o consultație gratuită.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative rounded-2xl p-7 border ${
                            plan.highlight ? "bg-[#3d3429] border-[#3d3429] shadow-2xl" : "bg-white border-[#ece4d8]"
                        }`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="bg-[#c9a96e] text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full font-medium">
                                    Cel mai ales
                                </span>
                            </div>
                        )}

                        <div className="flex items-start justify-between mb-5">
                            <div>
                                <h3
                                    className={`font-serif text-2xl mb-1 ${plan.highlight ? "text-white" : "text-[#3d3429]"}`}
                                >
                                    {plan.name}
                                </h3>
                                <p className={`text-xs ${plan.highlight ? "text-[#c9a96e]" : "text-[#a09382]"}`}>
                                    {plan.tagline}
                                </p>
                            </div>
                            <div className="text-right">
                                <span
                                    className={`font-serif text-4xl ${plan.highlight ? "text-[#c9a96e]" : "text-[#3d3429]"}`}
                                >
                                    {plan.price}
                                </span>
                                <p className={`text-xs mt-0.5 ${plan.highlight ? "text-[#a89070]" : "text-[#a09382]"}`}>
                                    {plan.period}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2.5 mb-7">
                            {plan.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div
                                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                                            plan.highlight ? "bg-[#c9a96e]/20" : "bg-[#f0e8da]"
                                        }`}
                                    >
                                        <Check
                                            className={`w-2.5 h-2.5 ${plan.highlight ? "text-[#c9a96e]" : "text-[#c9a96e]"}`}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <span className={`text-sm ${plan.highlight ? "text-[#d4c4a8]" : "text-[#6a5f55]"}`}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`w-full py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                plan.highlight
                                    ? "bg-[#c9a96e] text-white hover:bg-[#b8986a] shadow-lg"
                                    : "bg-[#f5ece0] text-[#3d3429] hover:bg-[#ede0cc] border border-[#d4c4a8]"
                            }`}
                        >
                            Vreau {plan.name}
                        </button>
                    </motion.div>
                ))}
            </div>

            <p className="text-center text-xs text-[#a09382] mt-8">
                Ai nevoie de ceva cu totul aparte?{" "}
                <span className="underline cursor-pointer text-[#c9a96e]">Contactează-ne</span> — facem posibil ce pare imposibil.
            </p>
        </section>
    );
}
