"use client"

import type React from "react"

import { type HTMLAttributes, use } from "react"
import { cn } from "../../utils/cn"
import ToggleContext from "./ToggleContext"

type ToggleSwitchPropsT = Omit<HTMLAttributes<HTMLButtonElement>, "onChange">

function ToggleSwitch({ className, onClick, ...props }: ToggleSwitchPropsT) {
  const { isToggled, setToggled, disabled, size, variant } = use(ToggleContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(e)
      setToggled(!isToggled)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((e.key === " " || e.key === "Enter") && !disabled) {
      e.preventDefault()
      setToggled(!isToggled)
    }
  }

  const getClasses = () => {
    const classes = ["toggle"]

    if (size === "sm") classes.push("toggle-sm")
    if (size === "lg") classes.push("toggle-lg")
    if (variant !== "default") classes.push(`toggle-${variant}`)

    return classes.join(" ")
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isToggled}
      disabled={disabled}
      className={cn(getClasses(), className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span className={isToggled ? "toggle-track-on" : "toggle-track-off"}>
        <span className={isToggled ? "toggle-thumb-on" : "toggle-thumb-off"} />
      </span>
    </button>
  )
}

export default ToggleSwitch
