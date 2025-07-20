"use client"

import { type HTMLAttributes, use } from "react"
import { cn } from "../../utils/cn"
import TabsContext from "./TabsContext"

type TabsTabPropsT = HTMLAttributes<HTMLButtonElement> & {
  value: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TabsTab({ value, children, className, onClick, ...props }: TabsTabPropsT) {
  const { activeTab, setActiveTab } = use(TabsContext)
  const isActive = activeTab === value

  return (
    <button
      className={cn(
        "btn-fill ",
        "",
        isActive ? "bg-background text-foreground" : "text-muted-foreground",
      )}
      role="tab"
      aria-selected={isActive}
      onClick={(ev) => {
        onClick?.(ev)
        setActiveTab(value)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default TabsTab
