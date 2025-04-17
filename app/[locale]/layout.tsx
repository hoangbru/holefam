import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import "../globals.css";

import { routing } from "@/i18n/routing";
import AppProvider from "@/providers/AppProvider";

const fontRegular = localFont({
  src: "../fonts/Montserrat.ttf",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: never };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all messages to the client
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
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
