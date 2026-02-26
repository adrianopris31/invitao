"use client"; // Obligatoriu pentru onClick și state

export default function InvitationContainer({ isOpened, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-1000 ease-in-out
        ${isOpened ? "opacity-0 pointer-events-none scale-150" : "opacity-100"}
      `}
        >
            <div className="relative w-full max-w-md p-4 cursor-pointer">
                <img
                    src="/images/closedEnvelope.jpg"
                    alt="Apasa pentru a deschide"
                    className="w-full h-auto animate-bounce-slow"
                />
                <p className="text-center mt-4 font-serif italic text-gray-500">Apasă pentru a deschide invitația</p>
            </div>
        </div>
    );
}
