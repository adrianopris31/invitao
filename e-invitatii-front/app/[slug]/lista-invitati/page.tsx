export default async function GuestList({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const res = await fetch(`http://127.0.0.1:8000/api/guests/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok)
        return <div className="max-w-2xl mx-auto text-red-600">Eroare la încărcarea listei sau slug invalid.</div>;

    const data = await res.json();
    const guests = data.guests;
    // console.log(
    //     slug
    //         .split("-")
    //         .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    //         .join(" "),
    // );

    return (
        <div className="p-8 max-w-2xl mx-auto font-serif">
            <h1 className="text-3xl mb-6 text-[#3d3429]">
                Lista Invitați -{" "}
                {slug
                    .split("-")
                    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
                    .join(" ")}
            </h1>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[#cbd8c2] text-white uppercase text-xs">
                        <tr>
                            <th className="p-4">Nume</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Persoane</th>
                            <th className="p-4">Dată</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest: any, index: any) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4 text-gray-700 font-medium">{guest.name}</td>
                                <td className="p-4 text-gray-700 font-medium">{guest.email}</td>
                                <td className="p-4 text-gray-600">{guest.count}</td>
                                <td className="p-4 text-gray-400 text-sm">
                                    {new Date(guest.created_at).toLocaleDateString("ro-RO")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {guests.length === 0 && <p className="p-10 text-center text-gray-400">Încă nu s-a înscris nimeni.</p>}
            </div>
        </div>
    );
}
