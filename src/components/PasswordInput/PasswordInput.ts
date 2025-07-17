import PasswordInputRoot from "./PasswordInputRoot";
import PasswordInputField from "./PasswordInputField";
import PasswordInputToggle from "./PasswordInputToggle";

const PasswordInput = Object.assign(PasswordInputRoot, {
  Field: PasswordInputField,
  Toggle: PasswordInputToggle
})

export default PasswordInput;