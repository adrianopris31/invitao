"use client";
import Image from "next/image";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import Stats from "./landing/Stats";
import CTA from "./landing/CTA";
import Gallery from "./landing/Gallery";
import HowItWorks from "./landing/HowItWorks";
import LandingFooter from "./landing/LandingFooter";
import Pricing from "./landing/Pricing";
import Services from "./landing/Services";
import Testimonials from "./landing/Testimonials";
import { useRef } from "react";

export default function Home() {
    const pricesRef = useRef<HTMLElement>(null);

    const handleScrollToPrices = () => {
        if (pricesRef.current) {
            pricesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-2xl mx-auto">
                <Navbar onSeePricesClick={handleScrollToPrices} />
                <Hero />
                <Stats />
                <Services />
                <Gallery />
                <HowItWorks />
                <Pricing innerRef={pricesRef} />
                <Testimonials />
                <CTA />
                <LandingFooter />
            </div>
        </div>
    );
}
