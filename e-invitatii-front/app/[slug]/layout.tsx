import React from "react";

// Theme defaults — will be replaced with per-invitation values from DB
// const theme = {
//     primary: "#7a8c74",
//     primaryLight: "#cbd8c2",
//     primaryLighter: "#dee7d8",
//     primaryHover: "#b8c9ad",
//     primaryDark: "#5f6d5a",
//     bgFrom: "#f4f7f1",
//     bgMid: "#edf2e8",
//     bgTo: "#e6eee0",
// };
/*
const theme = {
    primary: "#9c6b7a", // dusty rose — text accents, icons, lines
    primaryLight: "#d4a5b5", // blush — buttons, envelope body
    primaryLighter: "#ead4dc", // pale blush — gradient starts, folds
    primaryHover: "#b8879a", // deeper rose — button hover
    primaryDark: "#7a4f5c", // dark rose — hover text
    bgFrom: "#fdf5f7", // barely-there blush background
    bgMid: "#f5e6eb",
    bgTo: "#ede0e4",
};
*/

const theme = {
    primary: "#c9a96e", // gold — text accents, icons, lines
    primaryLight: "#d4c4a8", // light tan — buttons, envelope body
    primaryLighter: "#ece4d8", // pale parchment — gradient starts, folds
    primaryHover: "#b8986a", // deeper gold — button hover
    primaryDark: "#a09382", // muted brown — hover text
    bgFrom: "#faf5ed", // warm ivory background
    bgMid: "#f0e8da",
    bgTo: "#ece4d8",
};

export default function SlugLayout({ children }: { children: React.ReactNode }) {
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
