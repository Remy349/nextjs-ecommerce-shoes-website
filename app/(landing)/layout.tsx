import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "./_components/header/header";
import { font } from "@/lib/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Ecommerce Shoes Website",
    template: "%s | Ecommerce Shoes Website",
  },
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-muted/50`}>
        <Header />
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
