"use client"

import { type PropsWithChildren, useState, useEffect } from "react"
import ModalContext from "./ModalContext"

type ModalRootPropsT = PropsWithChildren & {
  defaultOpen?: boolean
}

function ModalRoot({ children, defaultOpen = false }: ModalRootPropsT) {
  const [isOpen, setOpen] = useState(defaultOpen)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>
}

export default ModalRoot
