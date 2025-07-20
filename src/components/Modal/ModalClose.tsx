"use client"

import type React from "react"

import { type HTMLAttributes, use } from "react"
import { X } from "lucide-react"
import { cn } from "../../utils/cn"
import ModalContext from "./ModalContext"

type ModalClosePropsT = HTMLAttributes<HTMLButtonElement> & {
  variant?: "icon" | "button"
}

function ModalClose({ children, className, variant = "button", onClick, ...props }: ModalClosePropsT) {
  const { setOpen } = use(ModalContext)

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(ev)
    setOpen(false)
  }

  if (variant === "icon") {
    return (
      <button
        className={cn("absolute top-4 right-4 p-1 rounded-md hover:bg-muted transition-colors", className)}
        onClick={handleClick}
        aria-label="Close modal"
        {...props}
      >
        <X className="icon-size-4" />
      </button>
    )
  }

  return (
    <button
      className={cn("px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors", className)}
      onClick={handleClick}
      {...props}
    >
      {children || "Close"}
    </button>
  )
}

export default ModalClose
