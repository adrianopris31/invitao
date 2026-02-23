import React from "react";

interface LocationProps {
    locationName: string;
    address: string;
}

export default function EventLocation({ locationName, address }: LocationProps) {
    const simpleMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
        locationName + " " + address
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-5 flex flex-col align-center items-center justify-center">
            <div className="top-text order-b-2 border-gray-50 p-3 w-full">
                <h1 className="text-center text-black text-xl">Locatia</h1>
            </div>
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-8 p-1">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={simpleMapUrl}
                    title="Locație Eveniment"
                ></iframe>
            </div>
        </div>
    );
}
