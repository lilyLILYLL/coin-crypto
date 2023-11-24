import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { Header, Footer } from "@components";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth overflow-x-hidden">
            <body className={inter.className}>
                <Header />

                <div>{children}</div>
            </body>
        </html>
    );
}
