import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tradisjonstro.no - Kommer snart",
    description: "En ny nettside om norske tradisjoner er under utvikling.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='nb'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
