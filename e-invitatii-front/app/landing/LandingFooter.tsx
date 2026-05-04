import { Heart } from "lucide-react";

export default function LandingFooter() {
    return (
        <footer className="py-8 px-4 text-center border-t border-[#ece4d8]">
            <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="w-3.5 h-3.5 text-[#c9a96e] fill-[#c9a96e]" />
                <span className="font-serif text-lg text-[#3d3429]">Amore Invites</span>
            </div>
            <p className="text-xs text-[#a09382]">© 2026 Amore Invites · Making love letters since 2018</p>
        </footer>
    );
}
