/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import sessionWrapper from "@/public/components/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy my chai",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Notable&family=Rubik+Doodle+Shadow&family=Rubik+Mono+One&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <sessionWrapper>
          <Navbar />
          <div className="min-h-[80vh]">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            {children}
          </div>
          <Footer />
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        </sessionWrapper>
      </body>
    </html>
  );
}
