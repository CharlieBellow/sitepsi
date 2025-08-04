import type { Metadata } from "next"
import "./globals.css"

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
      <head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1957293003604124'
          crossOrigin='anonymous'
        ></script>
        <link
          rel='preconnect'
          href='https://charliebellow-psicologo.vercel.app'
          crossOrigin='anonymous'
        />
        <link rel='dns-prefetch' href='https://charliebellow-psicologo.vercel.app' />
        <link rel='preconnect' href='https://fonts.googleapis.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
      </head>
      <body className=''>
        <main className='h-screen'>{children}</main>
      </body>
    </html>
  )
}
