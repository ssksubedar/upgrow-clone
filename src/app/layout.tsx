import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss"
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Upgrow",
  description: "Upgrow clone created by Sravan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
