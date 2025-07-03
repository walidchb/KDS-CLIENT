import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Locale, routing } from "@/i18n/routing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// // import { notFound } from "next/navigation";
// import { routing, Locale } from "@/i18n/routing";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load the fonts

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "KDS - Kreative Diagnostic System",
  keywords: [
    "KDS",
    "Kreative Diagnostic System",
    "medical equipment",
    "medical devices",
    "laboratory equipment",
    "medical supplies",
    "healthcare",
    "biomedical research",
  ],
  authors: [{ name: "KDS Team" }],
  creator: "KDS Team",
  publisher: "KDS Team",
  openGraph: {
    title: "KDS - Kreative Diagnostic System",
    description:
      "Kreative Diagnostic System is a leading provider of medical equipment and devices in Algeria.",
    url: "https://kds-labs.com",
  },
  icons: {
    icon: "/LogoKdsNavBarMobile.svg", // make sure this file exists in /public
  },
};

export default async function RootLayout({
  children,
  params,
}: // params,
{
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;

  //  Validate the locale
  const validLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={validLocale}>
      <body className={` font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
