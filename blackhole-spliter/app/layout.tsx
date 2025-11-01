import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blackhole Spliter 11 - Free Download | UpdateStar",
  description: "Download Blackhole Spliter 11 - A powerful web design and management tool that helps streamline processes and boost productivity. Free, safe, and virus-checked.",
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
