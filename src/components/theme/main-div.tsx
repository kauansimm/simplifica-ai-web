import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MainDivInterface {
  children: ReactNode
  className?: string
}

export function MainDiv({ children, className }: MainDivInterface) {
  return (
    <div
      className={cn(
        'flex-container gap-8 max-w-[1420px] mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}