import Background from "@/components/Background"
import CallToAction from "@/components/CallToAction"
import Header from "@/components/Header"
import { NavLink } from "../lib/constants"
export default function TopHead({ navLinksList }: { navLinksList: NavLink }) {
  return (
    <header
      className='overflow-hidden bg-gradient-to-br from-primary relative 
       to-danger bg-cover'
    >
      <Header navLinksList={navLinksList} />
      <CallToAction />
      <Background />
    </header>
  )
}
