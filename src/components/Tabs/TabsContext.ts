import { createContext, Dispatch, SetStateAction } from "react";

type TabsContextT = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const TabsContext = createContext<TabsContextT>({
  activeTab: "",
  setActiveTab: () => { },
});

export default TabsContext;
