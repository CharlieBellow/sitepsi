import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psicólogo Charlie",
  description: "Site do psicólogo Charlie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
