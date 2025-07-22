import ContextMenuRoot from "./ContextMenuRoot";
import ContextMenuContent from "./ContextMenuContent";

const ContextMenu = Object.assign(ContextMenuRoot, {
  Content: ContextMenuContent
});

export default ContextMenu;