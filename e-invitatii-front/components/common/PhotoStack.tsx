import Image from "next/image";

const photo1 = "/images/photo1.jpeg";
const photo2 = "/images/photo2.png";
const photo3 = "/images/photo3.jpeg";
const flowers = "/images/eventMessage.png";

export default function PhotoStack({ data }: any) {
    const getImageUrl = (path: string) => {
        if (!path) return flowers;
        return `http://e-invitatii-back.test/storage/${path}`;
    };
    const photos = data?.photo_stack || [];
    console.log(getImageUrl(photos[0]));

    return (
        <div className="flex flex-col max-w-2xl mt-10 mx-auto">
            <div className="relative">
                <img src={flowers} alt="Details" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col text-white text-4xl md:text-5xl font-eb-garamond w-fit mt-2">
                        <h1 className="transform font-great-vibes">Noi</h1>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto w-full min-h-[600px] bg-white flex justify-center items-center p-10 overflow-hidden mt-5">
                {photos[0] && (
                    <div
                        className="absolute top-10 left-2 md:left-15 md:top-0 z-10 transform -rotate-6"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-48 h-64 md:w-60 md:h-80">
                            <Image
                                src={photo1}
                                alt="Wedding couple"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </div>
                )}

                {photos[1] && (
                    <div
                        className="absolute top-4 right-0 md:right-15 md:top-0 z-20 transform rotate-3"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-52 h-72 md:w-64 md:h-96">
                            <Image
                                src={photo2}
                                alt="Couple in garden"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </div>
                )}
                {photos[2] && (
                    <div
                        className="absolute bottom-10 md:bottom-0 left-1/2 z-30 transform -translate-x-1/2 rotate-2"
                        style={{
                            backgroundColor: "white",
                            padding: "1rem",
                            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        }}
                    >
                        <div className="relative w-56 h-72 md:w-72 md:h-96">
                            <Image
                                src={photo3}
                                alt="Couple in city"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
