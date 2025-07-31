import type { Metadata } from "next"
import "./globals.css"
import AuthProvider from "@/components/Provider"

export const metadata: Metadata = {
  title: "Psicólogo Charlie",
  description: "Site do psicólogo Charlie",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className=''>
        <main className='h-screen'>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  )
}
