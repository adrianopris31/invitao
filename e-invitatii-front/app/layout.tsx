import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Invitații Online - Invitao",
    description: "Cea mai frumoasă invitație pentru nunta voastră",
};

export const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-great-vibes",
});
export const ebGaramond = EB_Garamond({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-eb-garamond",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${ebGaramond.variable} antialiased`}
            >
                {children}
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
