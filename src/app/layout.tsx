import StyledComponentsRegistry from "@/app/registry";
import Sidebar from "@/components/Sidebar";
import React from "react";

export const metadata = {
    title: "Movie List App",
    description: "Movie List App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Sidebar />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
