import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aizaz Khalid - Cybersecurity Analyst - Full Stack Developer ",
  description: "Computer Science undergraduate, full-stack developer, cybersecurity analyst, and AI enthusiast. Explore my portfolio of projects, skills, and experience.",
  icons: {
    icon: [
      { url: "/my-favicon/favicon.ico", sizes: "any" },
      { url: "/my-favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/my-favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/my-favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/my-favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/my-favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/my-favicon/site.webmanifest",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Providers>
        {children}
        </Providers>

        </ThemeProvider>
        
        
      </body>
    </html>
  );
}
