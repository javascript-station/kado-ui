"use client"

import { Dispatch, PropsWithChildren, SetStateAction } from "react";

import TabsContext from "./TabsContext";

type TabsRootPropsT = PropsWithChildren & {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

function TabsRoot({ activeTab, setActiveTab, children }: TabsRootPropsT) {
  return (
    <TabsContext value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext>
  )
}

export default TabsRoot;