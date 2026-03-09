"use client";
import { motion } from "framer-motion";

export default function EnvelopeHero({ data }: any) {
    function getFormattedDate(date: Date) {
        const formatedDate = new Date(date);
        const day = formatedDate.getDate();
        const year = formatedDate.getFullYear();
        const month = formatedDate.toLocaleDateString("ro-RO", { month: "long" });
        const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

        return `${day} ${capitalizedMonth}, ${year}`;
    }

    let getInitials = (names: string) =>
        names
            .split(" & ")
            .map((t) => t.charAt(0))
            .join("&");

    console.log(getInitials(data.client_names));

    return (
        <section className="relative flex flex-col items-center pt-16 pb-24 px-4 overflow-hidden md:overflow-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-[#2d352a] text-3xl tracking-[0.4em] uppercase font-light mb-12 md:mb-16 text-center"
            >
                O invitație specială{" "}
            </motion.div>

            <div className="relative w-full max-w-sm mx-auto" style={{ height: 380 }}>
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -8 }}
                    animate={{ opacity: 1, x: 0, rotate: -6 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-4 md:-left-6 sm:left-0 z-10"
                >
                    <div
                        className="bg-white rounded-lg px-5 py-4 shadow-md border border-[#d8e2d1]"
                        style={{
                            transform: "rotate(-6deg)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#7a8c74] mb-1">Impreună, cu drag</p>
                        <p className="font-serif text-lg text-[#3d3429] leading-tight">{data.client_names}</p>
                        <div className="w-8 h-[1px] bg-[#c9a96e] mt-2" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="absolute bottom-0 right-1/8 md:right-1/6 z-20 translate-x-1/2"
                >
                    <div className="relative w-72 h-48 sm:w-80 sm:h-52">
                        <div
                            className="absolute inset-0 rounded-lg"
                            style={{
                                background: "linear-gradient(180deg, #d8e2d1 0%, #c5d1bd 100%)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
                            }}
                        />

                        {/* Envelope flap (open) */}

                        {/* Open flap visible */}
                        <div
                            className="absolute -top-12 left-0 right-0 h-20"
                            style={{
                                clipPath: "polygon(0% 100%, 50% 20%, 100% 100%)",
                                background: "linear-gradient(180deg, #d8e2d1 0%, #c5d1bd 100%)",
                            }}
                        />

                        {/* Envelope front fold lines */}
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                            {/* Bottom triangle fold - Umbra cea mai de jos */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(0% 30%, 50% 65%, 100% 30%, 100% 100%, 0% 100%)",
                                    background: "linear-gradient(180deg, #d8e2d1 0%, #c5d1bd 100%)",
                                }}
                            />
                            {/* Left fold */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(0% 0%, 50% 65%, 0% 100%)",
                                    background: "linear-gradient(135deg, #e4ebdf 0%, #d1dcc9 100%)",
                                }}
                            />
                            {/* Right fold */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(100% 0%, 50% 65%, 100% 100%)",
                                    background: "linear-gradient(225deg, #dee7d8 0%, #cbd8c2 100%)",
                                }}
                            />
                        </div>

                        {/* Wax seal */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.6, type: "spring" }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
                        >
                            <div
                                className="w-10 h-10 rounded-full bg-[#7a8c74] flex items-center justify-center shadow-lg"
                                style={{ boxShadow: "0 2px 12px rgba(201,169,110,0.4)" }}
                            >
                                <span className="text-white text-xs font-serif font-bold">
                                    {getInitials(data.client_names)}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Invitation card - right side, popping out of envelope */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 80 }}
                    className="absolute -top-2 right-1/6 sm:right-2 z-30"
                >
                    <div
                        className="w-56 sm:w-60 bg-white rounded-xl p-6 border border-[#d8e2d1]"
                        style={{
                            transform: "rotate(4deg)",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                        }}
                    >
                        <div className="text-center">
                            <div className="w-6 h-[1px] bg-[#7a8c74] mx-auto mb-3" />
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#7a8c74] mb-2">
                                Vă invităm cu drag{" "}
                            </p>
                            <h2 className="font-serif text-2xl text-[#3d3429] leading-tight mb-1">Căsătoria</h2>
                            <p className="font-serif text-lg text-[#3d3429] italic">lui</p>
                            <p className="font-serif text-xl text-[#3d3429] mt-1 mb-3">{data?.client_names}</p>
                            <div className="w-6 h-[1px] bg-[#7a8c74] mx-auto mb-3" />
                            <p className="text-xs text-[#7a8c74]">{getFormattedDate(data.event_date)}</p>
                            <p className="text-xs text-[#7a8c74] mt-0.5">{data.location_name}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
