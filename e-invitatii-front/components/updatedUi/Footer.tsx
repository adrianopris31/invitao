"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer({ eventDate, clientNames }: any) {
    function getFormattedDate(date: Date) {
        const formatedDate = new Date(date);
        const day = formatedDate.getDate();
        const year = formatedDate.getFullYear();
        const month = formatedDate.toLocaleDateString("ro-RO", { month: "long" });
        const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

        return `${day} ${capitalizedMonth}, ${year}`;
    }
    return (
        <footer className="py-15 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                {/* Decorative line */}
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#7a8c74]" />
                    <Heart className="w-4 h-4 text-[#7a8c74] fill-[#7a8c74]" strokeWidth={1} />
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#7a8c74]" />
                </div>

                <div>
                    <p className="font-serif text-2xl sm:text-3xl text-[#3d3429] mb-3">
                        Abia așteptăm să ne fiți alături!{" "}
                    </p>
                    <p className="text-sm text-[#7a8c74] leading-relaxed max-w-xs mx-auto">
                        Prezența voastră este cel mai frumos cadou.{" "}
                    </p>
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                >
                    <p className="font-serif text-lg text-[#7a8c74] italic">Cu tot dragul,</p>
                    <p className="font-serif text-xl text-[#3d3429] mt-1">{clientNames}</p>
                </motion.div>

                <div className="pt-4 md:pt-8">
                    <p className="text-[12px] uppercase tracking-[0.3em] text-[#7a8c74]">
                        {getFormattedDate(eventDate)}
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}
