import StyledComponentsRegistry from "@/app/registry";
import React from "react";
import Sidebar from "@/components/Sidebar";

export const metadata = {
    title: "MovieDetails List App",
    description: "MovieDetails List App",
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
                    <main>{children}</main>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
