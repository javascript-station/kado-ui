import TabsList from "./TabsList"
import TabsPanel from "./TabsPanel"
import TabsRoot from "./TabsRoot"
import TabsTab from "./TabsTab"


const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
})

export default Tabs