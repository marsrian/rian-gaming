import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/AppContext";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mars-rian-gaming.vercel.app"),
  title: {
    default: "MarsRianGaming: Epic PC Gaming Streams & Reviews",
    template: "%s | MarsRianGaming: Epic PC Gaming Streams & Reviews",
  },
  description:
    "Dive into immersive story-based gameplay as I take you on epic adventures through your favorite games! Watch my gaming videos and live streams on Facebook and YouTube, where I share thrilling gameplay, and interactive experience",
  keywords: [
    "PC gaming videos",
    "Shadow of the Tomb Raider stream",
    "A Plague Tale Innocence gameplay",
    "A Plague Tale Requiem stream",
    "Uncharted 4 A Thief's End PC",
    "Uncharted The Lost Legacy PC",
    "top 10 PC games",
    "how to download GTA Vice City",
    "PC gaming blog",
    "best PC games 2024",
    "PC gaming tutorials",
    "latest PC game releases",
    "PC game streaming tips",
    "high-quality PC game videos",
    "gaming setup for streaming",
    "PC game walkthroughs",
    "streaming Shadow of the Tomb Raider",
    "A Plague Tale Requiem walkthrough",
    "Uncharted 4 gameplay",
    "gaming blog tips",
  ],
  authors: [{ name: "Mars Rian", url: "https://afzal-hussain-2023.web.app/" }],
  creator: "Mars Rian",
  publisher: "Mars Rian",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "MarsRianGaming: Epic PC Gaming Streams & Reviews",
    description:
      "Dive into immersive story-based gameplay as I take you on epic adventures through your favorite games! Watch my gaming videos and live streams on Facebook and YouTube, where I share thrilling gameplay, and interactive experience",
    url: "https://mars-rian-gaming.vercel.app",
    siteName: "MarsRianGaming",
    type: "website",
    local: "en_US",
    icons: {
      icon: ["/favicon.ico?v=4"],
      apple: ["/apple-touch-icon.png?v=4"],
      shortcut: ["/apple-touch-icon.png"],
    },
  },
  twitter: {
    title: "MarsRianGaming: Epic PC Gaming Streams & Reviews",
    description:
      "DDive into immersive story-based gameplay as I take you on epic adventures through your favorite games! Watch my gaming videos and live streams on Facebook and YouTube, where I share thrilling gameplay, and interactive experience",
    handle: "@marsriangaming",
    site: "Mars-Rian-Gaming",
    cardType: "summary_large_image",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics tag (gtag.js): */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F9XP7PXRNR"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F9XP7PXRNR');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen max-w-6xl mx-auto 
        bg-[url(/bg-1.jpg)] 
        bg-cover`}
      >
        <AppProvider>
          <Toaster />
          <div className="sticky top-0 z-10">
            <Header />
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
