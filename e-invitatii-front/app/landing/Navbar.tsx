import { Heart } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#ece4d8]">
            <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]" />
                    <span className="font-serif text-xl text-[#3d3429]">Amore Invites</span>
                </div>
                <button className="text-sm bg-[#3d3429] text-white px-4 py-2 rounded-full hover:bg-[#c9a96e] transition-colors duration-300">
                    View Pricing
                </button>
            </div>
        </nav>
    );
}
