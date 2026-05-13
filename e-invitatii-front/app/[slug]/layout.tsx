import React from "react";
import { getInvitation } from "./page";

const defaultTheme = {
    primary: "#c9a96e", // gold — text accents, icons, lines
    primaryLight: "#d4c4a8", // light tan — buttons, envelope body
    primaryLighter: "#ece4d8", // pale parchment — gradient starts, folds
    primaryHover: "#b8986a", // deeper gold — button hover
    primaryDark: "#a09382", // muted brown — hover text
    bgFrom: "#faf5ed", // warm ivory background
    bgMid: "#f0e8da",
    bgTo: "#ece4d8",
};

export default async function SlugLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const invitation = await getInvitation(slug);
    const t = invitation?.theme;
    const theme = t
        ? {
              primary: t.primary,
              primaryLight: t.primary_light,
              primaryLighter: t.primary_lighter,
              primaryHover: t.primary_hover,
              primaryDark: t.primary_dark,
              bgFrom: t.bg_from,
              bgMid: t.bg_mid,
              bgTo: t.bg_to,
          }
        : defaultTheme;
    return (
        <div
            style={
                {
                    "--theme-primary": theme.primary,
                    "--theme-primary-light": theme.primaryLight,
                    "--theme-primary-lighter": theme.primaryLighter,
                    "--theme-primary-hover": theme.primaryHover,
                    "--theme-primary-dark": theme.primaryDark,
                    "--theme-bg-from": theme.bgFrom,
                    "--theme-bg-mid": theme.bgMid,
                    "--theme-bg-to": theme.bgTo,
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
}
