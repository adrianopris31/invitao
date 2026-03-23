"use client";
import { motion } from "framer-motion";

// Obligatoriu pentru onClick și state

export default function InvitationContainer({ isOpened, onClick, clientNames }: any) {
    let getInitials = (names: string) =>
        names
            .split(" & ")
            .map((t) => t.charAt(0))
            .join("&");
    return (
        <div
            onClick={onClick}
            className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-1000 ease-in-out
        ${isOpened ? "opacity-0 pointer-events-none scale-150" : "opacity-100"}
      `}
        >
            <div className=" w-full max-w-md p-4 cursor-pointer mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bottom-0 z-20"
                >
                    <div className="relative w-72 h-48 sm:w-80 sm:h-52 mx-auto">
                        <div
                            className="absolute inset-0 rounded-lg"
                            style={{
                                background: "linear-gradient(180deg, #d8e2d1 0%, #c5d1bd 100%)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
                            }}
                        />

                        {/* Envelope flap (open) */}

                        {/* Open flap visible */}
                        {/* Envelope front fold lines */}
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                            {/* Bottom triangle fold */}
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
                            transition={{ duration: 0.4, delay: 1.2, type: "spring" }}
                            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 z-30"
                        >
                            <div
                                className="w-10 h-10 rounded-full bg-[#adc79c] flex items-center justify-center shadow-lg"
                                style={{ boxShadow: "0 2px 12px rgba(201,169,110,0.4)" }}
                            >
                                <span className="text-white text-xs font-serif font-bold">
                                    {getInitials(clientNames)}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                    <h2 className="relative font-eb-garamond text-xl sm:text-2xl text-[#3d3429] tracking-wide text-center mt-5">
                        Apasă pentru a deschide
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
