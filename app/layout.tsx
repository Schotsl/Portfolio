import "./layout.scss";

import Footer from "@/component/Footer";
import PlausibleProvider from "next-plausible";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Open_Sans, Montserrat, Merriweather } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const alt = "Een foto van de Toolenburgerplas in Hoofddorp.";
const url = "https://toolenburgerplas.nl/banner-1200x630.png";

const title = "Sjors van Holst";
const description = "Ik ben Sjors van Holst";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://sjorsvanholst.nl/"),

  openGraph: {
    type: "website",
    title,
    locale: "nl_NL",
    siteName: title,
    images: [
      {
        url,
        alt,
        width: 1200,
        height: 630,
      },
    ],
    description,
  },

  twitter: {
    images: [
      {
        url,
        alt,
        width: 1200,
        height: 630,
      },
    ],
  },

  authors: [{ name: "Sjors van Holst", url: "https://sjorsvanholst.nl/" }],
};

const openSans = Open_Sans({
  weight: ["400", "700", "600"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PlausibleProvider domain="sjorsvanholst.nl">
      <html
        lang="en"
        className={`${openSans.variable} ${montserrat.variable} ${merriweather.variable}`}
      >
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0099ff" />

          <meta name="msapplication-TileColor" content="#F1F7FC" />
          <meta name="theme-color" content="#F1F7FC" />
        </head>

        <body>
          {children}
          <Footer />
        </body>
      </html>
    </PlausibleProvider>
  );
}
