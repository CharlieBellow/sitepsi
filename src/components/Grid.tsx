import { ReactNode } from "react"

type GridProps = {
  title: string
  children: ReactNode
}
export default function Grid({ title, children }: GridProps) {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <h3 className="font-bold text-2xl gap-y-2 text-ciano-3">{title}</h3>
      <div className="flex justify-center w-full  items-center gap-8 ">
        {children}
      </div>
    </div>
  )
}
