import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/AppContext";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarsRianGaming",
  openGraph: {
    title: "MarsRianGaming",
    description: 'Dive into immersive story-based gameplay as I take you on epic adventures through your favorite games! Watch my gaming videos and live streams on Facebook and YouTube, where I share thrilling gameplay, and interactive experience',
    icons: {
      icon: ['/favicon.ico?v=4'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut: ['/apple-touch-icon.png']
    }
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
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
