"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Digital",
        price: "$149",
        period: "one-time",
        tagline: "Perfect for the modern couple",
        highlight: false,
        features: [
            "1 custom digital design",
            "Unlimited sends via link",
            "RSVP tracking dashboard",
            "2 revision rounds",
            "48-hour delivery",
            "Guest list management",
        ],
    },
    {
        name: "Classic",
        price: "$349",
        period: "starting",
        tagline: "Our most popular package",
        highlight: true,
        features: [
            "Everything in Digital",
            "50 printed invitations",
            "Premium paper stock",
            "Envelope addressing",
            "Save-the-date card",
            "3 revision rounds",
            "Priority support",
        ],
    },
    {
        name: "Luxury",
        price: "$849",
        period: "starting",
        tagline: "The complete experience",
        highlight: false,
        features: [
            "Everything in Classic",
            "100 printed invitations",
            "Full stationery suite",
            "Hand calligraphy",
            "Wedding website",
            "Unlimited revisions",
            "Dedicated designer",
            "Day-of timeline cards",
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">Transparent Pricing</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Choose Your Package</h2>
                <p className="text-sm text-[#a09382] mt-3 max-w-xs mx-auto">
                    All packages include a free consultation and design matching your vision
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
                                    Most Popular
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
                            Get Started with {plan.name}
                        </button>
                    </motion.div>
                ))}
            </div>

            <p className="text-center text-xs text-[#a09382] mt-8">
                Need something custom? <span className="underline cursor-pointer text-[#c9a96e]">Contact us</span> for a
                personalized quote.
            </p>
        </section>
    );
}
