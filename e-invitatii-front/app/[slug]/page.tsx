import InvitationStack from "@/components/common/InvitationStack";
import EventDetails from "@/components/common/EventDetails";
import EventLocation from "@/components/common/EventLocation";
import InvitationContainer from "@/components/common/InvitationContainer";
import InvitationView from "@/components/common/InvitationView";
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

export default function Invitation() {
    return (
        <InvitationView>
            <div className="bg-white">
                <h1
                    style={{ color: mockData.primaryColor, fontFamily: mockData.font }}
                    className="text-center p-3 border-b-2 border-gray-50"
                >
                    {mockData.names}
                </h1>
                <InvitationStack assets="mockData" data="mockData"></InvitationStack>
                <EventDetails></EventDetails>
                <EventLocation locationName="Satul Mureseni" address="Mureseni Mures"></EventLocation>
            </div>
        </InvitationView>
    );
}
