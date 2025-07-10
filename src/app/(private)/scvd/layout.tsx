import type { Metadata } from "next"
import "../../globals.css"
import TopHead from "@/components/HomePage"
import Footer from "@/components/Footer"


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
   <html lang="pt-BR">
         <body className="">
           <TopHead />
           <main className="h-screen relative overflow-hidden">{children}
           </main>
           <Footer />
         </body>
       </html>
  )
}
