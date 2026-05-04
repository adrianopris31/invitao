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

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-2xl mx-auto">
                <Navbar />
                <Hero />
                <Stats />
                <Services />
                <Gallery />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <CTA />
                <LandingFooter />
            </div>
        </div>
    );
}
