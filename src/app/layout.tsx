import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prayag K - Senior Front-End Engineer (React & TS)",
  description:
    "I'm Prayag K, a senior front-end engineer specializing in React, TypeScript, and modern UI development. Explore my portfolio, projects, and experience in building scalable web apps.",
  openGraph: {
    title: "Prayag K - Senior Front-End Engineer",
    description: "My personal site showcasing projects and background.",
    url: "https://prayagk.dev",
    siteName: "Prayag K | Portfolio",
    images: [
      {
        url: "https://prayagk.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Preview of Prayag's portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ec6a13e1-6eba-4bad-8950-b3cdc3ed3518"
          strategy="afterInteractive"
        ></Script>
        <SidebarProvider open>
          <AppSidebar />

          <main className="flex-1 bg-gray-100 flex justify-center">
            <div className="w-full 2xl:max-w-7xl">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
