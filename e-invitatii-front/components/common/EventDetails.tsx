"use client";
import { motion } from "framer-motion";

export default function EventDetails({ data }: any) {
    const ceremonies = data?.ceremony_details || [];

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-10 flex flex-col align-center items-center justify-center px-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <div className="inline-block relative">
                    <div className="relative px-10 py-4">
                        <div
                            className="absolute inset-0 rounded-md"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--theme-bg-from) 0%, var(--theme-bg-mid) 150%, var(--theme-bg-from) 100%)",
                                boxShadow: "0 2px 16px rgba(201,169,110,0.15)",
                            }}
                        />
                        {/* Left ribbon tail */}
                        <div
                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-full"
                            style={{
                                clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
                                background:
                                    "linear-gradient(180deg, var(--theme-primary-lighter), var(--theme-primary-light))",
                            }}
                        />
                        {/* Right ribbon tail */}
                        <div
                            className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-full"
                            style={{
                                clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                                background:
                                    "linear-gradient(180deg, var(--theme-primary-lighter), var(--theme-primary-light))",
                            }}
                        />
                        <h2 className="relative font-serif text-2xl sm:text-3xl text-[#3d3429] tracking-wide">
                            Detaliile Evenimentului
                        </h2>
                    </div>
                </div>
                <p className="text-sm text-(--theme-primary) mt-5 tracking-tight px-2">
                    Abia așteptăm sa sărbătorim ziua noastră specială alături de voi! Iată tot ce trebuie să știți
                    despre eveniment!
                </p>
            </motion.div>
            <div className="middle-text text-gray-600 px-8 py-3 text-center font-eb-garamond text-xl flex flex-col gap-5">
                {ceremonies.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h2 className="text-4xl px-4 font-great-vibes text-primary">{item.title}</h2>

                        <div className="flex flex-col text-gray-500">
                            <span className="font-bold text-2xl">{item.hour}</span>
                            <span className="uppercase tracking-widest text-sm">{item.location}</span>
                        </div>

                        {index < ceremonies.length - 1 && <div className="text-2xl mt-4 opacity-30">❦</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
