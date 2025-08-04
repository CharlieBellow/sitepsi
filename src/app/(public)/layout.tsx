import Footer from "@/src/components/Footer"
import TopHead from "@/src/components/HomePage"
import { Button } from "@/src/components/ui"
import { navLinksPublic } from "@/src/lib/constants"
import type { Metadata } from "next"
import Link from "next/link"
import { socialMediaLinks } from "../../../Utils/utilsInformations"
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
      <Link
        className='w-full flex justify-center py-6'
        href={socialMediaLinks[0].href}
        target='_blank'
      >
        <Button>Agende agora com o Psicólogo Charlie</Button>
      </Link>
      <Footer />
    </div>
  )
}
