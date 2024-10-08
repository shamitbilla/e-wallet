import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AppBar } from "@repo/ui/app-bar";
import { APP_BUILD_MANIFEST } from "next/dist/shared/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <AppBar/>
          <div className="bg-[#eff6ff] h-screen">
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
