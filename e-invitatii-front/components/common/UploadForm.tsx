"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import imageCompression from "browser-image-compression";

export default function UploadForm({ slug }: { slug: string }) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState({ current: 0, total: 0 });
    const [albumUrl, setAlbumUrl] = useState("");

    const getWeddingSlug = (slug: string) => {
        return `wedding-${slug}`;
    };
    var invitationSlug = getWeddingSlug(slug);

    useEffect(() => {
        const savedUrl = localStorage.getItem(`album_url_${slug}`);
        if (savedUrl) {
            setAlbumUrl(savedUrl);
        }
    }, [slug]);

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);
        setProgress({ current: 0, total: files.length });

        const options = {
            maxSizeMb: 1,
            maxWidthOrHeigh: 1920,
            useWebWorker: true,
        };

        const fileArray = Array.from(files);

        for (const [index, file] of fileArray.entries()) {
            setProgress({ current: index + 1, total: fileArray.length });

            try {
                const base64 = await fileToBase64(file);

                const res = await fetch(
                    "https://script.google.com/macros/s/AKfycbzSmdUJ97NUu_PEMzaFQcPiTz03U6NRwACGL0Jddk_A-GD1EqEGgDR4SMuVA_cbkd7v/exec",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            base64: base64,
                            type: file.type,
                            name: file.name,
                            slug: invitationSlug,
                        }),
                    },
                );

                const result = await res.json();

                if (result.status === "success" && index === 0) {
                    setAlbumUrl(result.folderUrl);
                    localStorage.setItem(`album_url_${slug}`, result.folderUrl);
                }
            } catch (err) {
                console.error(`Eroare la poza ${file.name}:`, err);
                toast.error(`N-am putut urca: ${file.name}`);
            }
        }

        setUploading(false);
        toast.success("Toate pozele au fost urcate!");
    };

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result as string).split(",")[1]);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="flex flex-col items-center border-gray-300 max-w-2xl  mx-auto rounded-xl h-screen align-items-center align-center justify-center">
            <h3 className="text-xl font-serif mb-4 text-gray-500">Trimite-ne o amintire!</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                disabled={uploading}
                className="hidden"
                multiple
                id="fileInput"
            />
            <label
                htmlFor="fileInput"
                className={`px-4 py-2 bg-[#cbd8c2] hover:bg-[#b8c9ad] text-white rounded-xl font-semibold cursor-pointer mb-4 ${uploading ? "opacity-50" : ""}`}
            >
                {uploading ? `Se încarcă ${progress.current} din ${progress.total}...` : "Alege Poza / Fă o poză"}
            </label>

            {albumUrl && (
                <p className="text-[#7a8c74] italic font-eb-garamond text-xl">
                    <a
                        href={albumUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="underline decoration-1 underline-offset-4 hover:text-[#5f6d5a] transition-colors cursor-pointer"
                    >
                        Apasa aici ca sa vezi albumul!
                    </a>
                </p>
            )}
        </div>
    );
}
