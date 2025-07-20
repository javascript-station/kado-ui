import ToggleDescription from "./ToggleDescription"
import ToggleLabel from "./ToggleLabel"
import ToggleRoot from "./ToggleRoot"
import ToggleSwitch from "./ToggleSwitch"

const Toggle = Object.assign(ToggleRoot, {
  Switch: ToggleSwitch,
  Label: ToggleLabel,
  Description: ToggleDescription,
})

export default Toggle
