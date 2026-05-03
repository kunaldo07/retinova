import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratinova — Total Control Over Your Restaurant's Reviews",
  description:
    "One platform that manages all your reviews across Google, Zomato, Swiggy and Facebook — with instant WhatsApp alerts, AI replies, and smart review routing built for Indian restaurants.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
