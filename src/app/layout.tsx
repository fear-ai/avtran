import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVTran - Modern Development Platform",
  description: "Your platform for modern development. Build, deploy, and scale with confidence.",
  icons: {
    icon: [
      {
        url: '/favicon-modern.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      }
    ],
  },
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
