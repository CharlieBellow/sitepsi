import HomePage from "@/components/HomePage";
import Triangulo from "@/components/Triangulo";

export default function Home() {
  return <div className="relative">
  <HomePage/>
  <Triangulo className="right-2 border-r-red-300 border-l-red-300"/>
  <Triangulo className="-right-12 border-r-blue-300 border-l-blue-300"/>
  </div>
}
