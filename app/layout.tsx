import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMF AB - Trygg fastighetsförvaltning i Piteå",
  description: "JMF AB äger och förvaltar bostäder och affärslokaler i Norrbotten. Hyr ditt boende direkt från oss.",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
