"use client"

import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import TabsContext from "./TabsContext";

type TabsPanelPropsT = HTMLAttributes<HTMLDivElement> & {
  value: string;
}

function TabsPanel({ value, className, ...props }: TabsPanelPropsT) {
  const { activeTab } = use(TabsContext);

  const isActive = activeTab === value;

  return isActive ? (
    <div
      className={cn("p-3 rounded-lg bg-foreground/10 mt-1.5", className)}
      {...props}
    />
  ) : null
}

export default TabsPanel;
