import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratinova — Total Control Over Your Restaurant's Reviews",
  description:
    "One platform that collects more 5-star reviews on autopilot, catches bad reviews before they go public, and keeps you in control — with instant WhatsApp alerts and AI replies. Built for Indian restaurants.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ratinova — Total Control Over Your Restaurant's Reviews",
    description:
      "Catch bad reviews before they go public. Get more 5-star reviews on autopilot. Built for Indian restaurants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
