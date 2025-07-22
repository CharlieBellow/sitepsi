

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang='pt-BR'>
      <body className=''><StackProvider app={stackServerApp}><StackTheme>
        <main className='h-screen'>
      
          {children}
        </main>
      </StackTheme></StackProvider></body>
    </html>
  );
}
