"use client"

import { type HTMLAttributes, use } from "react"
import { cn } from "../../utils/cn"
import ToggleContext from "./ToggleContext"

type ToggleLabelPropsT = HTMLAttributes<HTMLLabelElement>

function ToggleLabel({ children, className, ...props }: ToggleLabelPropsT) {
  const { setToggled, disabled } = use(ToggleContext)

  const handleClick = () => {
    if (!disabled) {
      setToggled((prev) => !prev)
    }
  }

  return (
    <label
      className={cn("toggle-label", disabled && "opacity-50 cursor-not-allowed", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </label>
  )
}

export default ToggleLabel
