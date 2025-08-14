import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avtran - Modern Development Platform",
  description: "Your platform for modern development. Build, deploy, and scale with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
