import { createContext, Dispatch, SetStateAction } from "react";

export type ToggleContextT = {
  isToggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

export const ToggleContext = createContext<ToggleContextT>({} as ToggleContextT);