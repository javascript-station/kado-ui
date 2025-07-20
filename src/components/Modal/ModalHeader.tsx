"use client"

import type { HTMLAttributes } from "react"
import { cn } from "../../utils/cn"

type ModalHeaderPropsT = HTMLAttributes<HTMLDivElement>

function ModalHeader({ children, className, ...props }: ModalHeaderPropsT) {
  return (
    <div className={cn("px-6 py-4 separate-b", className)} {...props}>
      <h2 className="text-lg font-semibold">{children}</h2>
    </div>
  )
}

export default ModalHeader
