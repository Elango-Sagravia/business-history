import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import AppProvider from "@/context/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business history",
  description: "One of the leading newsletter",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en" className={inter.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
