import { createContext, Dispatch, SetStateAction } from "react";

type PasswordInputContextT = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const PasswordInputContext = createContext<PasswordInputContextT>({
  isVisible: false,
  setIsVisible: () => { },
});