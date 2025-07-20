"use client"

import { ReactNode, use } from "react"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { cn } from "../../utils/cn"
import TabsContext from "./TabsContext"

type TabsPanelPropsT = HTMLMotionProps<"div"> & {
  value: string
}

function TabsPanel({ value, children, className, ...props }: TabsPanelPropsT) {
  const { activeTab } = use(TabsContext)
  const isActive = activeTab === value

  return (
    <AnimatePresence mode="wait">
      {isActive ? (
        <motion.div
          className={cn("mt-4", className)}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          {...props}
        >
          {children as ReactNode}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default TabsPanel
