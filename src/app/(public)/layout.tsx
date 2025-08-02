import Footer from "@/components/Footer"
import TopHead from "@/components/HomePage"
import { navLinksPublic } from "@/lib/constants"
import type { Metadata } from "next"
import "../globals.css"

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
    <div>
      <TopHead navLinksList={navLinksPublic} />
      <main className='min-h-screen relative overflow-hidden'>{children}</main>
      <Footer />
    </div>
  )
}
