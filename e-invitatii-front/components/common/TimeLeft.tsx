"use client"; // Obligatoriu pentru că folosim state și useEffect
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TimeLeft({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: false,
    });

    useEffect(() => {
        if (!targetDate) return;

        const calculateTime = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference <= 0) {
                setTimeLeft((prev) => ({ ...prev, isExpired: true }));
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
                isExpired: false,
            });
        };

        calculateTime();
        const timer = setInterval(calculateTime, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft.isExpired) {
        return <div className="text-center py-10 font-great-vibes text-2xl">Evenimentul a început deja!</div>;
    }

    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            <h2 className="text-center font-great-vibes text-3xl mb-8 text-gray-600 italic">
                Până la marele eveniment au mai rămas:
            </h2>

            <div className="flex justify-center gap-4 md:gap-8">
                <TimeUnit value={timeLeft.days} label="Zile" />
                <TimeUnit value={timeLeft.hours} label="Ore" />
                <TimeUnit value={timeLeft.minutes} label="Minute" />
                <TimeUnit value={timeLeft.seconds} label="Secunde" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14 mt-15"
            >
                <div className="inline-block relative">
                    {/* Banner shape */}
                    <div className="relative px-10 py-4">
                        <div
                            className="absolute inset-0 rounded-md"
                            style={{
                                background: "linear-gradient(135deg, #f4f7f1 0%, #e8ede2 150%, #f4f7f1 100%)",
                                boxShadow: "0 2px 16px rgba(201,169,110,0.15)",
                            }}
                        />
                        {/* Left ribbon tail */}
                        <div
                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-full"
                            style={{
                                clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
                                background: "linear-gradient(180deg, #dee7d8, #cbd8c2)",
                            }}
                        />
                        {/* Right ribbon tail */}
                        <div
                            className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-full"
                            style={{
                                clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                                background: "linear-gradient(180deg, #dee7d8, #cbd8c2)",
                            }}
                        />
                        <h2 className="relative font-serif text-2xl sm:text-3xl text-[#3d3429] tracking-wide">
                            Confirmarea Prezenței{" "}
                        </h2>
                    </div>
                </div>
            </motion.div>
            <div className="middle-text text-gray-600 px-4 md:px-8 py-3 text-center mt-5 font-eb-garamond text-xl flex flex-col gap-2">
                {/* <h1 className="text-4xl px-4 font-eb-garamond mb-5 border-gray-100">Confirmarea Prezenței</h1> */}
                <p>Vă rugăm să confirmați prezența și numărul de persoane până la data de:</p>
                <h1 className="font-bold text-2xl">05.05.2026</h1>
                <div className="flex justify-center">
                    <p>Maria - </p>
                    <p>0755 511 701</p>
                </div>
                <div className="flex justify-center">
                    <p>Iozsi - </p>
                    <p>0744 815 361</p>
                </div>
            </div>
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center min-w-[60px] md:min-w-[80px]"
        >
            <div className="text-3xl md:text-5xl font-eb-garamond font-light text-gray-800 border-b border-gray-200 pb-2 w-full text-center">
                {value.toString().padStart(2, "0")}
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest mt-2 text-gray-400 font-sans">
                {label}
            </span>
        </motion.div>
    );
}
