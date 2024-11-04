import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "react-hot-toast";

import "../globals.css";

import { routing } from "@/i18n/routing";

const fontRegular = localFont({
  src: "../fonts/Montserrat.ttf",
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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
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
      <body className={`${fontRegular.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
