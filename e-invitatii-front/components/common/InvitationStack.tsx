export default function InvitationStack({ assets, data }: any) {
    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-3/4 md:aspect-4/6">
            {" "}
            <div className="absolute inset-x-0 top-0 flex justify-center z-0">
                <img src={"/images/closedEnvelope2.png"} alt="Envelope" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div className="absolute left-[2%] top-[54%] md:left-[1%] md:top-[48%] lg z-20 w-[45%] transition-transform hover:rotate-0">
                <div className="relative shadow-xl">
                    <img src={"/images/leftCardCover.png"} alt="Cover" className="w-full h-auto" />
                    <div className="absolute inset-0 w-full flex flex-col items-center font-eb-garamond leading-none gap-0 pt-2 px-1 uppercase text-xs">
                        <p>Va asteptam cu drag</p>
                        <p>Sa ne bucuram impreuna</p>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 italic font-great-vibes">
                        <h2 className="text-white text-5xl text-center font-great-vibes">Joszi</h2>
                        <h2 className="text-white text-5xl text-center font-great-vibes">&</h2>
                        <h2 className="text-white text-5xl text-center font-great-vibes">Maria</h2>
                    </div>
                </div>
            </div>
            <div className="absolute right-[2%] top-[45%] md:right-[1%] md:top-[40%] z-10 w-[48%] shadow-2xl">
                <div className="relative">
                    <img src={"/images/rightCover2.png"} alt="Details" className="w-full h-auto" />
                    <div className="absolute inset-0 pt-4 px-6 text-center text-gray-700">
                        <p className="text-xs tracking-widest font-great-vibes">Noi,</p>
                        <p className="text-xs tracking-widest font-great-vibes">Joszi si Maria,</p>
                        <p className="text-xs tracking-widest font-eb-garamond">alaturi de nasii nostri</p>
                        <p className="text-xs tracking-widest font-eb-garamond">da si da</p>
                        <p className="text-xs tracking-widest font-eb-garamond">Si parintii</p>
                        <p className="text-xs tracking-widest font-eb-garamond">da si da si</p>
                        <p className="text-xs tracking-widest font-eb-garamond">da si da</p>
                        <p className="text-xs tracking-widest font-eb-garamond">
                            Va invitam sa fiti parte din povestea noastra si sa sarbatoriti alaturi de noi crearea
                            familiei noastre
                        </p>
                        <p className="text-lg font-bold">31.05.2026</p>
                        <p className="text-xs tracking-widest font-eb-garamond">La lacul plus</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
