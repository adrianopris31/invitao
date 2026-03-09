import Footer from "@/components/updatedUi/Footer";
export default function InvitationLayout({ children }: { children: React.ReactNode }) {
    return (
        <section
            className="invitation-container min-h-screen"
            style={{
                background: "linear-gradient(180deg, #f4f7f1 0%, #edf2e8 40%, #f4f7f1 70%, #e6eee0 100%)",
            }}
        >
            {children}

            {/* <footer className="text-center opacity-100 max-w-2xl mx-auto">
                <div className="relative">
                    <img src={"/images/eventFooter.png"} alt="Details" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col text-white text-2xl md:text-4xl font-eb-garamond w-fit mt-2">
                            <h1 className="font-great-vibes">Te asteptam cu drag</h1>
                            <h1 className="font-eb-garamond text-l">30.05.2026</h1>
                        </div>
                    </div>
                </div>
            </footer> */}
        </section>
    );
}
