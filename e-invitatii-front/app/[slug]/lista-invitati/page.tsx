import Link from "next/link";

interface Guest {
    name: string;
    email: string;
    count: number;
    created_at: string;
}

const LIMIT = 10;

export default async function GuestList({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}) {
    const { slug } = await params;
    const { page: pageParam } = await searchParams;
    const page = Math.max(1, parseInt(pageParam ?? "1"));

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}guests/${slug}?page=${page}&limit=${LIMIT}`, { cache: "no-store" });

    if (!res.ok)
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{ background: "var(--theme-bg-from)" }}
            >
                <p className="text-(--theme-primary) font-eb-garamond text-xl">Eroare la încărcarea listei.</p>
            </div>
        );

    const data = await res.json();
    const guests: Guest[] = data.guests;
    const total: number = data.total ?? guests.length;
    const totalPages: number = data.pages ?? 1;
    const totalPeople = guests.reduce((sum, g) => sum + g.count, 0);
    const offset = (page - 1) * LIMIT;

    const weddingName = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return (
        <div
            className="relative min-h-screen py-12 px-4 sm:px-8"
            style={{
                background:
                    "linear-gradient(180deg, var(--theme-bg-from) 0%, var(--theme-bg-mid) 40%, var(--theme-bg-from) 70%, var(--theme-bg-to) 100%)",
            }}
        >
            {/* Decorative background blobs */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <svg
                    className="absolute -top-16 -left-16 opacity-[0.06] w-80 h-80 text-(--theme-primary)"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                >
                    <path d="M100 10 C60 10,10 50,10 100 C10 150,60 190,100 190 C140 190,190 150,190 100 C190 50,140 10,100 10 Z M100 40 C80 40,40 70,40 100 C40 130,80 160,100 160 C120 160,160 130,160 100 C160 70,120 40,100 40 Z" />
                </svg>
                <svg
                    className="absolute -bottom-16 -right-16 opacity-[0.06] w-96 h-96 text-(--theme-primary-light)"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                >
                    <path d="M100 10 C60 10,10 50,10 100 C10 150,60 190,100 190 C140 190,190 150,190 100 C190 50,140 10,100 10 Z" />
                </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-(--theme-primary) tracking-[0.3em] text-xs uppercase mb-3 font-light">
                        Confirmări
                    </p>
                    <h1 className="font-eb-garamond text-4xl md:text-5xl text-[#5c4a3a]">{weddingName}</h1>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="h-px w-16 bg-(--theme-primary) opacity-60" />
                        <svg
                            className="w-3.5 h-3.5 text-(--theme-primary) opacity-70"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <div className="h-px w-16 bg-(--theme-primary) opacity-60" />
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <div className="bg-white/80 border border-(--theme-primary-lighter) rounded-2xl px-6 py-4 text-center shadow-sm min-w-32.5">
                        <p className="text-3xl font-eb-garamond text-[#5c4a3a]">{total}</p>
                        <p className="text-(--theme-primary-light) text-xs tracking-widest uppercase mt-1">familii</p>
                    </div>
                    <div className="bg-white/80 border border-(--theme-primary-lighter) rounded-2xl px-6 py-4 text-center shadow-sm min-w-32.5">
                        <p className="text-3xl font-eb-garamond text-[#5c4a3a]">{totalPeople}</p>
                        <p className="text-(--theme-primary-light) text-xs tracking-widest uppercase mt-1">
                            {totalPages > 1 ? `persoane (p. ${page})` : "persoane"}
                        </p>
                    </div>
                </div>

                {guests.length === 0 ? (
                    <div className="bg-white/70 border border-(--theme-primary-lighter) rounded-2xl p-16 text-center">
                        <p className="font-eb-garamond text-2xl text-(--theme-primary)">Încă nu s-a înscris nimeni.</p>
                        <p className="text-(--theme-primary-light) text-sm mt-2 font-light">
                            Invitațiile sunt pe drum…
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Mobile cards */}
                        <div className="flex flex-col gap-3 sm:hidden">
                            {guests.map((guest, i) => (
                                <div
                                    key={i}
                                    className="bg-white/80 border border-(--theme-primary-lighter) rounded-2xl p-5 shadow-sm"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <p className="font-eb-garamond text-xl text-[#5c4a3a] truncate">
                                                {guest.name}
                                            </p>
                                            <p className="text-(--theme-primary) text-sm mt-0.5 truncate">
                                                {guest.email}
                                            </p>
                                        </div>
                                        <div className="shrink-0 bg-(--theme-bg-from) border border-(--theme-primary-lighter) rounded-full px-3 py-1 text-(--theme-primary) text-sm font-medium">
                                            {guest.count} pers.
                                        </div>
                                    </div>
                                    <p className="text-(--theme-primary-light) text-xs mt-3 tracking-wide">
                                        {new Date(guest.created_at).toLocaleDateString("ro-RO", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Desktop table */}
                        <div className="hidden sm:block bg-white/80 border border-(--theme-primary-lighter) rounded-2xl shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-(--theme-primary-lighter)">
                                        <th className="px-6 py-4 text-(--theme-primary) text-xs tracking-[0.2em] uppercase font-medium">
                                            #
                                        </th>
                                        <th className="px-6 py-4 text-(--theme-primary) text-xs tracking-[0.2em] uppercase font-medium">
                                            Nume
                                        </th>
                                        <th className="px-6 py-4 text-(--theme-primary) text-xs tracking-[0.2em] uppercase font-medium">
                                            Email
                                        </th>
                                        <th className="px-6 py-4 text-(--theme-primary) text-xs tracking-[0.2em] uppercase font-medium text-center">
                                            Pers.
                                        </th>
                                        <th className="px-6 py-4 text-(--theme-primary) text-xs tracking-[0.2em] uppercase font-medium">
                                            Dată
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {guests.map((guest, i) => (
                                        <tr
                                            key={i}
                                            className="border-b border-(--theme-bg-mid) last:border-0 hover:bg-(--theme-bg-from) transition-colors"
                                        >
                                            <td className="px-6 py-4 text-(--theme-primary-light) text-sm">
                                                {offset + i + 1}
                                            </td>
                                            <td className="px-6 py-4 font-eb-garamond text-lg text-[#5c4a3a]">
                                                {guest.name}
                                            </td>
                                            <td className="px-6 py-4 text-(--theme-primary) text-sm">{guest.email}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-block bg-(--theme-bg-from) border border-(--theme-primary-lighter) rounded-full px-3 py-0.5 text-(--theme-primary) text-sm">
                                                    {guest.count}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-(--theme-primary-light) text-sm">
                                                {new Date(guest.created_at).toLocaleDateString("ro-RO", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-8">
                                <PaginationLink slug={slug} page={page - 1} disabled={page <= 1}>
                                    ←
                                </PaginationLink>

                                {getPageNumbers(page, totalPages).map((p, i) =>
                                    p === "..." ? (
                                        <span key={i} className="px-2 text-(--theme-primary-light) text-sm">
                                            …
                                        </span>
                                    ) : (
                                        <PaginationLink key={p} slug={slug} page={p as number} active={p === page}>
                                            {p}
                                        </PaginationLink>
                                    ),
                                )}

                                <PaginationLink slug={slug} page={page + 1} disabled={page >= totalPages}>
                                    →
                                </PaginationLink>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function PaginationLink({
    slug,
    page,
    active,
    disabled,
    children,
}: {
    slug: string;
    page: number;
    active?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
}) {
    const base = "w-9 h-9 flex items-center justify-center rounded-xl text-sm transition-all";

    if (disabled)
        return <span className={`${base} text-(--theme-primary-lighter) cursor-not-allowed`}>{children}</span>;

    if (active)
        return <span className={`${base} bg-(--theme-primary) text-white font-medium shadow-sm`}>{children}</span>;

    return (
        <Link
            href={`/${slug}/lista-invitati?page=${page}`}
            className={`${base} bg-white/80 border border-(--theme-primary-lighter) text-(--theme-primary) hover:border-(--theme-primary) hover:shadow-sm`}
        >
            {children}
        </Link>
    );
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    if (current <= 4) return [1, 2, 3, 4, 5, "...", total];
    if (current >= total - 3) return [1, "...", total - 4, total - 3, total - 2, total - 1, total];

    return [1, "...", current - 1, current, current + 1, "...", total];
}
