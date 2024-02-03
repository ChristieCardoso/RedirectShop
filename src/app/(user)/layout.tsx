import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RedirecionaShop",
  description:
    "RedirecionaShop oferece redirecionamento para sites de afiliados e descontos exclusivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
