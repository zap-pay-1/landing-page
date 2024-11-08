import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Seamless Web3 Payments & Invoicing for Modern Merchants",
  description:
    "Effortlessly create invoices and payment links using our Web3 platform. Accept payments in crypto, manage transactions, and streamline your merchant operations.",

  keywords: [
    "Web3 payments",
    "Crypto payments",
    "recurring payments",
    "Telegram subscription",
    "earn from Telegram",
    "Zap",
  ],

  openGraph: {
    title: "Seamless Web3 Payments & Invoicing for Modern Merchants",
    description:
      "Effortlessly create invoices and payment links using our Web3 platform. Accept payments in crypto, manage transactions, and streamline your merchant operations.",
    url: "https://www.usezap.xyz",
    images: [
      {
        url: "/img/monitize-tg.png",
        width: 800,
        height: 600,
        alt: "Monetize your Telegram community with Zap",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Seamless Web3 Payments & Invoicing for Modern Merchants",
    description:
      "Effortlessly create invoices and payment links using our Web3 platform. Accept payments in crypto, manage transactions, and streamline your merchant operations.",
    images: ["/images/monetize-tg.png"],
  },


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
