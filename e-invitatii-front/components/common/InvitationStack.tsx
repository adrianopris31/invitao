export default function InvitationStack({ data }: any) {
    const getImageUrl = (path: string) => `http://e-invitatii-back.test/storage/${path}`;
    const details = data.family_details;
    const getDate = (date: Date) => {
        const newDate = new Date(date);
        return newDate.getDate() + "." + String(newDate.getMonth() + 1).padStart(2, "0") + "." + newDate.getFullYear();
    };
    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-3/4 md:aspect-4/6">
            {" "}
            <div className="absolute inset-x-0 top-0 flex justify-center z-0">
                <img src={getImageUrl(data.envelope_url)} alt="Envelope" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div className="absolute left-[2%] top-[54%] md:left-[1%] md:top-[48%] lg z-20 w-[45%] transition-transform hover:rotate-0">
                <div className="relative shadow-xl">
                    <img src={getImageUrl(data.cover_url)} alt="Cover" className="w-full h-auto" />
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
                    <img src={getImageUrl(data.card_url)} alt="Details" className="w-full h-auto" />
                    <div className="absolute inset-0 pt-2 md:pt-4 px-6 text-center text-gray-700 flex flex-col justify-center">
                        <p className="text-xs tracking-widest font-great-vibes">Noi,</p>
                        <p className="text-xs tracking-widest font-great-vibes">{data.client_names}</p>
                        {details?.parents_section && (
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] opacity-70">{details.parents_section.label}</span>
                                {details.parents_section.names.map((name: string, i: number) => (
                                    <span key={i} className="text-[12px]">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {details?.godparents_section && (
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] opacity-70">{details.godparents_section.label}</span>
                                {details.godparents_section.names.map((name: string, i: number) => (
                                    <span key={i} className="text-[12px]">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className="text-xs tracking-widest font-eb-garamond">
                            Va invitam sa fiti parte din povestea noastra la data de:
                        </p>
                        <p className="text-lg font-bold font-eb-garamond">{getDate(data.event_date)}</p>
                        <p className="text-xs tracking-widest font-eb-garamond">{data.location_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
