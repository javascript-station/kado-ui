"use client"

import { type HTMLAttributes, use } from "react"
import { cn } from "../../utils/cn"
import ToggleContext from "./ToggleContext"

type ToggleDescriptionPropsT = HTMLAttributes<HTMLParagraphElement>

function ToggleDescription({ children, className, ...props }: ToggleDescriptionPropsT) {
  const { disabled } = use(ToggleContext)

  return (
    <p className={cn("toggle-description", disabled && "opacity-50", className)} {...props}>
      {children}
    </p>
  )
}

export default ToggleDescription
