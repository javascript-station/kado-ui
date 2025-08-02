"use client";

import { HTMLAttributes, use } from "react";

import { ToggleContext } from "./ToggleContext";

export type ToggleSwitchPropsT = HTMLAttributes<HTMLButtonElement>;

export function ToggleSwitch({ onClick, ...p }: ToggleSwitchPropsT) {
  const { isToggled, setToggled, disabled } = use(ToggleContext)

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(ev);
      setToggled(!isToggled);
    }
  }

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((ev.key === " " || ev.key === "Enter") && !disabled) {
      ev.preventDefault();
      setToggled(!isToggled);
    }
  }

  return (
    <button
      type="button"
      role="switch"
      disabled={disabled}
      onClick={handleClick}
      aria-checked={isToggled}
      onKeyDown={handleKeyDown}
      {...p}
    >
      <span className={isToggled ? "toggle-track-on" : "toggle-track-off"}>
        <span className={isToggled ? "toggle-thumb-on" : "toggle-thumb-off"} />
      </span>
    </button>
  )
}