"use client"

import type { HTMLAttributes } from "react"
import { cn } from "../../utils/cn"

type ModalBodyPropsT = HTMLAttributes<HTMLDivElement>

function ModalBody({ children, className, ...props }: ModalBodyPropsT) {
  return (
    <div className={cn("px-6 py-4 overflow-y-auto", className)} {...props}>
      {children}
    </div>
  )
}

export default ModalBody
