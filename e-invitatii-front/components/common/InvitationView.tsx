"use client";

import { useState, useEffect } from "react";
import InvitationContainer from "./InvitationContainer";

export default function InvitationView({ children, clientNames }: { children: React.ReactNode; clientNames: string }) {
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <InvitationContainer clientNames={clientNames} isOpened={isOpened} onClick={() => setIsOpened(true)} />

            <div className={!isOpened ? "h-screen overflow-hidden" : ""}>{children}</div>
        </>
    );
}
