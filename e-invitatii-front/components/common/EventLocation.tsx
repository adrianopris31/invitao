"use client";
import { motion } from "framer-motion";
import React from "react";

interface LocationProps {
    locationName: string;
    address: string;
}

export default function EventLocation({ locationName, address }: LocationProps) {
    const simpleMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
        locationName + " " + address,
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-5 flex flex-col align-center items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
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
                            Locația evenimentului
                        </h2>
                    </div>
                </div>
            </motion.div>
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-8 p-1 ease-in">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={simpleMapUrl}
                    title="Locație Eveniment"
                ></iframe>
            </div>
        </div>
    );
}
