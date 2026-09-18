import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adeagbo Emmanuel | FULL STACK Developer",
  description:
    "Portfolio of Adeagbo Emmanuel, a FULL STACK developer specializing in React and Next.js.",
  openGraph: {
    title: "Adeagbo Emmanuel | FULL STACK Developer",
    description:
      "Portfolio of Adeagbo Emmanuel, a FULL STACK developer specializing in React and Next.js.",
    url: "https://adeagbo-emmanuel.vercel.app",
    siteName: "Adeagbo Emmanuel Portfolio",
    images: [
      {
        url: "https://adeagbo-emmanuel.vercel.app/images/portfolio-pics.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeagbo Emmanuel | FULL STACK Developer",
    description:
      "Portfolio of Adeagbo Emmanuel, a FULL STACK developer specializing in React and Next.js.",
    images: ["https://adeagbo-emmanuel.vercel.app/images/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${inter.variable} relative antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
