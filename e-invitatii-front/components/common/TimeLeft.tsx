"use client"; // Obligatoriu pentru că folosim state și useEffect

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
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
            <div className="text-3xl md:text-5xl font-eb-garamond font-light text-gray-800 border-b border-gray-200 pb-2 w-full text-center">
                {value.toString().padStart(2, "0")}
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest mt-2 text-gray-400 font-sans">
                {label}
            </span>
        </div>
    );
}
