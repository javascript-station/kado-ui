"use client"

import type React from "react"

import { use, useRef, useEffect } from "react"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { cn } from "../../utils/cn"
import ModalContext from "./ModalContext"
import Portal from "../Portal/Portal"
import ClientOnly from "../ClientOnly/ClientOnly"


type ModalContentPropsT = HTMLMotionProps<"div"> & {
  closeOnBackdropClick?: boolean
}

function ModalContent({ children, className, closeOnBackdropClick = true, ...props }: ModalContentPropsT) {
  const { isOpen, setOpen } = use(ModalContext)
  const contentRef = useRef<HTMLDivElement>(null)

  // Focus management
  useEffect(() => {
    if (isOpen && contentRef.current) {
      const focusableElements = contentRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      const firstElement = focusableElements[0] as HTMLElement
      firstElement?.focus()
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      setOpen(false)
    }
  }

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="fixed inset-0 z-50 f-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackdropClick}
            >
              <div className="absolute inset-0 bg-black/50" />

              <motion.div
                ref={contentRef}
                className={cn(
                  "relative bg-background rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-hidden",
                  className,
                )}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                role="dialog"
                aria-modal="true"
                {...props}
              >
                {children}
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  )
}

export default ModalContent
