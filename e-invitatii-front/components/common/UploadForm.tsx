"use client";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function UploadForm({ slug }: { slug: string }) {
    const [pending, setPending] = useState(0);
    const [albumUrl, setAlbumUrl] = useState("");
    const albumUrlRef = useRef("");
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const galleryInputRef = useRef<HTMLInputElement>(null);

    const invitationSlug = `wedding-${slug}`;

    useEffect(() => {
        const savedUrl = localStorage.getItem(`album_url_${slug}`);
        if (savedUrl) {
            setAlbumUrl(savedUrl);
            albumUrlRef.current = savedUrl;
        }
    }, [slug]);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const fileArray = Array.from(files);
        e.target.value = "";

        const toastId = toast.loading(
            `Se încarcă ${fileArray.length} ${fileArray.length === 1 ? "poză" : "poze"} în album...`,
        );
        setPending((n) => n + fileArray.length);

        const uploadOne = async (file: File) => {
            const base64 = await fileToBase64(file);
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbzSmdUJ97NUu_PEMzaFQcPiTz03U6NRwACGL0Jddk_A-GD1EqEGgDR4SMuVA_cbkd7v/exec",
                {
                    method: "POST",
                    body: JSON.stringify({
                        base64,
                        type: file.type,
                        name: file.name,
                        slug: invitationSlug,
                    }),
                },
            );
            return res.json();
        };

        const uploads = fileArray.map((file) =>
            uploadOne(file).then((result) => {
                if (result.status === "success" && !albumUrlRef.current) {
                    albumUrlRef.current = result.folderUrl;
                    setAlbumUrl(result.folderUrl);
                    localStorage.setItem(`album_url_${slug}`, result.folderUrl);
                }
                return result;
            }),
        );

        Promise.allSettled(uploads).then((results) => {
            setPending((n) => n - fileArray.length);
            const failed = results.filter((r) => r.status === "rejected").length;
            if (failed === 0) {
                toast.success("Pozele au fost urcate cu succes!", { id: toastId });
            } else {
                toast.error(`${failed} ${failed === 1 ? "poză nu s-a putut urca" : "poze nu s-au putut urca"}`, {
                    id: toastId,
                });
            }
        });
    };

    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result as string).split(",")[1]);
            reader.onerror = reject;
        });

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(180deg, var(--theme-bg-from) 0%, var(--theme-bg-mid) 40%, var(--theme-bg-from) 70%, var(--theme-bg-to) 100%)" }}
        >
            {/* Background petals */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <svg
                    className="absolute -top-10 -left-10 opacity-10 w-72 h-72 text-(--theme-primary)"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                >
                    <path d="M100 10 C60 10,10 50,10 100 C10 150,60 190,100 190 C140 190,190 150,190 100 C190 50,140 10,100 10 Z M100 40 C80 40,40 70,40 100 C40 130,80 160,100 160 C120 160,160 130,160 100 C160 70,120 40,100 40 Z" />
                </svg>
                <svg
                    className="absolute -bottom-10 -right-10 opacity-10 w-96 h-96 text-(--theme-primary-light)"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                >
                    <path d="M100 10 C60 10,10 50,10 100 C10 150,60 190,100 190 C140 190,190 150,190 100 C190 50,140 10,100 10 Z" />
                </svg>
                <svg
                    className="absolute top-1/4 right-8 opacity-5 w-48 h-48 text-(--theme-primary-lighter)"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                >
                    <circle cx="100" cy="100" r="80" />
                </svg>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-10 px-6">
                <p className="text-(--theme-primary) tracking-[0.3em] text-xs uppercase mb-3 font-light">Album foto</p>
                <h1 className="font-eb-garamond text-4xl md:text-5xl text-[#5c4a3a] leading-tight">
                    Trimite-ne o amintire
                </h1>
                <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="h-px w-16 bg-(--theme-primary) opacity-60" />
                    <svg className="w-4 h-4 text-(--theme-primary) opacity-80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    <div className="h-px w-16 bg-(--theme-primary) opacity-60" />
                </div>
                <p className="text-(--theme-primary) text-sm mt-3 font-light tracking-wide">
                    Fiecare fotografie devine parte din povestea noastră
                </p>
            </div>

            {/* Split panels */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 px-6 w-full max-w-xl">
                {/* Camera panel */}
                <button
                    onClick={() => cameraInputRef.current?.click()}
                    className="group relative flex-1 flex flex-col items-center justify-center gap-4 py-12 px-6 rounded-2xl border border-(--theme-primary-lighter) bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-(--theme-primary) transition-all duration-300 cursor-pointer"
                >
                    <div className="w-16 h-16 rounded-full bg-(--theme-bg-from) border border-(--theme-primary-lighter) group-hover:border-(--theme-primary) flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        <svg
                            className="w-7 h-7 text-(--theme-primary)"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                            />
                        </svg>
                    </div>
                    <div className="text-center">
                        <p className="font-eb-garamond text-xl text-[#5c4a3a]">Fă o poză</p>
                        <p className="text-(--theme-primary-light) text-xs mt-1 tracking-wide">deschide camera</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--theme-primary) to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </button>

                {/* Divider */}
                <div className="flex sm:flex-col items-center justify-center gap-2 opacity-40">
                    <div className="h-px sm:h-12 w-12 sm:w-px bg-(--theme-primary)" />
                    <span className="text-(--theme-primary) text-xs font-light tracking-widest">sau</span>
                    <div className="h-px sm:h-12 w-12 sm:w-px bg-(--theme-primary)" />
                </div>

                {/* Gallery panel */}
                <button
                    onClick={() => galleryInputRef.current?.click()}
                    className="group relative flex-1 flex flex-col items-center justify-center gap-4 py-12 px-6 rounded-2xl border border-(--theme-primary-lighter) bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-(--theme-primary) transition-all duration-300 cursor-pointer"
                >
                    <div className="w-16 h-16 rounded-full bg-(--theme-bg-from) border border-(--theme-primary-lighter) group-hover:border-(--theme-primary) flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        <svg
                            className="w-7 h-7 text-(--theme-primary)"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                    </div>
                    <div className="text-center">
                        <p className="font-eb-garamond text-xl text-[#5c4a3a]">Din galerie</p>
                        <p className="text-(--theme-primary-light) text-xs mt-1 tracking-wide">alege din telefon</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--theme-primary) to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </button>
            </div>

            {/* Background upload indicator */}
            {pending > 0 && (
                <div className="relative z-10 mt-8 flex items-center gap-3 px-6">
                    <div className="w-3 h-3 rounded-full bg-(--theme-primary) animate-pulse" />
                    <p className="text-(--theme-primary) text-sm tracking-wide font-light">
                        {pending} {pending === 1 ? "poză se încarcă" : "poze se încarcă"} în fundal…
                    </p>
                </div>
            )}

            {/* Album link */}
            {albumUrl && (
                <div className="relative z-10 mt-8 text-center">
                    <a
                        href={albumUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center gap-2 font-eb-garamond text-lg text-(--theme-primary) hover:text-(--theme-primary-dark) transition-colors underline decoration-1 underline-offset-4"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        Vezi albumul nostru
                    </a>
                </div>
            )}

            {/* Hidden inputs */}
            <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFile}
                className="hidden"
            />
            <input
                ref={galleryInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFile}
                className="hidden"
            />
        </div>
    );
}
