import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutureByte LK | Transforming Ideas Into Digital Solutions",
  description:
    "FutureByte LK is a software and technology company building modern software, web applications, AI solutions, cybersecurity systems, business management systems, and digital products.",
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