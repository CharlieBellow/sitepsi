import React from "react"

export default function Subtitle({
  children,
  className,
}: {
  children: React.ReactNode | string
  className?: string
}) {
  return <h2 className={`text-2xl font-semibold py-4 ${className}`}>{children}</h2>
}
