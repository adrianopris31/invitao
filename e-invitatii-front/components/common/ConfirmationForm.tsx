"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function ConfirmationForm({ slug }: any) {
    const [step, setStep] = useState("button");
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        const hasConfirmed = localStorage.getItem(`confirmed_${slug}`);

        console.log(hasConfirmed);
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

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.definetely_safe !== "") {
            setStep("success");
            return;
        }
        const url = isUpdate ? "update" : "confirm";
        const method = isUpdate ? "PATCH" : "POST";
        try {
            const response = await fetch(`${API_URL}${url}`, {
                method: method,
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
                setIsUpdate(false);
                setStep("success");
            }

            if (response.status === 422 && !isUpdate) {
                toast.error("Ești deja pe listă!");
                setStep("button");
            }
        } catch (error) {
            console.error("Eroare la trimitere:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="px-8 py-10 rounded-3xl transition-all duration-300 flex justify-center items-center">
                <AnimatePresence mode="wait">
                    {step === "button" && (
                        <motion.div
                            key="button-step"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="font-serif text-2xl sm:text-3xl text-[#3d3429] mb-3">Sau</h2>
                                <p className="text-gray-500 text-sm">
                                    Puteți confirma prezența apăsând butonul de mai jos:
                                </p>
                                <button
                                    className="px-4 py-2 bg-(--theme-primary-light) hover:bg-(--theme-primary-hover) text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
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
                                    tabIndex={-1}
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-(--theme-primary-light) focus:border-transparent outline-none transition-all text-(--theme-primary) bg-white"
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-(--theme-primary-light) focus:border-transparent outline-none transition-all text-(--theme-primary) bg-white"
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-(--theme-primary-light) focus:border-transparent outline-none transition-all text-(--theme-primary) bg-white"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-2 items-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-(--theme-primary-light) hover:bg-(--theme-primary-hover) text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
                                >
                                    Trimite Confirmarea
                                </button>
                                <button
                                    type="button"
                                    className="text-sm text-gray-400 hover:text-red-400 transition-colors py-2"
                                    onClick={() => {
                                        isUpdate ? setStep("success") : setStep("button");
                                        isUpdate ? setIsUpdate(false) : setIsUpdate(true);
                                        isUpdate ?? localStorage.setItem(`confirmed_${slug}`, "true");
                                    }}
                                >
                                    Anulează
                                </button>
                            </motion.div>
                        </motion.form>
                    )}

                    {step === "success" && (
                        <motion.div
                            key="button-success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="text-center pt-6 animate-in fade-in zoom-in duration-500">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="text-5xl mb-4"
                                >
                                    🎉
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-600 mb-2 font-serif">Mulțumim!</h3>
                                <p className="text-(--theme-primary) italic font-eb-garamond">Te-am trecut pe listă!</p>
                                <p className="text-(--theme-primary) italic font-eb-garamond">
                                    Ai greșit ceva?{" "}
                                    <button
                                        className="underline decoration-dashed underline-offset-4 hover:text-(--theme-primary-dark) transition-colors cursor-pointer"
                                        onClick={() => {
                                            localStorage.removeItem(`confirmed_${slug}`);
                                            setIsUpdate(true);
                                            setStep("form");
                                        }}
                                    >
                                        Modifică aici
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
