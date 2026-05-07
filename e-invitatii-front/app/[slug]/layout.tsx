import React from "react";

// Theme defaults — will be replaced with per-invitation values from DB
const theme = {
    primary: "#7a8c74",
    primaryLight: "#cbd8c2",
    primaryLighter: "#dee7d8",
    primaryHover: "#b8c9ad",
    primaryDark: "#5f6d5a",
    bgFrom: "#f4f7f1",
    bgMid: "#edf2e8",
    bgTo: "#e6eee0",
};

export default function SlugLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                "--theme-primary": theme.primary,
                "--theme-primary-light": theme.primaryLight,
                "--theme-primary-lighter": theme.primaryLighter,
                "--theme-primary-hover": theme.primaryHover,
                "--theme-primary-dark": theme.primaryDark,
                "--theme-bg-from": theme.bgFrom,
                "--theme-bg-mid": theme.bgMid,
                "--theme-bg-to": theme.bgTo,
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
}
