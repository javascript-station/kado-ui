import { createContext, type Dispatch, type SetStateAction } from "react"

type ToggleContextT = {
  isToggled: boolean
  setToggled: Dispatch<SetStateAction<boolean>>
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "danger"
}

const ToggleContext = createContext<ToggleContextT>({
  isToggled: false,
  setToggled: () => {},
  disabled: false,
  size: "md",
  variant: "default",
})

export default ToggleContext
