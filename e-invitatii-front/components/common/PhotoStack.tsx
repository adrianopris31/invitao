"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const flowers = "/images/eventMessage.png";
const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE;

export default function PhotoStack({ data }: any) {
    const getImageUrl = (path: string) => {
        if (!path) return flowers;
        return `${STORAGE_URL}${path}`;
    };

    return (
        <div className="flex flex-col max-w-2xl mt-10 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-(--theme-primary) mb-3">Povestea noastră</p>
                <div className="inline-block relative">
                    <div className="relative px-10 py-4">
                        <div
                            className="absolute inset-0 rounded-md"
                            style={{
                                background: "linear-gradient(135deg, var(--theme-bg-from) 0%, var(--theme-bg-mid) 150%, var(--theme-bg-from) 100%)",
                                boxShadow: "0 2px 16px rgba(201,169,110,0.15)",
                            }}
                        />
                        {/* Left ribbon tail */}
                        <div
                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-full"
                            style={{
                                clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
                                background: "linear-gradient(180deg, var(--theme-primary-lighter), var(--theme-primary-light))",
                            }}
                        />
                        {/* Right ribbon tail */}
                        <div
                            className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-full"
                            style={{
                                clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                                background: "linear-gradient(180deg, var(--theme-primary-lighter), var(--theme-primary-light))",
                            }}
                        />
                        <h2 className="relative font-serif text-2xl sm:text-3xl text-[#3d3429] tracking-wide">
                            Momente Împreună{" "}
                        </h2>
                    </div>
                </div>
            </motion.div>
            <div className="relative mx-auto w-full min-h-150 flex justify-center items-center p-10 overflow-hidden mt-5">
                {data.photo_stack[0] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="absolute top-10 left-2 md:left-15 md:top-0 z-10 transform -rotate-6"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-48 h-64 md:w-60 md:h-80">
                            <Image
                                src={getImageUrl(data.photo_stack[0])}
                                alt="Wedding couple"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                )}

                {data.photo_stack[2] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
                        className="absolute top-4 right-0 md:right-15 md:top-0 z-20 transform rotate-3"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-52 h-72 md:w-64 md:h-96">
                            <Image
                                src={getImageUrl(data.photo_stack[2])}
                                alt="Couple in garden"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                )}
                {data.photo_stack[1] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, type: "spring", delay: 0.4 }}
                        className="absolute bottom-10 md:bottom-0 left-1/2 z-30 transform -translate-x-1/2 rotate-2"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-56 h-72 md:w-72 md:h-96">
                            <Image
                                src={getImageUrl(data.photo_stack[1])}
                                alt="Couple in city"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
