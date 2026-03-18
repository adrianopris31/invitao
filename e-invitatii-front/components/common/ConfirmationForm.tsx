"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function ConfirmationForm({ slug }: any) {
    const [step, setStep] = useState("button");

    useEffect(() => {
        const hasConfirmed = localStorage.getItem(`confirmed_${slug}`);

        if (hasConfirmed === "true") {
            setStep("success");
        }
    }, [slug]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    const [formData, setFormData] = useState({
        name: "",
        guests: 1,
        email: "",
        definetely_safe: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.definetely_safe !== "") {
            setStep("success");
            return;
        }
        try {
            const response = await fetch("http://127.0.0.1:8000/api/confirm", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name: formData.name,
                    count: formData.guests,
                    email: formData.email,
                    slug: slug,
                }),
            });

            if (response.ok) {
                toast.success("Te-am trecut pe listă! 🎉", {
                    description: "Mirii au primit confirmarea ta.",
                });
                localStorage.setItem(`confirmed_${slug}`, "true");
                setStep("success");
            }

            if (response.status === 422) {
                toast.error("Ești deja pe listă!");
                setStep("button");
            }
        } catch (error) {
            console.error("Eroare la trimitere:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="px-8 rounded-3xl border border-gray-100 transition-all duration-300">
                <AnimatePresence mode="wait">
                    {step === "button" && (
                        <motion.div
                            key="button-step"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-14"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="font-serif text-2xl sm:text-3xl text-[#3d3429] mb-3">Sau</h2>
                                <p className="text-gray-500 text-sm">
                                    Puteți confirma prezența apăsând butonul de mai jos:
                                </p>
                                <button
                                    className="px-4 py-2 bg-[#cbd8c2] hover:bg-[#b8c9ad] text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
                                    onClick={() => setStep("form")}
                                >
                                    Confirmă Prezența
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === "form" && (
                        <motion.form
                            key="rsvp-form"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5"
                        >
                            <div className="opacity-0 absolute -z-50 h-0 w-0 overflow-hidden">
                                <label>Nu completa acest câmp dacă ești om</label>
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.definetely_safe}
                                    onChange={handleChange}
                                    tabIndex={-1} // Îl scoatem din fluxul de tastă Tab
                                    autoComplete="off"
                                />
                            </div>
                            <motion.div variants={itemVariants} className="space-y-1">
                                <label className="font-serif text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                    Nume complet
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: Popescu Ion"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#cbd8c2] focus:border-transparent outline-none transition-all text-[#7a8c74] bg-white"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-1">
                                <label className="font-serif text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                    Număr de persoane
                                </label>
                                <input
                                    type="number"
                                    placeholder="Câți veniți?"
                                    min="1"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#cbd8c2] focus:border-transparent outline-none transition-all text-[#7a8c74] bg-white"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-1">
                                <label className="font-serif text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                    Adresa email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: popescuion@gmail.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#cbd8c2] focus:border-transparent outline-none transition-all text-[#7a8c74] bg-white"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-2 items-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#cbd8c2] hover:bg-[#cbd8c2] text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
                                >
                                    Trimite Confirmarea
                                </button>
                                <button
                                    type="button"
                                    className="text-sm text-gray-400 hover:text-red-400 transition-colors py-2"
                                    onClick={() => setStep("button")}
                                >
                                    Anulează
                                </button>
                            </motion.div>
                        </motion.form>
                    )}

                    {/* --- PASUL 3: SUCCES --- */}
                    {step === "success" && (
                        <motion.div
                            key="button-success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-14"
                        >
                            <div className="text-center pt-6 animate-in fade-in zoom-in duration-500">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="text-5xl mb-4"
                                >
                                    🎉
                                </motion.div>{" "}
                                <h3 className="text-2xl font-bold text-gray-600 mb-2 font-serif">Mulțumim!</h3>
                                <p className="text-[#7a8c74] italic font-eb-garamond">Te-am trecut pe listă!</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
