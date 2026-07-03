import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mowjmusicacademy.com"),
  title: {
    default: "Mowj Music Academy | Private Piano Lessons",
    template: "%s",
  },
  description:
    "Private piano lessons with Mowj Music Academy — online (US & Canada) and in-studio (Echo Park, Los Angeles). Personalized, one-on-one instruction for all levels and ages.",
  openGraph: {
    title: "Mowj Music Academy | Private Piano Lessons",
    description:
      "Private piano lessons — online (US & Canada) and in-studio (Echo Park, Los Angeles). Personalized, one-on-one instruction for all levels and ages.",
    url: "https://www.mowjmusicacademy.com",
    siteName: "Mowj Music Academy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
