import Footer from "@/components/Footer";
import TopHead from "@/components/HomePage";
import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Psicólogo Charlie",
  description: "Site do psicólogo Charlie",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHead />
      <main className='h-screen relative overflow-hidden'>{children}</main>
      <Footer />
    </>
  );
}
