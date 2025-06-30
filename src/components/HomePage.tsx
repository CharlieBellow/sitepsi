import Background from "@/components/Background"
import CallToAction from "@/components/CallToAction"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <header
      className="overflow-hidden bg-gradient-to-br from-primary relative 
       to-danger bg-cover "
    >
      <Header />

      <CallToAction />

      <Background />
    </header>
  )
}
