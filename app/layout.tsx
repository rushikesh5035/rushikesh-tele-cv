import type { Metadata } from "next";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { jura } from "@/fonts/jura";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rushikesh Tele",
  description: "Personal Portfolio of rushikesh tele",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.className} antialiased`}>
       
          <MaxWidthWrapper>
            <Navbar />
            {children}
            <Footer />
          </MaxWidthWrapper>
        </body>
    </html>
  );
}
