import DropdownMenu from "./DropdownMenu";
import DropdownRoot from "./DropdownRoot";
import DropdownToggle from "./DropdownToggle";

const Dropdown = Object.assign(DropdownRoot, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu
});

export default Dropdown;