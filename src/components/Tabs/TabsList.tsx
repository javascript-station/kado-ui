"use client"

import type { HTMLAttributes } from "react"
import { cn } from "../../utils/cn"

type TabsListPropsT = HTMLAttributes<HTMLDivElement>

function TabsList({ children, className, ...props }: TabsListPropsT) {
  return (
    <div className={cn("f-align join-border bg-muted/50 p-1 rounded-lg", className)} role="tablist" {...props}>
      {children}
    </div>
  )
}

export default TabsList
