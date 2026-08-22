import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reward Campaign Admin",
  description: "Manage customers, gift inventory, campaign settings and reward claims.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
