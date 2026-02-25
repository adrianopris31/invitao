"use client";
import { useState } from "react";
import Image from "next/image";

export default function InvitationStack({ data }: any) {
    const STORAGE_BASE = process.env.NEXT_PUBLIC_STORAGE;

    const getImageUrl = (path: string) => `${STORAGE_BASE}/${path}`;

    const details = data.family_details;

    const getDate = (date: Date) => {
        const newDate = new Date(date);
        return newDate.getDate() + "." + String(newDate.getMonth() + 1).padStart(2, "0") + "." + newDate.getFullYear();
    };

    const [isLoadedLeft, setIsLoadedLeft] = useState(false);
    const [isLoadedRight, setIsLoadedRight] = useState(false);

    const clientNames = data.client_names ? data.client_names : [];
    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-3/4 md:aspect-4/6">
            {" "}
            <div className="absolute inset-x-0 top-0 flex justify-center z-0">
                <img src={"/images/closedEnvelope2.png"} alt="Envelope" className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div className="absolute left-[2%] top-[54%] md:left-[1%] md:top-[48%] z-20 w-[45%] transition-transform hover:rotate-0">
                <div
                    className={`relative shadow-xl overflow-hidden bg-olive-400 aspect-[5/7] ${!isLoadedLeft ? "animate-pulse" : ""}`}
                >
                    <Image
                        src={getImageUrl(data.cover_url)}
                        alt="Cover"
                        width={500}
                        height={700}
                        className={`w-full h-auto transition-opacity duration-500 ${isLoadedLeft ? "opacity-100" : "opacity-0"}`}
                        onLoadingComplete={() => setIsLoadedLeft(true)}
                        unoptimized
                    />
                    <div className="absolute inset-0 w-full flex flex-col items-center font-eb-garamond leading-none gap-0 pt-2 px-1 uppercase text-[12px] md:text-xl md:mt-4 text-gray-50">
                        <p>Va asteptam cu drag</p>
                        <p>Sa ne bucuram impreuna</p>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 font-great-vibes">
                        {data.client_names.split(" ").map((name: string, index: number) => (
                            <h2 key={index} className="text-white text-5xl md:text-6xl text-center drop-shadow-md">
                                {name}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute right-[2%] top-[45%] md:right-[1%] md:top-[40%] z-10 w-[48%] shadow-2xl">
                <div
                    className={`relative overflow-hidden bg-stone-100 transition-all duration-500 aspect-[5/7] ${!isLoadedRight ? "animate-pulse" : ""}`}
                >
                    <Image
                        src={getImageUrl(data.card_url)}
                        alt="Details"
                        width={600}
                        height={800}
                        priority
                        className={`w-full h-auto transition-opacity duration-700 ease-in-out ${isLoadedRight ? "opacity-100" : "opacity-0"}`}
                        onLoadingComplete={() => setIsLoadedRight(true)}
                        unoptimized
                    />

                    <div className="absolute inset-0 pt-2 md:pt-4 px-6 text-center text-gray-700 flex flex-col justify-center md:gap-2">
                        <p className="text-xs tracking-widest font-great-vibes md:text-xl">Noi,</p>
                        <p className="text-xs tracking-widest font-great-vibes md:text-xl">{data.client_names}</p>

                        {details?.parents_section && (
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] opacity-70 md:text-[12px]">
                                    {details.parents_section.label}
                                </span>
                                {details.parents_section.names.map((name: string, i: number) => (
                                    <span key={i} className="text-[12px] md:text-[14px]">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {details?.godparents_section && (
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] opacity-70 md:text-[12px]">
                                    {details.godparents_section.label}
                                </span>
                                {details.godparents_section.names.map((name: string, i: number) => (
                                    <span key={i} className="text-[12px] md:text-[14px]">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}

                        <p className="text-xs tracking-widest font-eb-garamond md:text-[14px] mt-1">
                            Va invitam sa fiti parte din povestea noastra la data de:
                        </p>
                        <p className="text-lg font-bold font-eb-garamond">{getDate(data.event_date)}</p>
                        <p className="text-xs tracking-widest font-eb-garamond">{data.location_name}</p>
                        <p className="text-[10px] md:text-xs tracking-widest font-eb-garamond opacity-80">
                            {data.location_address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
