import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecaptchaProvider } from "@/components/providers/RecaptchaProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DrivLynk - The First Verified Talent Ecosystem for Trucking",
  description: "Stop relying on spammy job boards. Connect with verified Drivers, Carriers, and Dispatchers in a secure, AI-powered marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <RecaptchaProvider>
          {children}
        </RecaptchaProvider>
      </body>
    </html>
  );
}
