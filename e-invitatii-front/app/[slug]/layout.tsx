export default function InvitationLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="invitation-container bg-white min-h-screen">
            {children}

            <footer className="py-4 text-center opacity-50">Creat cu Drag de InvitațiiDigitale.ro</footer>
        </section>
    );
}
