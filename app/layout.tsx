import type { Metadata } from "next";
import { Poppins, Outfit, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Active Digital Solution | Expert Digital Marketing and AI Solutions",
  description:
    "Future-Proofing For Web Presence With AI and SEO Coverage. Search Engine Optimization, Google Business Profile, Social Media Marketing, Web Development, Geo-fencing, AI Optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} ${orbitron.variable}`}>
      <body className="min-h-screen flex flex-col bg-trg-bg text-trg-text antialiased font-poppins">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
