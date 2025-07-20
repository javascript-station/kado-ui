"use client"

import { type HTMLAttributes, use } from "react";

import TabsContext from "./TabsContext";

type TabsTabPropsT = HTMLAttributes<HTMLButtonElement> & {
  value: string;
}

function TabsTab({ value, onClick, ...props }: TabsTabPropsT) {
  const { setActiveTab } = use(TabsContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        setActiveTab(value);
      }}
      {...props}
    />
  )
}

export default TabsTab;
