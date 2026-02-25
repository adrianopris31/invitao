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

export async function getInvitation(slug: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API_URL}/invitations/${slug}`, {
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
    const invitation = await getInvitation(slug);
    if (!invitation) {
        notFound();
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
