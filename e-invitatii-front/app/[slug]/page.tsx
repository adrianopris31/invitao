import InvitationStack from "@/components/common/InvitationStack";
import EventDetails from "@/components/common/EventDetails";
import EventLocation from "@/components/common/EventLocation";
import InvitationContainer from "@/components/common/InvitationContainer";
import InvitationView from "@/components/common/InvitationView";
import PhotoStack from "@/components/common/PhotoStack";
import TimeLeft from "@/components/common/TimeLeft";
import { notFound } from "next/navigation";
const mockData = {
    names: "Joszi & Maria",
    date: "27.09.2026",
    primaryColor: "#7a9072",
    bgImage: "/images/hortensii.png",
    font: "Playfair Display",
    envelopeColor: "#cbd5c0",
    envelop_url: "/images/closedEnvelopeNoBg.png",
    card_left_bg: "/images/closedInvitation.png",
    card_right_bg: "images",
};

const failData = {
    client_names: "Iozsi & Maria",
    envelope_url: "/images/closedEnvelope2.webp",
    cover_url: "/images/leftCardCover.jpg",
    card_url: "/images/rightCover2.jpg",
    photo_stack: ["/images/photo1.png", "/images/photo2.png", "/images/photo3.png"],
    event_date: "2026-05-31 16:00:00",
    invitation_description:
        "Vă invităm cu drag să fiți alături de noi la celebrarea dragostei noastre, într-o zi plină de lumină și bucurie.",
    family_details: {
        parents_section: {
            label: "CU BINECUVÂNTAREA PĂRINȚILOR",
            names: ["IOAN ȘI CRISTINA OPRIȘ", "JOZSEF ȘI EVA SIMO"],
        },
        godparents_section: {
            label: "ȘI CU BINECUVÂNTAREA NAȘILOR",
            names: ["SZILARD ȘI IULIA VER"],
        },
    },
    cover_message: "Povestea noastră începe aici",
    welcome_message: "Abia așteptăm să petrecem clipe de neuitat alături de voi!",
    ceremony_details: [
        {
            title: "Cununia Religioasă",
            hour: "16:00",
            location: "Biserica Reformată din Ocna Mureș",
        },
        {
            title: "Petrecerea",
            hour: "19:00",
            location: "Garden By The Lake",
        },
    ],
    location_name: "Garden By The Lake",
    location_address: "Aiud, Alba",
    google_maps_iframe: "https://www.google.com/maps/embed?...",
};

export async function getInvitation(slug: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}/api/invitations/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        if (res.status === 404) return null;

        throw new Error("Eroare la descărcarea invitației");
    }

    const json = await res.json();
    return json.data;
}

export default async function Invitation({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (slug !== "iozsi-maria-2026") {
        notFound();
    }
    let invitation = await getInvitation(slug);
    if (!invitation) {
        //notFound();
        invitation = failData;
    }
    return (
        <InvitationView>
            <div className="bg-white">
                <h1
                    style={{ color: mockData.primaryColor, fontFamily: mockData.font }}
                    className="text-center p-3 border-b-2 border-gray-50"
                >
                    {invitation.client_names}
                </h1>
                <InvitationStack data={invitation}></InvitationStack>
                <EventDetails data={invitation}></EventDetails>
                <EventLocation
                    locationName={invitation.location_name}
                    address={invitation.location_address}
                ></EventLocation>
                <PhotoStack data={invitation}></PhotoStack>
                <TimeLeft targetDate={invitation.event_date}></TimeLeft>
            </div>
        </InvitationView>
    );
}
