"use client";
import { motion } from "framer-motion";

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
        fixed inset-0 z-9999 flex items-center justify-center bg-white transition-all duration-1000 ease-in-out
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
                        {/* Envelope body */}
                        <div
                            className="absolute inset-0 rounded-lg"
                            style={{
                                background: "linear-gradient(180deg, var(--theme-primary-lighter) 0%, var(--theme-primary-light) 100%)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
                            }}
                        />

                        {/* Envelope front folds */}
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                            {/* Bottom fold — slightly darker for depth */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(0% 30%, 50% 65%, 100% 30%, 100% 100%, 0% 100%)",
                                    background: "linear-gradient(180deg, var(--theme-primary-light) 0%, color-mix(in srgb, var(--theme-primary-light) 75%, black) 100%)",
                                }}
                            />
                            {/* Left fold — lighter, catches light from top-left */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(0% 0%, 50% 65%, 0% 100%)",
                                    background: "linear-gradient(135deg, color-mix(in srgb, var(--theme-primary-lighter) 60%, white) 0%, var(--theme-primary-lighter) 100%)",
                                }}
                            />
                            {/* Right fold — darker, in shadow */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: "polygon(100% 0%, 50% 65%, 100% 100%)",
                                    background: "linear-gradient(225deg, color-mix(in srgb, var(--theme-primary-light) 80%, black) 0%, color-mix(in srgb, var(--theme-primary) 60%, var(--theme-primary-light)) 100%)",
                                }}
                            />

                            {/* Fold crease lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
                                <line x1="0%" y1="0%" x2="50%" y2="65%" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
                                <line x1="100%" y1="0%" x2="50%" y2="65%" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
                                <line x1="0%" y1="30%" x2="50%" y2="65%" stroke="rgba(0,0,0,0.14)" strokeWidth="0.8" />
                                <line x1="100%" y1="30%" x2="50%" y2="65%" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
                            </svg>
                        </div>

                        {/* Wax seal */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2, type: "spring" }}
                            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 z-30"
                        >
                            <div
                                className="w-10 h-10 rounded-full bg-(--theme-primary) flex items-center justify-center shadow-lg"
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
