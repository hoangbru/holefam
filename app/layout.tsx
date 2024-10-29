import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const fontRegular = localFont({
  src: "./fonts/Montserrat.ttf",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio of holefam",
    template: "%s - Portfolio of holefam",
  },
  description: "holefam is a Front-end web dev from Hanoi",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    title: "Portfolio of holefam",
    description: "holefam is a Front-end web dev from Hanoi",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: "/images/behance.jpeg",
        width: 800,
        height: 600,
        alt: "holefam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio of holefam",
    description: "holefam is a Front-end web dev from Hanoi",
    images: ["/images/behance.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* UNICONS */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        {/* BOX ICONS */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${fontRegular.className}`}>{children}</body>
    </html>
  );
}
