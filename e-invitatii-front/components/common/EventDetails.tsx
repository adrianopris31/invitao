export default function EventDetails({ data }: any) {
    const ceremonies = data?.ceremony_details || [];

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-10 flex flex-col align-center items-center justify-center px-2">
            <div className="relative">
                <img src={"/images/eventDetailsBg.png"} alt="Details" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col text-white text-4xl md:text-5xl font-great-vibes w-fit">
                        <h1 className="transform -translate-x-8 md:-translate-x-12">Detaliile</h1>
                        <h1 className="transform translate-x-8 md:translate-x-12">Evenimentului</h1>
                    </div>
                </div>
            </div>
            <div className="middle-text text-gray-600 px-8 py-3 text-center mt-5 font-eb-garamond text-xl flex flex-col gap-5">
                <p>
                    Abia așteptăm sa sărbătorim ziua noastră specială alături de voi! Iată tot ce trebuie să știți
                    pentru a profita la maximum de eveniment!
                </p>
                <h1 className="text-4xl px-4 font-eb-garamond mb-5 border-b border-gray-100">
                    Începutul Evenimentului
                </h1>
                {ceremonies.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h2 className="text-4xl px-4 font-great-vibes text-primary">{item.title}</h2>

                        <div className="flex flex-col text-gray-500">
                            <span className="font-bold text-2xl">{item.hour}</span>
                            <span className="uppercase tracking-widest text-sm">{item.location}</span>
                        </div>

                        {index < ceremonies.length - 1 && <div className="text-2xl mt-4 opacity-30">❦</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
