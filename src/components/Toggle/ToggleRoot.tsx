"use client";

import { PropsWithChildren, useState } from "react"

import { ToggleContext } from "./ToggleContext";

export type ToggleRootPropsT = PropsWithChildren & {
  defaultToggled?: boolean;
  onChange?: (toggled: boolean) => void;
  disabled?: boolean;
}

export function ToggleRoot({ children, defaultToggled = false, disabled = false, onChange }: ToggleRootPropsT) {
  const [isToggled, setToggled] = useState(defaultToggled)

  const handleToggle = (newValue: boolean) => {
    setToggled(newValue);
    onChange?.(newValue);
  }

  return (
    <ToggleContext value={{ isToggled, disabled, setToggled: () => handleToggle }}>
      {children}
    </ToggleContext>
  )
}