"use client";
import { motion } from "framer-motion";
import { Smartphone, Printer, Palette, Mail, PenLine, Gift } from "lucide-react";

const services = [
    {
        icon: Smartphone,
        title: "Digital Invitations",
        desc: "Stunning animated e-invites delivered instantly via link. Easy RSVP tracking included.",
    },
    {
        icon: Printer,
        title: "Printed Cards",
        desc: "Premium quality printed invitations on luxury paper stock, shipped to your door.",
    },
    {
        icon: Palette,
        title: "Custom Design",
        desc: "Work 1-on-1 with our designers to create a completely unique, one-of-a-kind suite.",
    },
    {
        icon: Mail,
        title: "Full Suite",
        desc: "Save-the-dates, invitations, RSVP cards, menus, and thank-you notes — all matching.",
    },
    {
        icon: PenLine,
        title: "Calligraphy Add-on",
        desc: "Hand-lettered envelope addressing and name calligraphy for a truly personal touch.",
    },
    {
        icon: Gift,
        title: "Wedding Website",
        desc: "A matching wedding website to share your story, registry, and collect RSVPs online.",
    },
];

export default function Services() {
    return (
        <section className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8a080] mb-3">What We Offer</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d3429]">Our Services</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="group bg-white rounded-2xl p-6 border border-[#ece4d8] hover:border-[#c9a96e] hover:shadow-lg transition-all duration-300"
                    >
                        <div className="w-11 h-11 rounded-full bg-[#faf5ed] flex items-center justify-center mb-4 group-hover:bg-[#f0e6d2] transition-colors duration-300">
                            <service.icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-lg text-[#3d3429] mb-2">{service.title}</h3>
                        <p className="text-sm text-[#7a6e63] leading-relaxed">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
