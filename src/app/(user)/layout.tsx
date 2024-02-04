import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Redirect Shop",
  description:
    "Redirect Shop oferece redirecionamento para sites de afiliados e descontos exclusivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
