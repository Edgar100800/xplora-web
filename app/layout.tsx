import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Xplora",
    description: "Discover new places and experiences",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.className}>{children}</body>
        </html>
    );
}
