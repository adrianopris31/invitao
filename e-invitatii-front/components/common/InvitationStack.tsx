export default function InvitationStack({ assets, data }: any) {
    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] md:aspect-[4/6] mt-5">
            {" "}
            <div className="absolute inset-x-0 top-0 flex justify-center z-0">
                <img src={"/images/closedEnvelopeNoBg.png"} alt="Envelope" className="w-[80%] h-auto drop-shadow-2xl" />
            </div>
            <div className="absolute top-[40%] md:left-[1%] md:top-[40%] lg z-20 w-[45%] transition-transform hover:rotate-0">
                <div className="relative shadow-xl">
                    <img src={"/images/closedInvitation.png"} alt="Cover" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <h2 className="font-serif text-white text-xl text-center">
                            Va asteptam cox pup jos aduceti cadouri
                        </h2>
                    </div>
                </div>
            </div>
            <div className="absolute right-[2%] top-[35%] md:right-[1%] md:top-[32%] z-10 w-[50%] shadow-2xl">
                <div className="relative">
                    <img src={"/images/imgRightF.png"} alt="Details" className="w-full h-auto" />
                    <div className="absolute inset-0 pt-12 px-6 text-center text-gray-700">
                        <p className="text-xs uppercase tracking-widest">Vă așteptăm</p>
                        <p className="text-lg font-bold">31.05.2026</p>
                        <p className="text-xs">idk</p>
                        <p className="text-xs">idk</p>
                        <p className="text-xs">idk</p>
                        <p className="text-xs">idk</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
