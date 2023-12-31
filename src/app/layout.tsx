import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.css";
import Header from "@/components/layouts/main/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Header />
      </body>
    </html>
  );
}
