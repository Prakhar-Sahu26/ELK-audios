import type { Metadata, Viewport } from "next";
import { Syne, Work_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import ConditionalFooter from "@/components/ConditionalFooter";
import LayoutNavigation from "@/components/LayoutNavigation";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elk Audios",
  description: "Elk Audios",

  icons: {
    icon: "/assets/favicon Logo White (1).png", // ✅ renamed for safety
  },

  openGraph: {
    title: "Elk Audios",
    description: "Elk Audios",
    url: "https://elk-audios-nine.vercel.app/", // 🔥 CHANGE THIS
    siteName: "Elk Audios",
    images: [
      {
        url: "https://elk-audios-nine.vercel.app/assets/Logo.png", // 🔥 MUST be absolute
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elk Audios",
    description: "Elk Audios",
    images: ["https://elk-audios-nine.vercel.app/assets/Logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${workSans.variable} relative`}>
        <LayoutNavigation />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}