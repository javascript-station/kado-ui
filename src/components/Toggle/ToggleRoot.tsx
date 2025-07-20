"use client"

import { type PropsWithChildren, useState } from "react"
import ToggleContext from "./ToggleContext"

type ToggleRootPropsT = PropsWithChildren & {
  defaultToggled?: boolean
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "danger"
  onChange?: (toggled: boolean) => void
}

function ToggleRoot({
  children,
  defaultToggled = false,
  disabled = false,
  size = "md",
  variant = "default",
  onChange,
}: ToggleRootPropsT) {
  const [isToggled, setToggled] = useState(defaultToggled)

  const handleToggle = (newValue: boolean) => {
    setToggled(newValue)
    onChange?.(newValue)
  }

  return (
    <ToggleContext
      value={{
        isToggled,
        setToggled:() => handleToggle,
        disabled,
        size,
        variant,
      }}
    >
      {children}
    </ToggleContext>
  )
}

export default ToggleRoot
