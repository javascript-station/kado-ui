import TabsTab from "./TabsTab";
import TabsList from "./TabsList";
import TabsRoot from "./TabsRoot";
import TabsPanel from "./TabsPanel";


const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel
})

export default Tabs;