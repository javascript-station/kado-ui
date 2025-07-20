"use client"

import { type PropsWithChildren, useState } from "react"
import TabsContext from "./TabsContext"

type TabsRootPropsT = PropsWithChildren & {
  defaultValue?: string
}

function TabsRoot({ children, defaultValue = "" }: TabsRootPropsT) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return <TabsContext value={{ activeTab, setActiveTab }}>{children}</TabsContext>
}

export default TabsRoot
