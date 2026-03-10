"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photo1 = "/images/photo1.jpeg";
const photo2 = "/images/photo2.png";
const photo3 = "/images/photo3.jpeg";
const flowers = "/images/eventMessage.png";

export default function PhotoStack({ data }: any) {
    const getImageUrl = (path: string) => {
        if (!path) return flowers;
        return `http://e-invitatii-back.test/storage/${path}`;
    };
    const photos = data?.photo_stack || [];
    console.log(getImageUrl(photos[0]));

    return (
        <div className="flex flex-col max-w-2xl mt-10 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a8c74] mb-3">Povestea noastră</p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#3d3429]">Momente Împreună</h2>
            </motion.div>
            <div className="relative mx-auto w-full min-h-[600px]  flex justify-center items-center p-10 overflow-hidden mt-5">
                {photos[0] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="absolute top-10 left-2 md:left-15 md:top-0 z-10 transform -rotate-6"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-48 h-64 md:w-60 md:h-80">
                            <Image
                                src={photo1}
                                alt="Wedding couple"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                )}

                {photos[2] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="absolute top-4 right-0 md:right-15 md:top-0 z-20 transform rotate-3"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-52 h-72 md:w-64 md:h-96">
                            <Image
                                src={photo3}
                                alt="Couple in garden"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                )}
                {photos[1] && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="absolute bottom-10 md:bottom-0 left-1/2 z-30 transform -translate-x-1/2 rotate-2"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-56 h-72 md:w-72 md:h-96">
                            <Image
                                src={photo2}
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
