import Footer from "@/src/components/Footer"
import TopHead from "@/src/components/HomePage"
import { navLinksPrivate } from "@/src/lib/constants"
import type { Metadata } from "next"
import "../../../globals.css"

export const metadata: Metadata = {
  title: "Psicólogo Charlie",
  description: "Site do psicólogo Charlie",
  icons: {
    icon: "/favicon.png",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <TopHead navLinksList={navLinksPrivate} />
      <main className='h-screen relative overflow-hidden'>{children}</main>
      <Footer />
    </>
  )
}
