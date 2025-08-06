import "./global.css"
import { ReactNode } from "react";

export const metadata = {
    title: "Knowledge Base Auto-Curator",
    description: "Review and manage AI-generated documentation suggestions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900">
                {children}
            </body>
        </html>
    );
}