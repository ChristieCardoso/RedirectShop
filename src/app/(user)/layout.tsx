import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Redirect Shop",
  description:
    "Redirect Shop oferece redirecionamento para sites de afiliados e descontos exclusivos",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
