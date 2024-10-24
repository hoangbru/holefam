import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsRegular = localFont({
  src: "./fonts/Poppins.ttf",
  variable: "--font-poppins-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
  title: 'Portfolio of holefam',
  description: 'holefam is a Front-end web dev from Hanoi',
  alternates: {
    canonical: 'https://holefam.online'
  },
  openGraph: {
    title: 'Portfolio of holefam',
    description: 'holefam is a Front-end web dev from Hanoi',
    url: 'https://holefam.online',
    images: [
      {
        url: '/images/behance.jpeg',
        width: 800,
        height: 600,
        alt: 'holefam'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio of holefam',
    description: 'holefam is a Front-end web dev from Hanoi',
    images: ['/images/behance.jpeg'],
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
