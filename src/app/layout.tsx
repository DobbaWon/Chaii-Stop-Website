import type { Metadata } from "next";
import "../styles/globals.css";

import ContactTopbar from "../components/layout/ContactTopbar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Chaii Stop",
  description: "We are a Palestine-supporting Cafe in Deepdale, Preston.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-neutral-50 text-gray-900">
        <ContactTopbar />
        <Topbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
