"use client"

import { type HTMLAttributes, use } from "react"
import { cn } from "../../utils/cn"
import ModalContext from "./ModalContext"

type ModalTriggerPropsT = HTMLAttributes<HTMLButtonElement>

function ModalTrigger({ children, className, onClick, ...props }: ModalTriggerPropsT) {
  const { setOpen } = use(ModalContext)

  return (
    <button
      className={cn(
        "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",
        className,
      )}
      onClick={(ev) => {
        onClick?.(ev)
        setOpen(true)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default ModalTrigger
