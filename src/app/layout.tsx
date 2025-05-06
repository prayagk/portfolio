import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
        <SidebarProvider open>
          <AppSidebar />

          <main className="flex-1">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
